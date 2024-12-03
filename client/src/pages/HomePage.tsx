import React from "react";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main className="home-page">
        <div className="title">Welcome to Sudoku Share</div>
        <div className="aftertitle">
          Enjoy challenging your mind while playing with your friends
        </div>
        <div>
          <Link to="/create" className="my-btn">
            Create
          </Link>
          <Link to="/games" className="my-btn">
            Games
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
