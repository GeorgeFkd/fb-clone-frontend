import React from "react";
import { MdGroup } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { BsBookmarkFill } from "react-icons/bs";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { BiCalendarStar } from "react-icons/bi";
import "./LeftSidebar.css";
import { IconContext } from "react-icons/lib";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const LeftSideBar = () => {
  const iconsArr = [
    MdGroup,
    FiMonitor,
    BsBookmarkFill,
    IoPeopleCircleSharp,
    BiCalendarStar,
  ];
  const rowsText = ["Friends", "Watch", "Saved", "Groups", "Events"];
  const detailsText = ["Privacy", "Terms", "Advertising", "Ad choices"];
  //TODO HEIGHT STUFF AND THE MARGIN ON THE RIGHT
  return (
    <div className="leftsidebar__container">
      {iconsArr.map((Icon, index) => {
        return (
          <div className="row leftsidebar-row" key={index}>
            <IconContext.Provider value={{ className: "leftbar-icon" }}>
              <Icon />
            </IconContext.Provider>
            <p className="leftbar-title">{rowsText[index]}</p>
          </div>
        );
      })}
      {/* todo implement the see more / see less event handler */}
      <div className="row leftsidebar-row">
        <div className="more__less-button">
          <IconContext.Provider value={{ className: "more__less-icon" }}>
            {true ? <AiOutlineDown /> : <AiOutlineUp />}
          </IconContext.Provider>
        </div>
        <p className="leftbar-title">See {true ? "More" : "Less"}</p>
      </div>
      <hr style={{ backgroundColor: "gray", height: 1, border: "none" }} />
      <div className="leftbar-shortcuts">
        <div className="leftbar-shortcuts-title">
          <p>Your shortcuts</p>
          <span className="leftbar-shortcuts-edit row">Edit </span>
        </div>
        {iconsArr.map((Icon, index) => {
          return (
            <div className="row leftsidebar-row" key={index}>
              <IconContext.Provider value={{ className: "leftbar-icon" }}>
                <Icon />
              </IconContext.Provider>
              <p className="leftbar-title">{rowsText[index]}</p>
            </div>
          );
        })}
      </div>
      {/* for some reason with a tags it seems weird */}
      <div className="leftbar-details">
        {detailsText.map((detail) => (
          <p>&middot; {detail} &#160;</p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
