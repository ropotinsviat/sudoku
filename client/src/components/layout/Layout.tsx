import { ReactNode } from "react";
import Header from "../header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <ToastContainer />
    </>
  );
}

export default Layout;
