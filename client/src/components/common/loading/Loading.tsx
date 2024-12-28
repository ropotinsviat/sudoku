import { FC } from "react";
import styles from "./loading.module.scss";

const Loading: FC = () => {
  return <div className={styles.loader}></div>;
};

export default Loading;
