import { useNavigate } from "react-router-dom";
import GamesList from "../../components/game-list/GameList";
import { useGamesList } from "../../hooks/useGamesList";
import Button from "../../components/ui/button/Button";
import GamesAvailability from "../../components/games-availability/GamesAvailability";
import styles from "./gamesPage.module.scss";

export default function GamesPage() {
  const navigate = useNavigate();
  const { games, fetchGames } = useGamesList();

  return (
    <main className={styles.gamesPage}>
      <div>
        <div className={styles.btnsBar}>
          <Button onClick={fetchGames}>Refresh</Button>
          <Button onClick={() => navigate("/create")}>New game</Button>
        </div>

        <GamesAvailability gamesCount={games.length} />
      </div>
      <GamesList games={games} />
    </main>
  );
}