import { FC } from "react";
import styles from "./picture.module.scss";

interface CirclePictureProps {
  src: string;
}

const CirclePicture: FC<CirclePictureProps> = ({ src }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt="Circle" />
    </div>
  );
};

export default CirclePicture;
