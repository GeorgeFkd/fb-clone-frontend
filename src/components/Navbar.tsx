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
import { Link } from "react-router-dom";

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

  let index = -1;
  console.log(window.location.pathname);
  switch (window.location.pathname) {
    case "/Marketplace":
      index = 2;
      break;
    case "/Watch":
      index = 1;
      break;
    case "/":
      index = 0;
      break;
    default:
      break;
  }
  const btns = document.getElementsByClassName("navbar-navicon__container");
  let mybtn = btns.item(index);

  mybtn?.classList.add("navbar-navicon__container--active");
  const NavIcons = document.getElementsByClassName("navbar-navicon");
  const myIcon = NavIcons[index];
  myIcon?.classList.add("navbar-navicon--active");
  function setEnabledNavIcon(e: { target: any }) {
    /* How it works:
    There is an array of svgs and an array of divs to enable them on click and disable all the others
    enable the one clicked => disable the others
    */
    const navLinkDivs = Array.from(
      document.getElementsByClassName("navbar-navicon__container")
    );

    const navLinkSvgs = Array.from(
      document.getElementsByClassName("navbar-navicon")
    );
    let elem = e.target as any;

    //have to find out if i clicked on the svg the path or the div thats why i need this
    if (
      !e.target.classList.contains("navbar-navicon") &&
      !e.target.classList.contains("navbar-navicon__container")
    ) {
      elem = elem.parentNode;
    }

    //is it an svg or a div?
    if (navLinkDivs.indexOf(elem) === -1) {
      index = Array.from(navLinkSvgs).indexOf(elem);
    } else if (navLinkSvgs.indexOf(elem) === -1) {
      //will be found in divs if not found in svgs
      index = navLinkDivs.indexOf(elem);
    }
    console.log("the index", index);
    //todo extract to function
    //enable the one clicked => disable the others
    navLinkDivs[index].classList.add("navbar-navicon__container--active");
    navLinkSvgs[index].classList.add("navbar-navicon--active");
    navLinkDivs
      .filter((div, idx) => idx !== index)
      .map((div) => div.classList.remove("navbar-navicon__container--active"));
    navLinkSvgs
      .filter((svg, idx) => idx !== index)
      .map((svg) => svg.classList.remove("navbar-navicon--active"));
  }

  return (
    <div className="navbar__container">
      <div className="navbar__left">
        {/* <BsArrowLeft className="arrowleft-icon" /> */}

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
    <Link to={`/${tooltip}`} className="link">
      <div className="navbar-navicon__container">
        <IconContext.Provider value={{ className: "navbar-navicon" }}>
          <Icon />
        </IconContext.Provider>
        <span className="navbar-navicon-tooltip">{tooltip}</span>
      </div>
    </Link>
  );
};
