import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="max-sm:h-96 max-sm:mx-5 max-sm:my-10 bg-[#131313] rounded-xl drop-shadow-[-15px_20px_10px_rgba(0,0,0,0.75)] text-white flex flex-col">
      <h1 className="max-sm:text-2xl max-sm:w-full max-sm:text-center max-sm:mt-16">
        Beautiful, Modern Websites
      </h1>
      <h1 className="max-sm:text-2xl max-sm:w-full max-sm:text-center max-sm:mt-14">
        Game-ified!
      </h1>
      <Button variant="secondary" className="max-sm:mt-10 text-2xl">
        Get Started
      </Button>
      <div className="w-5/6 max-sm:h-2 max-sm:mt-10 bg-background self-center rounded-lg"></div>
    </div>
  );
}
