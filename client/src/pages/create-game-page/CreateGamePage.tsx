import GameService from "../../api/gameService";
import { useNavigate } from "react-router-dom";
import { useAsync } from "../../hooks/useAsynk";
import CreateGame from "../../components/create-game/CreateGame";

export interface CreateGameParams {
  difficulty: string;
  visibility: string;
}

const CreateGamePage = () => {
  const navigate = useNavigate();

  const { execute, loading } = useAsync(
    async ({ difficulty, visibility }: CreateGameParams) => {
      const gameId = await GameService.create({ difficulty, visibility });
      navigate(`/${gameId}`);
    }
  );

  return (
    <main>
      <CreateGame createGame={execute} loading={loading} />
    </main>
  );
};

export default CreateGamePage;
