import "../../assets/css/footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <Link to="/" className="cursor">
          Sudoku Share
        </Link>
        <div>|</div>
        <Link to="/privacy-policy" className="cursor">
          Privacy policy
        </Link>
      </nav>
      <div>{new Date().getFullYear()}, Designed by Ropotin Sviatoslav</div>
    </footer>
  );
};

export default Footer;
