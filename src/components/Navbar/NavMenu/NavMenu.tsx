import React from "react";
import { FaBell, FaCaretDown, FaFacebookMessenger } from "react-icons/fa";
import { TiThSmall } from "react-icons/ti";
import NotificationsDropdown from "../../Dropdowns/NotificationsDropdown";
import OptionsDropdown from "../../Dropdowns/OptionsDropdown";
import NavMenuOption from "../../NavMenuOption/NavMenuOption";
const openDropdownContext = React.createContext("");

const NavMenu = () => {
  const [openDropdown, setOpenDropdown] = React.useState("");
  function clickDropdownOpen(dropdownName: string) {
    if (dropdownName === openDropdown) {
      setOpenDropdown("");
    } else {
      setOpenDropdown(dropdownName);
    }
  }

  return (
    <openDropdownContext.Provider value={openDropdown}>
      <div className="navmenu" data-testid="navmenu">
        {/* text stuff here */}
        <NavMenuOption
          tooltipText="Menu"
          Icon={TiThSmall}
          onClick={(e) => clickDropdownOpen("Menu")}
          Dropdown={NotificationsDropdown}
          data_testid="Menu"
        />
        <NavMenuOption
          tooltipText="Messenger"
          Icon={FaFacebookMessenger}
          onClick={(e) => clickDropdownOpen("Messenger")}
          Dropdown={NotificationsDropdown}
          data_testid="Messenger"
        />
        <NavMenuOption
          tooltipText="Notifications"
          Icon={FaBell}
          onClick={(e) => clickDropdownOpen("Notifications")}
          Dropdown={NotificationsDropdown}
          data_testid=""
          data-testid="Notifications"
        />
        <NavMenuOption
          tooltipText="Account"
          Icon={FaCaretDown}
          onClick={(e) => clickDropdownOpen("Account")}
          Dropdown={OptionsDropdown}
          data_testid="Account"
        />
      </div>
    </openDropdownContext.Provider>
  );
};
export const DropdownContext = openDropdownContext;
export default NavMenu;
