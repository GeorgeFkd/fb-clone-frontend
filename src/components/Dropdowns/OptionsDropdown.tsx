import FeedbackIcon from "@material-ui/icons/Feedback";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";

import { FiHelpCircle, FiMoon, FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Option from "./Option";
import Avatar from "../utils/Avatar";
import { MdFeedback } from "react-icons/md";
import "./OptionsDropdown.css";
interface Props {}

const OptionsDropdown: React.FC<Props> = ({}) => {
  return (
    <div className="options-dropdown">
      <div className="options-dropdown-title">
        <Avatar src={""} size={3} />
        <div className="options-dropdown-title-content">
          <p className="options-dropdown-title-content-username">
            Geon Fkd
            {/* {session.user.name} */}
          </p>
          <p className="options-dropdown-title-content-prompt">
            See your profile
          </p>
        </div>
        {/* find a way to get it to the end of the flex container */}
      </div>
      <hr />
      <div className="options-dropdown-feedback">
        <FeedbackIcon className="options-dropdown-feedback-icon" />
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
