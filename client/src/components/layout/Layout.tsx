import { ReactNode } from "react";
import Header from "../header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Header />
    {children}
    <ToastContainer />
  </>
);

export default Layout;
