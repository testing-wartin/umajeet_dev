import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umajeet",
  description:
    "Umajeet Infratech Pvt. Ltd. — trusted construction, infrastructure and real estate solutions. Civil works, interiors, MEP and more.",
  authors: [{ name: "Umajeet" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Umajeet Infratech — Build Dreams Into Reality",
    description: "Trusted construction & infrastructure solutions.",
    type: "website",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary",
    site: "@UmajeetInfratech",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${poppins.variable}`}>
      <body style={{ fontFamily: "var(--font-lato), sans-serif" }}>{children}</body>
    </html>
  );
}
