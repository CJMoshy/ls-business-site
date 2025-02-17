"use client";

import GameLoader from "@/lib/games/gameLoader";
import { useEffect, useState } from "react";
interface GamePlayerProps {
  name: string;
}
export default function GamePlayer({ name }: GamePlayerProps) {
  const [active, setActive] = useState(false);

  const loadGame = () => {
    setActive(!active);
    GameLoader.instance.endAny();
    GameLoader.instance.runOne(name);
  };

  // might not be needed but safe for now
  useEffect(() => {
    document.addEventListener("unload-game", ((e: CustomEvent<string>) => {
      if (e.detail === name) {
        setActive(false);
      }
    }) as EventListener);

    return () => {
      document.removeEventListener("unload-game", ((e: CustomEvent<string>) => {
        if (e.detail === name) {
          setActive(false);
        }
      }) as EventListener);

      GameLoader.instance.endOne(name);
    };
  });

  return (
    <div
      onClick={loadGame}
      id={name}
      className="w-[300px] h-[450px] bg-secondary text-primary"
    >
      {active ? "" : "THUMBNAIL IMAGE"}
    </div>
  );
}
