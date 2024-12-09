import styles from "./createGamePage.module.scss";
import { useState } from "react";
import GameService from "../../api/GameService";
import { useNavigate } from "react-router-dom";
import Selector from "../../components/ui/selector/Selector";
import { difficulties, visibilities } from "../../constants/createGameOptions";
import Button from "../../components/ui/button/Button";

export default function CreateGamePage() {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState("easy");
  const [visibility, setVisibility] = useState("public");

  async function createGame() {
    const gameId = await GameService.create({ difficulty, visibility });
    navigate(`/${gameId}`);
  }

  return (
    <main>
      <div className={styles.createGame}>
        <p>
          What level of <strong>difficulty</strong> do you want?
        </p>
        <Selector
          options={difficulties}
          onSelect={(dif: string) => setDifficulty(dif)}
          selectedOption={difficulty}
        />

        <p>
          What do you want this game's <strong>visibility</strong> to be?
        </p>
        <Selector
          options={visibilities}
          onSelect={(vis: string) => setVisibility(vis)}
          selectedOption={visibility}
        />
        <Button onClick={createGame}>Create</Button>
      </div>
    </main>
  );
}