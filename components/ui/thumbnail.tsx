import Image from "next/image";
import { GameInfo } from "./slider";

interface ThumbnailProps {
  game: GameInfo;
}

export default function Thumbnail({ game }: ThumbnailProps) {
  return (
    <div className="w-full h-full  bg-[#D9D9D9] self-center mx-auto rounded-md drop-shadow-[-5px_5px_0_rgba(255,0,0,0.25)]">
      {game.name}
    </div>
  );
}
