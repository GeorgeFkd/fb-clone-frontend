import React from "react";
import { FaBell, FaCaretDown, FaFacebookMessenger } from "react-icons/fa";
import { TiThSmall } from "react-icons/ti";
import MessengerDropdown from "../../Dropdowns/MessengerDropdown/Messenger";
import NotificationsDropdown from "../../Dropdowns/NotificationsDropdown/NotificationsDropdown";
import OptionsDropdown from "../../Dropdowns/OptionsDropdown/OptionsDropdown";
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
        {/* <NavMenuOption
          tooltipText="Menu"
          Icon={TiThSmall}
          onClick={(e) => clickDropdownOpen("Menu")}
          Dropdown={NotificationsDropdown}
          data_testid="Menu"
          onClickOutside={() => setOpenDropdown("")}
        /> */}
        <NavMenuOption
          tooltipText="Messenger"
          Icon={FaFacebookMessenger}
          onClick={(e) => clickDropdownOpen("Messenger")}
          Dropdown={MessengerDropdown}
          data_testid="Messenger"
          onClickOutside={() => setOpenDropdown("")}
        />
        <NavMenuOption
          tooltipText="Notifications"
          Icon={FaBell}
          onClick={(e) => clickDropdownOpen("Notifications")}
          Dropdown={NotificationsDropdown}
          data_testid=""
          data-testid="Notifications"
          onClickOutside={() => setOpenDropdown("")}
        />
        <NavMenuOption
          tooltipText="Account"
          Icon={FaCaretDown}
          onClick={(e) => clickDropdownOpen("Account")}
          Dropdown={OptionsDropdown}
          data_testid="Account"
          onClickOutside={() => setOpenDropdown("")}
        />
      </div>
    </openDropdownContext.Provider>
  );
};
export const DropdownContext = openDropdownContext;
export default NavMenu;
