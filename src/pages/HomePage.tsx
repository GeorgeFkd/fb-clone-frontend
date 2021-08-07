import React from "react";
import LeftSideBar from "../components/LeftSidebar/LeftSidebar";
import MainFeed from "../components/MainFeed/MainFeed";
import RightSideBar from "../components/RightSidebar/RightSidebar";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="homepage__container">
      <div className="homepage__left">
        <LeftSideBar />
      </div>
      <div className="homepage__center">
        <MainFeed />
      </div>
      <div className="homepage__right">
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;
