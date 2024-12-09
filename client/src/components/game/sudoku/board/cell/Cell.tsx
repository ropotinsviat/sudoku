import Notes from "./notes/Notes";
import styles from "./cell.module.scss";
import { memo } from "react";
import { ICell } from "../../../../../types/Cell";

function Cell({
  val,
  onClick,
  calculatedClasses,
}: {
  val: ICell;
  calculatedClasses: string[];
  onClick: any;
}) {
  const classes = calculatedClasses
    .map((className) => styles[className] || className)
    .join(" ");

  return (
    <div className={`${styles.cell} ${classes}`} onClick={onClick}>
      <div>{Array.isArray(val) ? <Notes notes={val} /> : val.value || ""}</div>
    </div>
  );
}

export default memo(Cell);
