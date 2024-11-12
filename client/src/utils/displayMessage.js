import { toast } from "react-toastify";
import "../assets/css/chat.css";

export default function displayMessage({ userName, message }) {
  const toastMessage = (
    <div className="notification">
      <div>{message}</div>
      {userName && <div>{`From: ${userName}`}</div>}
    </div>
  );

  toast(toastMessage, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export function displayError(error) {
  toast.error(error, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
