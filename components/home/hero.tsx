import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <img src="/brooke.jpg" alt="Image by Jon Moore on Unsplash" />
      <div className=" absolute top-32 text-5xl text-left text-secondary ml-5">
        Lagunitas Studios
      </div>
      <div className="absolute top-72 ml-5 text-left text-3xl text-secondary">
        Gameified Web Experiences <br /> For Your Business
      </div>
      <Button variant="secondary" className="absolute top-96 left-6 text-2xl max-w-52">
        Get Started
      </Button>
    </>
  );
}

// brooke image
//Photo by <a href="https://unsplash.com/@purejulia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">pure julia</a> on <a href="https://unsplash.com/photos/brown-and-gray-rock-on-water-B8y6uvTnEvU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
