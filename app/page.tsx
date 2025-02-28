import Hero from "@/components/home/hero";
import { Button } from "@/components/ui/button";
import { SidebarDivider } from "@/components/ui/sidebar-divider";
export default function Home() {
  return (
    <>
      <Hero />
      <SidebarDivider />
      <div className="h-full text-2xl text-secondary text-center mt-2 flex flex-col">
        <p className="ml-5"> What is Gamification?</p>
        <p className="ml-5 mt-2">
          Simply put, Gamification enhances systems and services through lense
          of game design!
        </p>
        <Button variant="default" className="max-w-52 self-center mt-5">
          Check out a Concept Website
        </Button>
      </div>
      <SidebarDivider />
    </>
  );
}

// <a href="https://unsplash.com/@thejmoore?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
// Jon Moore
// </a>{" "}
// on{" "}
// <a href="https://unsplash.com/photos/low-angle-photography-of-green-leafed-tree-_2MyZDsUSM4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
// Unsplash
// </a>
// Photo by <a href="https://unsplash.com/@purejulia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">pure julia</a> on <a href="https://unsplash.com/photos/brown-and-gray-rock-on-water-B8y6uvTnEvU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
