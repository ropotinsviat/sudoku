import { useState, useEffect, FC } from "react";
import Loading from "../common/loading/Loading";
import styles from "./fallback.module.scss";

const Fallback: FC = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return <></>;

  return (
    <div className={styles.loading}>
      <Loading />
    </div>
  );
};

export default Fallback;
