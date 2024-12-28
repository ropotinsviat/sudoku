import styles from "./createGame.module.scss";
import { FC, useState } from "react";
import Selector from "../../components/common/selector/Selector";
import { difficulties, visibilities } from "../../constants/createGameOptions";
import Button from "../../components/common/button/Button";
import { CreateGameParams } from "../../pages/create-game-page/CreateGamePage";

interface CreateGameProps {
  loading: boolean;
  createGame: ({ difficulty, visibility }: CreateGameParams) => void;
}

const CreateGame: FC<CreateGameProps> = ({
  loading,
  createGame,
}: CreateGameProps) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [visibility, setVisibility] = useState("public");

  const handleCreateGame = () => {
    createGame({ difficulty, visibility });
  };

  return (
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

      <Button onClick={handleCreateGame} loading={loading}>
        Create
      </Button>
    </div>
  );
};

export default CreateGame;
