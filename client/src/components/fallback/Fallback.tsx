import { useState, useEffect } from "react";
import Loading from "../ui/loading/Loading";
import Overlay from "../ui/overlay/Overlay";
import styles from "./fallback.module.scss";

function Fallback() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return <></>;

  return (
    <div className={styles.loading}>
      <Overlay />
      <Loading />
    </div>
  );
}

export default Fallback;
