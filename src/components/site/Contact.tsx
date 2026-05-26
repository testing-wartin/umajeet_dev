"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { countries, flagEmoji } from "@/data/countries";
import { submitContactForm } from "@/lib/contact";

const subjects = ["General Inquiry", "Quotation", "Partnership", "Support"];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [subject, setSubject] = useState(subjects[0]);
  const [selectedIso, setSelectedIso] = useState("IN");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const selectedCountry =
    countries.find((c) => c.isoCode === selectedIso) ?? countries[0];

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const emailError = emailTouched && email.trim() !== "" && !emailValid
    ? "Please enter a valid email address."
    : undefined;

  const isFormValid =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    emailValid &&
    phoneNumber.trim() !== "";

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setStatusMessage("");

    const result = await submitContactForm({
      firstName,
      lastName,
      email,
      phone: `${selectedCountry.dialCode} ${phoneNumber}`.trim(),
      subject,
      message: (data.get("message") as string) ?? "",
    });

    if (!result.success) {
      setStatus("error");
      setStatusMessage(result.error!);
      return;
    }

    setStatus("success");
    setStatusMessage("Your message has been sent! We'll be in touch soon.");
    form.reset();
    setFirstName("");
    setLastName("");
    setEmail("");
    setEmailTouched(false);
    setSubject(subjects[0]);
    setSelectedIso("IN");
    setPhoneNumber("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading>Contact Us</SectionHeading>
        <p className="mt-4 text-center text-[18px] text-[#717171] font-[family-name:var(--font-poppins)]">
          Any question or remarks? Just write us a message!
        </p>

        <div className="mt-12 grid rounded-xl shadow-sm overflow-hidden md:grid-cols-[1fr_1.6fr]">
          {/* Info panel */}
          <div className="relative overflow-hidden bg-[#0c1b2e] px-10 py-12 text-white">
            <h3 className="font-[family-name:var(--font-poppins)] text-[28px] font-semibold text-white">
              Contact Information
            </h3>
            <p className="mt-2 font-[family-name:var(--font-poppins)] text-[18px] text-[#c9c9c9]">
              Say something to start a live chat!
            </p>

            <ul className="mt-10 space-y-8 font-[family-name:var(--font-poppins)]">
              <li className="flex items-center gap-5 text-[16px] text-white">
                <Phone className="h-5 w-5 shrink-0" />
                +91 8810231083 | 9891920211
              </li>
              <li className="flex items-center gap-5 text-[16px] text-white">
                <Mail className="h-5 w-5 shrink-0" />
                umajeetinfratech5@gmail.com
              </li>
              <li className="flex items-start gap-5 text-[16px] text-white">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  Plot no.49 UG-2 Gyan khand -1 <br />
                  Indirapuram,Ghaziabad, Uttar Pradesh – 201014
                </span>
              </li>
            </ul>

            {/* Decorative circles */}
            <span className="pointer-events-none absolute -bottom-16 -right-8 h-52 w-52 rounded-full border border-white/20 bg-white/5" />
            <span className="pointer-events-none absolute -bottom-4 right-20 h-36 w-36 rounded-full border border-white/20 bg-white/10" />
          </div>

          {/* Form panel */}
          <form
            onSubmit={onSubmit}
            className="bg-white p-8 md:p-10 font-[family-name:var(--font-poppins)]"
          >
            {/* Name row */}
            <div className="grid gap-6 md:grid-cols-2">
              <Field
                label="First Name"
                placeholder="John"
                value={firstName}
                onChange={setFirstName}
              />
              <Field
                label="Last Name"
                placeholder="Doe"
                value={lastName}
                onChange={setLastName}
              />
            </div>

            {/* Email / Phone row */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Field
                label="Email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={setEmail}
                onBlur={() => setEmailTouched(true)}
                error={emailError}
              />
              <PhoneField
                selectedIso={selectedIso}
                onIsoChange={setSelectedIso}
                phoneNumber={phoneNumber}
                onPhoneChange={setPhoneNumber}
              />
            </div>

            {/* Subject */}
            <div className="mt-8">
              <p className="text-[14px] font-semibold text-[#0c1b2e]">
                Select Subject?
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                {subjects.map((s) => (
                  <label
                    key={s}
                    className="flex cursor-pointer items-center gap-2 text-[14px] text-[#666666]"
                  >
                    <input
                      type="radio"
                      name="subject"
                      checked={subject === s}
                      onChange={() => setSubject(s)}
                      className="h-4 w-4 accent-[#0c1b2e]"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mt-8">
              <label className="text-[14px] font-semibold text-[#666666]">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                maxLength={1000}
                placeholder="Write your message here..."
                className="mt-1 w-full resize-none border-b border-[#d9d9d9] bg-transparent pb-3 text-[14px] placeholder:text-[#aaa] focus:outline-none focus:border-[#0c1b2e]"
              />
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col items-end gap-3">
              {status === "success" && (
                <p className="text-[14px] text-green-600">{statusMessage}</p>
              )}
              {status === "error" && (
                <p className="text-[14px] text-red-600">{statusMessage}</p>
              )}
              <button
                type="submit"
                disabled={!isFormValid || status === "loading"}
                className="bg-[#0c1b2e] text-white px-12 py-4 rounded-[5px] text-[16px] font-semibold transition hover:opacity-80 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  onBlur?: () => void;
  error?: string;
}) {
  return (
    <div>
      <label className="text-[14px] font-semibold text-[#666666]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        maxLength={120}
        className={`mt-1 w-full border-b bg-transparent pb-3 text-[14px] text-[#0c1b2e] placeholder:text-[#aaa] focus:outline-none ${
          error ? "border-red-400 focus:border-red-400" : "border-[#d9d9d9] focus:border-[#0c1b2e]"
        }`}
      />
      {error && <p className="mt-1 text-[12px] text-red-500">{error}</p>}
    </div>
  );
}

function PhoneField({
  selectedIso,
  onIsoChange,
  phoneNumber,
  onPhoneChange,
}: {
  selectedIso: string;
  onIsoChange: (iso: string) => void;
  phoneNumber: string;
  onPhoneChange: (num: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = countries.find((c) => c.isoCode === selectedIso) ?? countries[0];

  const filtered = search.trim()
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dialCode.includes(search)
      )
    : countries;

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div>
      <label className="text-[14px] font-semibold text-[#666666]">
        Phone Number
      </label>
      <div className="mt-1 flex items-end gap-1 border-b border-[#d9d9d9] focus-within:border-[#0c1b2e]">
        {/* Country code picker */}
        <div ref={containerRef} className="relative shrink-0">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1 pb-3 text-[14px] text-[#0c1b2e] cursor-pointer focus:outline-none"
          >
            <span className="font-medium">{selected.dialCode}</span>
            <ChevronDown
              className={`h-3.5 w-3.5 text-[#666] transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute top-full left-0 z-50 mt-1 w-64 rounded-md border border-[#e5e5e5] bg-white shadow-lg">
              {/* Search */}
              <div className="border-b border-[#e5e5e5] px-3 py-2">
                <input
                  autoFocus
                  type="text"
                  placeholder="Search country or code..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full text-[13px] text-[#0c1b2e] placeholder:text-[#aaa] focus:outline-none"
                />
              </div>

              {/* List */}
              <ul className="max-h-52 overflow-y-auto">
                {filtered.length === 0 && (
                  <li className="px-3 py-3 text-[13px] text-[#999]">
                    No results
                  </li>
                )}
                {filtered.map((c) => (
                  <li key={c.isoCode}>
                    <button
                      type="button"
                      onClick={() => {
                        onIsoChange(c.isoCode);
                        setOpen(false);
                        setSearch("");
                      }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] hover:bg-[#f5f5f5] ${
                        c.isoCode === selectedIso ? "bg-[#f0f0f0] font-medium" : ""
                      }`}
                    >
                      <span className="text-[15px] leading-none">
                        {flagEmoji(c.isoCode)}
                      </span>
                      <span className="w-10 shrink-0 text-[#666]">
                        {c.dialCode}
                      </span>
                      <span className="truncate text-[#0c1b2e]">{c.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Number input */}
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) =>
            onPhoneChange(e.target.value.replace(/[^0-9\s\-\(\)]/g, ""))
          }
          placeholder="98765 43210"
          maxLength={15}
          className="min-w-0 flex-1 bg-transparent pb-3 text-[14px] text-[#0c1b2e] placeholder:text-[#aaa] focus:outline-none"
        />
      </div>
    </div>
  );
}
