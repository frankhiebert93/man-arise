import Hero from "@/components/Hero";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Kickoff from "@/components/Kickoff";
import Details from "@/components/Details";
import Pillars from "@/components/Pillars";
import Program from "@/components/Program";
import Activities from "@/components/Activities";
import Resources from "@/components/Resources";
import Leaders from "@/components/Leaders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoThisIsFor />
      <Kickoff />
      <Details />
      <Pillars />
      <Program />
      <Activities />
      <Resources />
      <Leaders />
      <Footer />
    </main>
  );
}
