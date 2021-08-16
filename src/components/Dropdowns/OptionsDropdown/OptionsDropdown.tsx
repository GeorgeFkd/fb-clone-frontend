import { MdFeedback } from "react-icons/md";
import { FiHelpCircle, FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Option from "./Option";
import Avatar from "../../utils/Avatar";
import "./OptionsDropdown.css";
import { useRef } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
interface Props {
  onClickOutside: () => void;
}

const OptionsDropdown: React.FC<Props> = ({ onClickOutside }) => {
  const dropdownref = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownref, onClickOutside);
  // const dropdownref = useClickOutside(onClickOutside);
  return (
    <div className="options-dropdown" ref={dropdownref}>
      <div className="options-dropdown-title">
        <Avatar src={""} size={3} />
        <div className="options-dropdown-title-content">
          <p className="options-dropdown-title-content-username">
            Geon Fkd
            {/* {session.user.name} */}
          </p>
          <p
            className="options-dropdown-title-content-prompt"
            onClick={(e) => console.log("hello from dropdown")}
          >
            See your profile
          </p>
        </div>
        {/* find a way to get it to the end of the flex container */}
      </div>
      <hr />
      <div className="options-dropdown-feedback">
        <MdFeedback className="options-dropdown-feedback-icon" />
        <div className="options-dropdown-feedback-prompt">
          <p>Give FeedBack</p>
          <p>Help us improve the new facebook</p>
        </div>

        {/* find a way to get it to the end of the flex container */}
      </div>
      <hr />
      <Option Icon={IoSettingsOutline} prompt="Setting and Privacy" />
      <Option Icon={FiHelpCircle} prompt="Help and Support" />

      <Option Icon={FiLogOut} prompt="Log Out" />
    </div>
  );
};

export default OptionsDropdown;
