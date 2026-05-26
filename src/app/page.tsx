import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Reputation } from "@/components/site/Reputation";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Leaders } from "@/components/site/Leaders";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { PageLoader } from "@/components/site/PageLoader";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[var(--brand-navy)]">
      <PageLoader />
      <Navbar />
      <Hero />
      <Reputation />
      <About />
      <Services />
      <Leaders />
      <Contact />
      <Footer />
    </main>
  );
}
