"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Leaders", href: "#leaders" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "about", "services", "leaders", "contact"];
      const mid = window.scrollY + window.innerHeight / 3;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid && el.offsetTop + el.offsetHeight > mid) {
          setActive("#" + id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white py-6 md:py-8 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 cursor-pointer">
        <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }}>
          <img src={logo.src} alt="Umajeet Infratech" className="h-14 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); go(l.href); }}
              className={`text-[18px] font-bold transition-colors hover:text-[#1D4ED8] ${
                active === l.href ? "text-[#1D4ED8]" : "text-[#0c1b2e]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => go("#contact")}
            className="bg-[#000154] rounded-2xl px-6 py-4 text-[18px] font-bold text-white transition hover:opacity-90"
          >
            Get Quotation
          </button>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md text-[#0c1b2e] md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#d9d9d9] bg-white md:hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); go(l.href); }}
              className={`rounded-md px-3 py-2 text-[18px] font-bold text-[#0c1b2e] hover:bg-gray-100 ${
                active === l.href ? "text-[#1D4ED8]" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => go("#contact")}
            className="mt-2 bg-[#000154] rounded-2xl px-6 py-4 text-[18px] font-bold text-white"
          >
            Get Quotation
          </button>
        </nav>
      </div>
    </header>
  );
}
