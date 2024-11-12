import "../../assets/css/footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <nav>
        <div onClick={() => navigate("/")} className="cursor">
          Sudoku Share
        </div>
        <div>|</div>
        <div onClick={() => navigate("/privacy-policy")} className="cursor">
          Privacy policy
        </div>
      </nav>
      <div>{new Date().getFullYear()}, Designed by Ropotin Sviatoslav</div>
    </footer>
  );
}
