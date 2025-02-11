import Blurb from "@/components/home/blurb";
import ParticleEmitter from "@/components/home/particle";
export default function Home() {
  return (
    <>
      <div className="w-in text-7xl text-center">Lagunitas Studios</div>
      <Blurb />
      <Blurb />
      <ParticleEmitter />
    </>
  );
}
