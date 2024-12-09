import { toast } from "react-toastify";
import styles from "./notification.module.scss";

export function displayMessage({
  userName,
  message,
}: {
  userName?: string;
  message: string;
}) {
  const toastMessage = (
    <div className={styles.notification}>
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

export function displayError(error: string) {
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
