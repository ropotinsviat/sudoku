import styles from "./numberPad.module.scss";

interface NumberPadProps {
  onClick: (n: number) => void;
}

const NumberPad: React.FC<NumberPadProps> = ({ onClick }) => {
  return (
    <div className={styles.nums}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <div key={n} onClick={() => onClick(n)}>
          {n}
        </div>
      ))}
    </div>
  );
};

export default NumberPad;
