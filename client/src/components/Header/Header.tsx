import "../../assets/css/header.css";
import { useAuth } from "../../context/AuthContext";
import CirclePicture from "../Picture/Picture";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useAuth();
  return (
    <header>
      <Link id="logo" to="/">
        Sudoku Share
      </Link>

      {user && (
        <div className="profile">
          <div>
            <CirclePicture src={user.picture} />
          </div>
          <div>{user.name} </div>
        </div>
      )}
    </header>
  );
}
