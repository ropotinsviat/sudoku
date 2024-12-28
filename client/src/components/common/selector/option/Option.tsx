import { FC } from "react";
import styles from "./option.module.scss";
import { capitalizeFirstChar } from "../../../../utils/capitalizeFirstChar";

interface OptionProps {
  option: string;
  isSelected: boolean;
  onClick: (value: string) => void;
}

const Option: FC<OptionProps> = ({ option, isSelected, onClick }) => {
  return (
    <button
      className={`${styles.button} ${isSelected ? styles.selected : ""}`}
      onClick={() => onClick(option)}
    >
      {capitalizeFirstChar(option)}
    </button>
  );
};

export default Option;
