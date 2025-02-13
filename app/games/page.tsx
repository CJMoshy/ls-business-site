import GameCard from "@/components/ui/gameCard";
import { gamesList } from "@/lib/games/gameInfo";

export default function Games() {
  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.87.0/phaser.min.js"></script>
      <GameCard game={gamesList[0]}></GameCard>;
    </>
  );
}
