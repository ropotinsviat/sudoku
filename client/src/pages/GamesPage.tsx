import "../assets/css/home.css";
import { useNavigate } from "react-router-dom";
import GamesList from "../components/GamesList/GamesList";
import { useGamesList } from "../hooks/useGamesList";
import React from "react";

export default function GamesPage() {
  const navigate = useNavigate();
  const { games, fetchGames } = useGamesList();

  const joinGame = (gameId: number) => navigate(`/${gameId}`);

  return (
    <main className="games-page">
      <div>
        <div className="btns-bar">
          <button className="my-btn" onClick={fetchGames}>
            Refresh
          </button>
          <button className="my-btn" onClick={() => navigate("/create")}>
            New game
          </button>
        </div>

        <div className="games-count">
          {games.length > 1 ? (
            <>
              Join any game from the list below. There are <b>{games.length}</b>{" "}
              available
            </>
          ) : games.length === 1 ? (
            "There is one game just for you!"
          ) : (
            "There aren't any games yet 😔 But you can always create one!"
          )}
        </div>
      </div>
      <GamesList games={games} onClick={joinGame} />
    </main>
  );
}
