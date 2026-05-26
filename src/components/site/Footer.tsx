"use client";

import logo from "@/assets/logo.png";

const cols = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "#home" },
      { label: "Integrations", href: "#home" },
      { label: "Pricing", href: "#home" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About us", href: "#about" },
      { label: "Blog", href: "#home" },
      { label: "Careers", href: "#home" },
      { label: "Customers", href: "#home" },
      { label: "Brand", href: "#home" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Community", href: "#home" },
      { label: "Contact", href: "#contact" },
      { label: "DPA", href: "#home" },
      { label: "Terms of service", href: "#home" },
    ],
  },
];

export function Footer() {
  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white shadow-[0px_-7px_10.45px_rgba(16,66,149,0.2)]">
      <div className="mx-auto max-w-7xl pt-20 pb-10 px-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }}>
              <img src={logo.src} alt="Umajeet Infratech" className="h-14 w-auto" />
            </a>
            <p className="mt-5 text-[18px] text-[#1a1a1a]">
              More Comfortable.
              <br />
              More Classy.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[18px] font-bold text-black">{c.title}</h4>
              <ul className="mt-4 space-y-2">
                {c.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); go(item.href); }}
                      className="text-[16px] text-[#1a1a1a] transition hover:text-[#1D4ED8]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#1a1a1a] h-px w-full" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p className="text-[14px] text-[#1a1a1a]">© 2025 Umajeet Infratech. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }} className="text-[14px] text-[#1a1a1a] hover:text-[#1D4ED8]">Terms of Service</a>
            <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }} className="text-[14px] text-[#1a1a1a] hover:text-[#1D4ED8]">Policy service</a>
            <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }} className="text-[14px] text-[#1a1a1a] hover:text-[#1D4ED8]">Cookie Policy</a>
            <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }} className="text-[14px] text-[#1a1a1a] hover:text-[#1D4ED8]">Partners</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
