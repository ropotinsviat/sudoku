import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import styles from "./homePage.module.scss";
import Button from "../../components/ui/button/Button";

const HomePage = () => {
  return (
    <>
      <main className={styles.homePage}>
        <div className={styles.title}>Welcome to Sudoku Share</div>
        <div className={styles.aftertitle}>
          Enjoy challenging your mind while playing with your friends
        </div>
        <div>
          <Link to="/create">
            <Button variant="dark">Create</Button>
          </Link>

          <Link to="/games">
            <Button variant="light">Games</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
