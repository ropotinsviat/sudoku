import { toast } from "react-toastify";
import "../assets/css/chat.css";

interface DisplayMessageProps {
  userName?: string;
  message: string;
}

export default function displayMessage({
  userName,
  message,
}: DisplayMessageProps): void {
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

export function displayError(error: string): void {
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
