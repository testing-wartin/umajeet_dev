import headphones from "@/assets/headphones.svg";
import pencil from "@/assets/pencil.svg";

const items = [
  { img: headphones.src, title: "Best Services", desc: "Delivering exceptional real estate solutions that go beyond expectations." },
  { img: headphones.src, title: "Best Teams", desc: "Our experienced professionals ensure precision and excellence in every project." },
  { img: pencil.src, title: "Best Designs", desc: "Innovative, functional, and future-ready designs that inspire trust and admiration." },
];

export function Reputation() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-center text-4xl font-black text-[#0c1b2e]">Our Reputation</h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-[#d9d9d9] bg-white px-5 pt-5 pb-10 shadow-[0px_0px_8px_rgba(17,24,39,0.1)]">
              <span className="flex h-10 w-10 items-center justify-center text-[#0c1b2e]">
                <img src={it.img} alt={it.title} className="h-10 w-10" />
              </span>
              <h3 className="mt-5 text-[28px] font-bold text-[#1a1a1a]">{it.title}</h3>
              <p className="mt-3 text-[20px] leading-normal text-[#666666] max-w-[274px]">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
