"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import owner1 from "@/assets/owner.jpg";
import owner2 from "@/assets/owner2.jpg";

const leaders = [
  {
    name: "Mr. Ajeet",
    role: "Managing Director",
    bio: "Mr. Ajeet is a visionary leader who combines strategic foresight with a meticulous commitment to quality and service excellence. With a proven track record in the infrastructure sector, he brings to the organization not only innovative business strategies but also a strong ability to translate vision into actionable results.\n\nHis forward-thinking mindset allows him to anticipate industry shifts and adapt proactively, ensuring that Umajeet Infratech remains ahead of market trends. By conceptualizing and leading projects with precision, he addresses the evolving needs of clients and communities—whether through modern construction practices, sustainable development, or advanced project management techniques.",
    image: owner1,
  },
  {
    name: "Mrs. Uma",
    role: "Director",
    bio: "Mrs. Uma drives operational excellence and people-first leadership at Umajeet Infratech. Her hands-on approach to project governance, vendor management, and client relationships ensures every engagement delivers measurable value.\n\nWith deep expertise in compliance, sustainability and stakeholder management, she champions a culture of accountability, safety and continuous improvement across all verticals of the company.",
    image: owner2,
  },
];

export function Leaders() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % leaders.length);
  const prev = () => setI((v) => (v - 1 + leaders.length) % leaders.length);
  const l = leaders[i];

  return (
    <section id="leaders" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Intro banner */}
        <div className="rounded-xl bg-[#a6d2ff] px-[60px] py-[60px]">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-16 bg-[#0c1b2e]" />
                <p className="text-[24px] font-bold text-[#0c1b2e] tracking-widest">OUR LEADERS</p>
              </div>
              <h2 className="mt-4 text-[48px] font-black text-[#1a1a1a] leading-[1.1]">
                Invested in your success
              </h2>
            </div>
            <div>
              <p className="text-[20px] leading-[1.4] text-[#1a1a1a]">
                As owners, we are more accountable to you and more invested in your success. Across
                all levels of our organization, our experienced, innovative solution providers put
                our culture of ownership to work for you. When you succeed, we succeed.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block text-[18px] font-semibold text-[#0c1b2e] underline-offset-4 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Leader card */}
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="p-4">
            <h3 className="text-[40px] font-bold text-[#0c1b2e]">{l.name}</h3>
            <p className="mt-1 text-[24px] font-medium text-[#666666]">{l.role}</p>
            <div className="mt-6 space-y-4 text-[20px] leading-normal text-[#1a1a1a] text-justify">
              {l.bio.split("\n\n").map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="h-14 w-14 rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#0c1b2e] hover:bg-[#0c1b2e] hover:text-white transition"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="h-14 w-14 rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#0c1b2e] hover:bg-[#0c1b2e] hover:text-white transition"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {leaders.map((_, idx) => (
                  <span
                    key={idx}
                    className={`rounded-full transition-all ${
                      idx === i ? "w-6 h-3 bg-[#104295]" : "w-3 h-3 bg-[#d9d9d9]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="h-[600px] w-[500px] border border-[#d9d9d9] rounded-3xl px-10 py-4 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_10px_10px_rgba(0.90,0.90,0.90,0.90)] ">
            <img
              src={l.image.src}
              alt={l.name}
              className="object-cover rounded-2xl h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
