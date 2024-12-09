import styles from "./header.module.scss";
import CirclePicture from "../ui/picture/Picture";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/selectors/authSelectors";

export default function Header() {
  const user = useSelector(selectAuthUser);

  return (
    <header className={styles.header}>
      <Link id="logo" to="/" className={styles.logo}>
        Sudoku Share
      </Link>

      {user && (
        <div className={styles.profile}>
          <div>
            <CirclePicture src={user.picture} />
          </div>
          <div>{user.name} </div>
        </div>
      )}
    </header>
  );
}
