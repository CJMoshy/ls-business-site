import GameCard from "@/components/ui/gameCard";
import { gamesList } from "@/lib/games/gameInfo";

export default function Games() {
  return (
    <>
      <GameCard game={gamesList[0]}></GameCard>
      <GameCard game={gamesList[1]}></GameCard>
      <GameCard game={gamesList[2]}></GameCard>
    </>
  );
}

/** unload all game before leaving page */
