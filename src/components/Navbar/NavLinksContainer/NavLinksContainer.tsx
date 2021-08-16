import React from "react";
import { FaHome } from "react-icons/fa";
import { MdStoreMallDirectory } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { NavLink } from "../Navbar";

export const NavLinksContainer = () => {
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
    <div className="navbar__center" onClick={(e) => setEnabledNavIcon(e)}>
      <NavLink tooltip="Home" Icon={FaHome} />
      <NavLink tooltip="Watch" Icon={CgScreen} />
      <NavLink tooltip="MarketPlace" Icon={MdStoreMallDirectory} />
    </div>
  );
};
