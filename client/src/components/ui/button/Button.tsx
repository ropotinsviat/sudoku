import React, { FC, ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "light" | "dark";
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ variant = "dark", children, ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      {...props}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
