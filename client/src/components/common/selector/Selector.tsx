import React, { FC } from "react";
import Option from "./option/Option";
import styles from "./selector.module.scss";

interface SelectorProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  selectedOption?: string;
}

const Selector: FC<SelectorProps> = ({ options, onSelect, selectedOption }) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <Option
          key={option}
          option={option}
          isSelected={selectedOption === option}
          onClick={onSelect}
        />
      ))}
    </div>
  );
};

export default Selector;
