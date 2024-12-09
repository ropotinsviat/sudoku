import React, { FC } from "react";
import styles from "./option.module.scss";

interface OptionProps {
  option: { value: string; label: React.ReactNode };
  isSelected: boolean;
  onClick: (value: string) => void;
}

const Option: FC<OptionProps> = ({ option, isSelected, onClick }) => {
  return (
    <button
      className={`${styles.button} ${isSelected ? styles.selected : ""}`}
      onClick={() => onClick(option.value)}
    >
      {option.label}
    </button>
  );
};

export default Option;
