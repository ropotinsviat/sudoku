import styles from "./notes.module.scss";

const positionMap: { [key: number]: string } = {
  1: styles["top-left"],
  2: styles["top-center"],
  3: styles["top-right"],
  4: styles["middle-left"],
  5: styles["middle-center"],
  6: styles["middle-right"],
  7: styles["bottom-left"],
  8: styles["bottom-center"],
  9: styles["bottom-right"],
};

export default function Notes({ notes }: { notes: number[] }) {
  return (
    <div className={styles.notes}>
      {notes.map((note) => (
        <span key={note} className={`${styles.note} ${positionMap[note]}`}>
          {note}
        </span>
      ))}
    </div>
  );
}
