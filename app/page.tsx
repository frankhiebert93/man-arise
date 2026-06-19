import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Program from "@/components/Program";
import Kickoff from "@/components/Kickoff";
import Activities from "@/components/Activities";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pillars />
      <Program />
      <Kickoff />
      <Activities />
      <Resources />
      <Footer />
    </main>
  );
}
