import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import Header from "./components/Header/Header";
import "./assets/css/app.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateGamePage from "./pages/CreateGamePage";
import GamesPage from "./pages/GamesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateGamePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/:gameId" element={<GamePage />} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}
