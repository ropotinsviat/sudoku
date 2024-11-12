import "../../assets/css/picture.css";

export default function CirclePicture({ src }) {
  return (
    <div className="image-container">
      <img src={src} />
    </div>
  );
}
