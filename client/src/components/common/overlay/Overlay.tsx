import { FC } from "react";
import styles from "./overlay.module.scss";

interface OverlayProps {
  onClick?: () => void;
}

const Overlay: FC<OverlayProps> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick} />;
};

export default Overlay;
