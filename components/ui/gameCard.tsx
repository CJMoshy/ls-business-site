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
    <Card className="max-sm:mx-5 max-sm:mb-16 drop-shadow-[-15px_20px_4px_rgba(0,0,0,0.25)]">
      <CardHeader>
        <CardTitle>{game.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <GamePlayer name={game.name} />
      </CardContent>
      <CardDescription>{game.desc}</CardDescription>
      <CardFooter />
    </Card>
  );
}
