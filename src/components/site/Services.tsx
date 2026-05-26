import interior from "@/assets/buildings2.png";
import curing from "@/assets/bucket.jpg";
import civil from "@/assets/buildings.jpg";
import roads from "@/assets/road.jpg";
import horti from "@/assets/horticulture.jpg";
import elec from "@/assets/pipes.jpg";
import vent from "@/assets/lights.jpg";
import fire from "@/assets/buttons.jpg";
import pipe from "@/assets/cylinder.jpg";
import { SectionHeading } from "./SectionHeading";

function Card({ img, title, className = "" }: { img: string; title: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[25px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_10px_10px_rgba(0.90,0.90,0.90,0.90)] hover:z-10 ${className}`}>
      <img src={img} alt={title} className="h-full w-full object-cover" />
      <div className="absolute bottom-0 inset-x-0 bg-[#0c1b2e] py-5 px-4 text-center">
        <span className="text-[26px] md:text-[32px] font-bold text-white">{title}</span>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading>Services We Offer</SectionHeading>

        <div className="mt-12 flex flex-col gap-5">
          {/* Row 1: Interior [59fr] + Curing [41fr] */}
          <div className="grid gap-5 md:grid-cols-[59fr_41fr]">
            <Card img={interior.src} title="Interior & Exterior" className="h-[368px]" />
            <Card img={curing.src} title="Curing & Finishing" className="h-[368px]" />
          </div>

          {/* Row 2: Civil full width */}
          <Card img={civil.src} title="Civil Construction & Contracting (Residential, Commercial, Industrial)" className="h-[570px]" />

          {/* Row 3: Roads [41fr] + Horticulture [59fr] */}
          <div className="grid gap-5 md:grid-cols-[41fr_59fr]">
            <Card img={roads.src} title="Roads & Highways" className="h-[320px]" />
            <Card img={horti.src} title="Horticulture" className="h-[320px]" />
          </div>

          {/* Row 4: Electrical + Ventilation */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Card img={elec.src} title="Electrical Bus Duct Installation" className="h-[570px]" />
            <Card img={vent.src} title="Ventilation Panel Installation" className="h-[570px]" />
          </div>

          {/* Row 5: Fire Alarm + Pipe Work */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Card img={fire.src} title="Fire Alarm Work" className="h-[570px]" />
            <Card img={pipe.src} title="Pipe Work Installation" className="h-[570px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
