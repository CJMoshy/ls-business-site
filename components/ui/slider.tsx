"use client";

import Thumbnail from "./thumbnail";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface GameInfo {
  name: string;
  img: string;
}

const gameNames: GameInfo[] = [
  {
    name: "Game 1",
    img: "img",
  },
  {
    name: "Game 2",
    img: "img",
  },
  {
    name: "Game 3",
    img: "img",
  },
];

export default function Slider() {
  return (
    <>
      <Carousel opts={{ loop: true }}>
        <CarouselNext />
        <CarouselContent>
          {gameNames.map((gn, index) => (
            <CarouselItem key={index}>
              <Thumbnail game={gn} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
    </>
  );
}
