import React from "react";
import "./Navbar.css";
import { FaSearch, FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchDropdown from "../Dropdowns/Search/SearchDropdown";
import { requestAvailableGroups } from "../utils/api/requestAvailableGroups";
import NavMenu from "./NavMenu/NavMenu";
import { useRef } from "react";
import { NavLinksContainer } from "./NavLinksContainer/NavLinksContainer";

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
    async function fetchFromApiAndUpd