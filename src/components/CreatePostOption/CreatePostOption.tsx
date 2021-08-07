import React from "react";
import { IconContext } from "react-icons/lib";
import "./CreatePostOption.css";
interface Props {
  Icon: React.FC;
  iconColor: string;
  iconText: string;
}

const CreatePostOption: React.FC<Props> = ({ Icon, iconColor, iconText }) => {
  return (
    <div className="createpost-option">
      <IconContext.Provider
        value={{ className: "createpost-option-icon", color: iconColor }}
      >
        <Icon />
      </IconContext.Provider>
      <p className="createpost-option-description">{iconText}</p>
    </div>
  );
};

export default CreatePostOption;
