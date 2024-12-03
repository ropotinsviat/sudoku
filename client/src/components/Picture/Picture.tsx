import "../../assets/css/picture.css";

export default function CirclePicture({ src }: { src: string }) {
  return (
    <div className="image-container">
      <img src={src} />
    </div>
  );
}
