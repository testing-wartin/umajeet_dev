import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const VALID_SUBJECTS = ["General Inquiry", "Quotation", "Partnership", "Support"] as const;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60_000;

const ipRequests = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipRequests.get(ip);

  if (!record || now > record.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) return true;

  record.count++;
  return false;
}

interface ContactBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

function validate(body: ContactBody): string | null {
  const { firstName, lastName, email, subject, message } = body;

  if (!firstName?.trim() || firstName.trim().length > 120)
    return "First name is required and must be under 120 characters.";
  if (!lastName?.trim() || lastName.trim().length > 120)
    return "Last name is required and must be under 120 characters.";
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    return "A valid email address is required.";
  if (!VALID_SUBJECTS.includes(subject as (typeof VALID_SUBJECTS)[number]))
    return "Invalid subject selected.";
  if (!message?.trim() || message.trim().length > 1000)
    return "Message is required and must be under 1000 characters.";

  return null;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
  if (!receiverEmail) {
    console.error("CONTACT_RECEIVER_EMAIL environment variable is not set.");
    return NextResponse.json(
      { error: "Server configuration error. Please contact us directly." },
      { status: 500 }
    );
  }

  const { firstName, lastName, email, phone, subject, message } = body;

  const emailBody = [
    `First Name: ${firstName.trim()}`,
    `Last Name: ${lastName.trim()}`,
    `Email: ${email.trim()}`,
    `Phone: ${phone?.trim() || "Not provided"}`,
    `Subject: ${subject}`,
    ``,
    `Message:`,
    message.trim(),
  ].join("\n");

  try {
    await resend.emails.send({
      from: "Umajeet Infratech <noreply@umajeet.com>",
      to: [receiverEmail],
      subject: `New Contact Form Submission - ${subject}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend send error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
