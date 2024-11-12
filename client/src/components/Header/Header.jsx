import "../../assets/css/header.css";
import { useAuth } from "../../context/AuthContext";
import CirclePicture from "../Picture/Picture";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const { user } = useAuth();
  return (
    <header>
      <div id="logo" onClick={() => navigate("/")}>
        Sudoku Share
      </div>
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
