import React from "react";
import "./Navbar.css";
import {
  FaSearch,
  FaFacebook,
  FaHome,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { MdTv, MdStoreMallDirectory } from "react-icons/md";
import NavMenuOption from "./NavMenuOption";
import { HiMenu } from "react-icons/hi";
import { CgScreen } from "react-icons/cg";
import { TiThSmall } from "react-icons/ti";
import { BsArrowLeft } from "react-icons/bs";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Navbar: React.FC = () => {
  // const [searchIsOpen, setSearchIsOpen] = useState(false);
  // const searchInputRef = useRef<HTMLInputElement>(null);
  // let fbIcon: Element, arrowLeftIcon: Element, searchIcon: Element;

  // useEffect(function () {
  //   fbIcon = document.getElementsByClassName("facebook-icon")[0];
  //   arrowLeftIcon = document.getElementsByClassName("arrowleft-icon")[0];
  //   searchIcon = document.getElementsByClassName("search-icon")[0];
  //   searchIcon.setAttribute("opacity", "1");
  //   searchIcon.setAttribute("transition", "opacity 200ms ease-in-out 0ms");
  // }, []);
  // window.addEventListener("click", function () {
  //   if (searchIsOpen) {
  //     fbIcon.setAttribute("display", "block");
  //     arrowLeftIcon.setAttribute("display", "none");
  //     searchIcon.setAttribute("opacity", "1");
  //     setSearchIsOpen(false);
  //     return;
  //   }
  // });
  // function handleSearchClick(e: React.MouseEvent) {
  //   e.stopPropagation();
  //   searchInputRef?.current?.focus();
  //   arrowLeftIcon.setAttribute("display", "block");
  //   fbIcon.setAttribute("display", "none");
  //   searchIcon.setAttribute("opacity", "0");
  //   setSearchIsOpen(true);
  // }
  const btns = document.getElementsByClassName("navbar-navicon__container");
  let mybtn = btns.item(0);

  //? when refreshing it doesnt get blue only when reloading
  mybtn?.setAttribute("enabled", "true");
  //! THIS IS FKIN ILLEGAL GONNA DO IT SOME OTHER WAY
  function setEnabledNavIcon(e: any) {
    const btns = document.getElementsByClassName("navbar-navicon__container");
    console.log("the buttons", btns, e.target.tagName);
    let elem = e.target;
    //it is bcs it is different if i click the icon and if i click the div
    if (e.target.tagName !== "DIV") {
      console.log(elem);
      while (!elem.classList?.contains("navbar-navicon__container")) {
        console.log("the element ", elem, "\n");
        elem = elem.parentElement;
      }
    }
    elem.setAttribute("enabled", "true");
    Array.from(btns)
      .filter((btn) => btn !== elem)
      .map((btn) => btn.removeAttribute("enabled"));
  }

  return (
    <div className="navbar__container">
      <div className="navbar__left">
        <BsArrowLeft className="arrowleft-icon" />

        <FaFacebook className="facebook-icon" />

        {/* add on click to focus on the input onClick={handleSearchClick} */}
        <div className="navbar__searchbox">
          <IconContext.Provider value={{ className: "search-icon" }}>
            <FaSearch />
          </IconContext.Provider>

          <input
            placeholder="Search Facebook"
            className="search-input"
            // ref={searchInputRef}
          />
        </div>
      </div>
      {/* extract to component */}
      <div className="navbar__center" onClick={(e) => setEnabledNavIcon(e)}>
        <NavLink tooltip="Home" Icon={FaHome} />
        <NavLink tooltip="Watch" Icon={CgScreen} />
        <NavLink tooltip="MarketPlace" Icon={MdStoreMallDirectory} />
      </div>

      <div className="navbar__right">
        {/* user avatar there is a problem with the height*/}
        <div className="user-avatar">
          <img src="https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero" />
          <p>George Fakidis</p>
        </div>
        <div className="navmenu">
          {/* text stuff here */}
          <NavMenuOption tooltipText="Menu" Icon={TiThSmall} />
          <NavMenuOption tooltipText="Messenger" Icon={FaFacebookMessenger} />
          <NavMenuOption tooltipText="Notifications" Icon={FaBell} />
          <NavMenuOption tooltipText="Account" Icon={FaCaretDown} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
interface Props {
  tooltip: string;
  Icon: React.FC;
}

const NavLink: React.FC<Props> = ({ tooltip, Icon }) => {
  return (
    <div className="navbar-navicon__container">
      <IconContext.Provider value={{ className: "navbar-navicon" }}>
        <Icon />
      </IconContext.Provider>
      <span className="navbar-navicon-tooltip">{tooltip}</span>
    </div>
  );
};
