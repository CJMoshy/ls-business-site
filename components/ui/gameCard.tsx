import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import { GameInfo } from "@/lib/games/gameInfo";
import GamePlayer from "@/components/games/gamePlayer";

interface GameProps {
  game: GameInfo;
}
export default function GameCard({ game }: GameProps) {
  return (
    <Card>
      <CardHeader />
      <CardTitle>{game.name}</CardTitle>
      <CardContent>
        <GamePlayer name={game.name} />
      </CardContent>
      <CardDescription>{game.desc}</CardDescription>
      <CardFooter />
    </Card>
  );
}
