import React from "react";
import "./Navbar.css";
import { FaSearch, FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchDropdown from "../Dropdowns/SearchDropdown";
import { requestAvailableGroups } from "../utils/db.requests";
import NavMenu from "./NavMenu/NavMenu";
import { useRef } from "react";
import { useReducer } from "react";
import { NavLinksContainer } from "./NavLinksContainer/NavLinksContainer";

// enum  NavbarActionKind{
//   FOCUS_ON_INPUT="FOCUS ON INPUT",
//   SET_

// }

// interface NavbarState{
//   searchTerm:string;
//   groupsToSearch:any[];
//   inputIsFocused:boolean;
// }

// interface NavbarAction{
//   type:
// }

export const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [groupsToSearch, setGroupsToSearch] = useState<any[]>([]);
  const [searchInputIsFocused, setSearchInputIsFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log("applied event listeners");

    async function fetchFromApiAndUpdateState() {
      let groups = await requestAvailableGroups();
      setGroupsToSearch(groups);
    }
    fetchFromApiAndUpdateState();
  }, []);

  useEffect(() => {
    async function fetchFromApiAndUpdateState() {
      let groups = await requestAvailableGroups();
      console.log(groups, "db groups");
      setGroupsToSearch(
        groups.filter((group: { group_id: number; name: string }) =>
          group.name.includes(searchTerm)
        )
      );
      console.log(groupsToSearch);
    }
    fetchFromApiAndUpdateState();

    console.log(groupsToSearch, "groups");
  }, [searchTerm]);

  return (
    <div className="navbar__container">
      <div className="navbar__left">
        {/* <BsArrowLeft className="arrowleft-icon" /> */}

        <FaFacebook className="facebook-icon" />

        {/* add on click to focus on the input onClick={handleSearchClick} */}
        <div
          className="navbar__searchbox"
          onClick={(e) => {
            searchInputRef.current?.focus();
            setSearchInputIsFocused(true);
          }}
        >
          <IconContext.Provider value={{ className: "search-icon" }}>
            <FaSearch />
          </IconContext.Provider>

          <input
            placeholder="Search Facebook"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={(e) => setSearchInputIsFocused(true)}
            onBlur={(e) => setSearchInputIsFocused(false)}
            ref={searchInputRef}
          />
          {searchTerm && searchInputIsFocused && (
            <SearchDropdown groups={groupsToSearch} />
          )}
        </div>
      </div>
      <NavLinksContainer />

      <div className="navbar__right">
        {/* user avatar there is a problem with the height*/}
        <div className="user-avatar">
          <img src="https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero" />
          <p>George Fakidis</p>
        </div>
        <NavMenu />
      </div>
    </div>
  );
};

interface Props {
  tooltip: string;
  Icon: React.FC;
}

export const NavLink: React.FC<Props> = ({ tooltip, Icon }) => {
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
