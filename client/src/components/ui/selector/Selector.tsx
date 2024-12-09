import React, { FC } from "react";
import Option from "./option/Option";
import styles from "./selector.module.scss";

interface Option {
  value: string;
  label: React.ReactNode;
}

interface SelectorProps {
  options: Option[];
  onSelect: (selectedOption: string) => void;
  selectedOption?: string;
}

const Selector: FC<SelectorProps> = ({ options, onSelect, selectedOption }) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <Option
          key={option.value}
          option={option}
          isSelected={selectedOption === option.value}
          onClick={onSelect}
        />
      ))}
    </div>
  );
};

export default Selector;
