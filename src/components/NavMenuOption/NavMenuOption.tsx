import React from "react";
import { IconContext } from "react-icons/lib";
import "./NavMenuOption.css";
import { DropdownContext } from "../Navbar/NavMenu/NavMenu";
interface Props {
  //todo implement the open close stuff the old way and add dropdowns
  // any bcs icons are from different libs
  Icon: React.FC;
  tooltipText: string;
  Dropdown?: any;
  onClick: (e: any) => void;
  data_testid: string;
}

const NavMenuOption: React.FC<Props> = ({
  Icon,
  tooltipText,
  Dropdown,
  onClick,
  data_testid,
}) => {
  console.log("not rendered yet");
  return (
    <DropdownContext.Consumer>
      {(currentlyOpen) => (
        <div
          className="navmenu-option"
          onClick={onClick}
          // data-testid={`${data_testid}`}
        >
          <IconContext.Provider value={{ className: "navmenu-option-icon" }}>
            <Icon />
            {console.log("the context currently is", currentlyOpen)}
          </IconContext.Provider>
          {/* tooltip */}
          <span className="navmenu-option-tooltip">{tooltipText}</span>

          {tooltipText === currentlyOpen ? <Dropdown /> : <></>}
        </div>
      )}
    </DropdownContext.Consumer>
  );
};

export default NavMenuOption;
