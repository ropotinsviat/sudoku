import styles from "./overlay.module.scss";

export default function Overlay({ onClick }: { onClick?: () => void }) {
  return <div className={styles.overlay} onClick={onClick} />;
}
