import story from "@/assets/buildings5.jpg";
import vision from "@/assets/buildings4.jpg";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-[#f5f7fa] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading>About Us</SectionHeading>
        <div className="mt-16 space-y-[72px]">
          {/* Our Story */}
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="border border-[#d9d9d9] rounded-3xl p-4 transition-all duration-300 hover:-translate-y-3 cursor-poi hover:shadow-[0_10px_10px_rgba(0.90,0.90,0.90,0.90)]">
              <img src={story.src} alt="Our story" className="rounded-2xl h-[328px] w-full object-cover" />
            </div>
            <div>
              <h3 className="text-[40px] font-bold text-[#1a1a1a] leading-[1.1]">Our Story</h3>
              <p className="mt-8 text-[20px] leading-[1.4] text-[#1a1a1a] text-justify tracking-[0.2px]">
                Umajeet Infratech Pvt. Ltd., established in 2025, is a forward-looking infrastructure and construction company committed to delivering high quality, sustainable, and innovative solutions in the rapidly evolving infrastructure sector. With a strong foundation built on integrity, excellence, and reliability, we provide end-to-end services in construction, infrastructure development, and consultancy.
              </p>
            </div>
          </div>
          {/* Our Vision */}
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="text-[40px] font-bold text-[#1a1a1a] leading-[1.1]">Our Vision</h3>
              <p className="mt-8 text-[20px] leading-[1.4] text-[#1a1a1a] text-justify">
                Our vision is to be a pioneering force in civil engineering and infrastructure development across India, recognized for delivering projects that combine quality, safety, and innovation. We aspire to create sustainable, modern, and resilient spaces—from structural works to turnkey solutions—that uplift communities and enable growth. Through the integration of cutting-edge technology, eco-friendly practices, and digital transformation, we aim to redefine the standards of construction efficiency, cost-effectiveness, and client satisfaction.
              </p>
            </div>
            <div className="order-1 border border-[#d9d9d9] rounded-3xl p-4 md:order-2 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_10px_10px_rgba(0.90,0.90,0.90,0.90)]">
              <img src={vision.src} alt="Our vision" className="rounded-2xl h-[328px] w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
