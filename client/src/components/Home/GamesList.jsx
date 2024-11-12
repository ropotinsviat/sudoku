import "../../assets/css/home.css";
import { useState } from "react";
import GameService from "../../API/GameService";
import { useNavigate } from "react-router-dom";

export default function GamesList() {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState("Easy");
  const [visibility, setVisibility] = useState("Public");

  const createGame = async () => {
    const gameId = await GameService.create({
      difficulty: difficulty.toLowerCase(),
      visibility: visibility.toLowerCase(),
    });
    navigate(`/${gameId}`);
  };

  return (
    <div>
      <p>
        How <strong>difficulty</strong> do you want to go?
      </p>
      <div className="options">
        {["Easy", "Medium", "Hard", "Extreme"].map((level) => (
          <button
            key={level}
            onClick={() => setDifficulty(level)}
            className={difficulty === level ? "selected" : ""}
          >
            {level}
          </button>
        ))}
      </div>

      <p>
        What do you want this game's <strong>visibility</strong> to be?
      </p>
      <div className="options">
        {["Public", "Private"].map((vis) => (
          <button
            key={vis}
            onClick={() => setVisibility(vis)}
            className={visibility === vis ? "selected" : ""}
          >
            {vis}
          </button>
        ))}
      </div>
      <button className="my-btn" onClick={createGame}>
        Create
      </button>
    </div>
  );
}
