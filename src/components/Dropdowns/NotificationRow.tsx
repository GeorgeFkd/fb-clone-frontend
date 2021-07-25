import { Avatar, SvgIconTypeMap } from "@material-ui/core";
import { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";


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
      className="relative flex space-x-4 rounded-lg bg-transparent hover:bg-gray-500 items-center cursor-pointer"
      onMouseEnter={() => setshowOptions(!showOptions)}
      onMouseLeave={() => setshowOptions(!showOptions)}
    >
      <div className="relative">
        <Avatar
          src={from_imgSrc}
          style={{ width: "3.5rem", height: "3.5rem" }}
        />
        <div
          className="h-8 w-8 rounded-full p-1"
          style={{
            position: "absolute",
            top: "1.8rem",
            right: "-0.5rem",
            backgroundColor: reactionColor,
          }}
        >
          <ReactionIcon />
        </div>
      </div>
      <div className="flex flex-col text-gray-400 py-2">
        <p>
          <span className="font-semibold">{from_name} </span>
          {content}
          <span className="font-semibold"> {group}</span>
        </p>
      </div>
      {/* find a way to get it to the end of the flex container */}
      <div
        className="flex space-x-2 items-center absolute right-2"
        style={{
          marginLeft: "auto",
          position: "absolute",
          right: "0rem",
        }}
      >
        {/* this should be illegal */}
        {showOptions && (
          <MoreHorizIcon
            fontSize="large"
            className="relative rounded-full hover:bg-gray-800 bg-gray-600  p-1 cursor-pointer"
            style={{
              color: "yellow",
              marginLeft: "auto",
              marginRight: `${!isNotRead ? "1.5rem" : "0"}`,
            }}
          />
        )}
        {/* instead of the dot there could be other icons */}
        {isNotRead && (
          <FiberManualRecordIcon
            color="primary"
            style={{ marginLeft: "auto" }}
          />
        )}
      </div>
    </div>
  );
};

export default NotificationRow;
