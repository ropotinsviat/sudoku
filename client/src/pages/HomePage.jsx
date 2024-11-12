import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <main className="home-page">
        <div className="title">Welcome to Sudoku Share</div>
        <div className="aftertitle">
          Enjoy challenging your mind while playing with your friends
        </div>
        <div>
          <button onClick={() => navigate("/create")} className="my-btn">
            Create
          </button>
          <button onClick={() => navigate("/games")} className="my-btn">
            Games
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
