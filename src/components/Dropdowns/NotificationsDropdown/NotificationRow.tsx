import { SvgIconTypeMap } from "@material-ui/core";
import { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./NotificationRow.css";

import Avatar from "../../utils/Avatar";
import { IconContext } from "react-icons/lib";

interface Props {
  from_imgSrc: string;
  isNotRead: boolean;
  from_name: string;
  content: string;
  group: string;
  ReactionIcon: React.FC;
  reactionColor: string;
}

const NotificationRow: React.FC<Props> = ({
  from_imgSrc,
  isNotRead,
  from_name,
  content,
  group,
  ReactionIcon,
  reactionColor,
}) => {
  const colorClass = isNotRead ? "#4596e7" : "#8098b0";
  const [showOptions, setshowOptions] = useState(false);
  return (
    <div
      className="notificationrow-container"
      onMouseEnter={() => setshowOptions(!showOptions)}
      onMouseLeave={() => setshowOptions(!showOptions)}
    >
      <div style={{ position: "relative" }}>
        <Avatar
          className="notificationrow-avatar"
          src={from_imgSrc}
          size={2.5}
        />
        <div
          className="notificationrow-notificationtype"
          style={{
            backgroundColor: reactionColor,
          }}
        >
          <IconContext.Provider
            value={{ className: "notificationrow-notificationtype-icon" }}
          >
            <ReactionIcon />
          </IconContext.Provider>
        </div>
      </div>
      <div className="notificationrow-content">
        <p>
          <span className="notificationrow-sourcename">{from_name} </span>
          {content}
          <span className="notificationrow-groupname"> {group}</span>
        </p>
      </div>
      {/* find a way to get it to the end of the flex container */}
      <div className="notificationrow-isreadornot">
        {/* this should be illegal */}
        {showOptions && (
          <MoreHorizIcon
            className="relative rounded-full hover:bg-gray-800 bg-gray-600  p-1 cursor-pointer notificationrow-isreadornot-icon"
            style={{
              marginRight: `${!isNotRead ? "1.5rem" : "0"}`,
            }}
          />
        )}
        {/* instead of the dot there could be other icons */}
        {isNotRead && (
          <FiberManualRecordIcon className="notificationrow-isreadornot-dot" />
        )}
      </div>
    </div>
  );
};

export default NotificationRow;
