import React from "react";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Copyright from "./Copyright";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <MainContent />
      </main>

      <footer class="page-footer text-center font-small mt-4 wow fadeIn">
        <Copyright />
      </footer>
    </div>
  );
};

export default HomePage;
