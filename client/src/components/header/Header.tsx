import styles from "./header.module.scss";
import CirclePicture from "../common/picture/Picture";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthUser } from "../../redux/selectors/authSelectors";
import { logout } from "../../redux/actions/authActions";
import { AppDispatch } from "../../redux/store";

const Header: React.FC = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => dispatch(logout());

  return (
    <header className={styles.header}>
      <Link id="logo" to="/" className={styles.logo}>
        Sudoku Share
      </Link>

      {user && (
        <div className={styles.profile}>
          <div onClick={handleLogout}>
            <CirclePicture src={user.picture} />
          </div>
          <div>{user.name}</div>
        </div>
      )}
    </header>
  );
};

export default Header;
