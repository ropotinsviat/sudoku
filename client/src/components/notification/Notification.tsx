import { toast } from "react-toastify";
import styles from "./notification.module.scss";
import { toastConfig } from "../../constants/toastConfig";

export const displayMessage = ({
  userName,
  message,
}: {
  userName?: string;
  message: string;
}) => {
  const toastMessage = (
    <div className={styles.notification}>
      <div>{message}</div>
      {userName && <div>{`From: ${userName}`}</div>}
    </div>
  );

  toast(toastMessage, { ...toastConfig, position: "top-right" });
};

export const displayError = (error: string) => {
  toast.error(error, { ...toastConfig, position: "top-right" });
};
