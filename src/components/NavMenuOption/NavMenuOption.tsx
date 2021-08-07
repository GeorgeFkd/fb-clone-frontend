import React from "react";
import { IconContext } from "react-icons/lib";
import "./NavMenuOption.css";
import { DropdownConsumer } from "../Navbar/Navbar";
interface Props {
  //todo implement the open close stuff the old way and add dropdowns
  // any bcs icons are from different libs
  Icon: React.FC;
  tooltipText: string;
  Dropdown?: any;
  onClick: (e: any) => void;
}

const NavMenuOption: React.FC<Props> = ({
  Icon,
  tooltipText,
  Dropdown,
  onClick,
}) => {
  console.log("not rendered yet");
  return (
    <DropdownConsumer.Consumer>
      {(currentlyOpen) => (
        <div className="navmenu-option" onClick={onClick}>
          <IconContext.Provider value={{ className: "navmenu-option-icon" }}>
            <Icon />
            {console.log("the context currently is", currentlyOpen)}
          </IconContext.Provider>
          {/* tooltip */}
          <span className="navmenu-option-tooltip">{tooltipText}</span>

          {tooltipText === currentlyOpen ? <Dropdown /> : <></>}
        </div>
      )}
    </DropdownConsumer.Consumer>
  );
};

export default NavMenuOption;
