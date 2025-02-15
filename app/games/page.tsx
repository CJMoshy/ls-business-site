import GameCard from "@/components/ui/gameCard";
import { gamesList } from "@/lib/games/gameInfo";


export default function Games() {
  
  return (
    <>
      <GameCard game={gamesList[0]}></GameCard>;
    </>
  );
}


/** unload all game before leaving page */
