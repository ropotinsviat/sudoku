import styles from "./gamesAvailability.module.scss";

function GamesAvailability({ gamesCount }: { gamesCount: number }) {
  return (
    <div className={styles.gamesCount}>
      {gamesCount > 1 ? (
        <>
          Join any game from the list below. There are <b>{gamesCount}</b>{" "}
          available.
        </>
      ) : gamesCount === 1 ? (
        "There is one game just for you!"
      ) : (
        "There aren't any games yet 😔 But you can always create one!"
      )}
    </div>
  );
}

export default GamesAvailability;
