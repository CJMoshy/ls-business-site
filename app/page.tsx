import Blurb from "@/components/home/blurb";
import ParticleEmitter from "@/components/home/particle";
import Slider from "@/components/ui/slider";

export default function Home() {
  return (
    <>
      <div className="w-in text-7xl text-center">Lagunitas Studios</div>
      <Blurb />
      <Blurb children={<Slider />} />
      <ParticleEmitter />
    </>
  );
}
