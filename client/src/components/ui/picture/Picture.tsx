import styles from "./picture.module.scss";

export default function CirclePicture({ src }: { src: string }) {
  return (
    <div className={styles.imageContainer}>
      <img src={src} />
    </div>
  );
}
