import Hero from "@/components/home/hero";
import ParticleEmitter from "@/components/home/particle";
import FeaturedGame from "@/components/home/featured";

export default function Home() {
  return (
    <>
      <div className="w-in text-7xl text-center">Lagunitas Studios</div>
      <Hero />
      <FeaturedGame />
      <ParticleEmitter />
    </>
  );
}
