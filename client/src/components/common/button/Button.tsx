import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "light" | "dark";
  children: ReactNode;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "dark",
  children,
  loading = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${props.className} ${styles.button} ${styles[variant]} ${
        loading ? styles.loading : ""
      }`}
      disabled={loading || props.disabled}
      type="button"
    >
      {loading && <span className={styles.spinner}></span>} {children}
    </button>
  );
};

export default Button;
