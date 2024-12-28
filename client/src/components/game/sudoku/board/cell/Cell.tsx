import { FC, memo } from "react";
import Notes from "./notes/Notes";
import styles from "./cell.module.scss";
import { ICell } from "../../../../../types/Cell";

interface CellProps {
  val: ICell;
  calculatedClasses: string[];
  onClick: () => void;
}

const Cell: FC<CellProps> = ({ val, onClick, calculatedClasses }) => {
  const classes = calculatedClasses
    .map((className) => styles[className] || className)
    .join(" ");

  return (
    <div className={`${styles.cell} ${classes}`} onClick={onClick}>
      <div>{Array.isArray(val) ? <Notes notes={val} /> : val.value || ""}</div>
    </div>
  );
};

export default memo(Cell);
