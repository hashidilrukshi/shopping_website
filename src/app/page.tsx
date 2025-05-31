import Hero from "@/components/Hero";
import HotOffersPage from "@/components/HotOffersPage";
import JewelryPage from "@/components/JewelryPage";
import MensPage from "@/components/MensPage";
import NewProducts from "@/components/NewProducts";
import PerfumePage from "@/components/PerfumePage";
import TermSection from "@/components/TermSection";
import WomensPage from "@/components/WomensPage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero/>
        <NewProducts/>
        <TermSection/>
      </section>
      <section id="mens">
        <MensPage/>
      </section>
      <section id="womens">
        <WomensPage/>
      </section>
      <section id="jewelry">
        <JewelryPage/>
      </section>
      <section id="perfume">
        <PerfumePage/>
      </section>
      <section id="hot-offers">
        <HotOffersPage/>
      </section>
    </main>
  );
}