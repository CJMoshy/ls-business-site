"use client";

import Thumbnail from "./thumbnail";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { gamesList } from "@/lib/games/gameInfo";

export default function Slider() {
  return (
    <>
      <Carousel opts={{ loop: true }}>
        <CarouselNext />
        <CarouselContent>
          {gamesList.map((gn, index) => (
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
