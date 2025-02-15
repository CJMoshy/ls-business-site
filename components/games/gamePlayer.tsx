"use client";
import GameLoader from "@/lib/games/gameLoader";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
interface GamePlayerProps {
  name: string;
}
export default function GamePlayer({ name }: GamePlayerProps) {
  const loadGame = () => {
    GameLoader.instance.runOne(name);
  };
  const unload = () => {
    GameLoader.instance.endOne(name);
  };

  useEffect(() => {
    return () => GameLoader.instance.endOne(name);
  });

  return (
    <>
      <div id={name}></div>
      <Button onClick={loadGame}>Play it</Button>
      <Button onClick={unload}>End it</Button>
    </>
  );
}
