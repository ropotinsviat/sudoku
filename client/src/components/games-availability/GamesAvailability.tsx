import styles from "./gamesAvailability.module.scss";

interface GamesAvailabilityProps {
  gamesCount: number;
}

const GamesAvailability: React.FC<GamesAvailabilityProps> = ({
  gamesCount,
}) => {
  let message: string;

  if (gamesCount > 1) {
    message = `Join any game from the list below. There are ${gamesCount} available.`;
  } else if (gamesCount === 1) {
    message = "There is one game just for you!";
  } else {
    message = "There aren't any games yet 😔 But you can always create one!";
  }

  return <div className={styles.gamesCount}>{message}</div>;
};

export default GamesAvailability;
