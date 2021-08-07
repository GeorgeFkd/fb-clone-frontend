import React from "react";
import "./PostHeader.css";
import Avatar from "../utils/Avatar";
import { BiRightArrow, BiDotsHorizontalRounded } from "react-icons/bi";
interface Props {
  authorName: string;
  authorAvatar: string;
  createdAt: string;
  group_name: string;
}
const PostHeader: React.FC<Props> = ({
  authorAvatar,
  authorName,
  createdAt,
  group_name,
}) => {
  return (
    <div className="postheader-container">
      <Avatar src={authorAvatar} size={2.5} className="postheader-avatar" />
      <div className="postheader-details">
        <div className="postheader-info">
          {/* those p tags are the same component with different "tooltips" */}
          <span className="postheader-author">{authorName}</span>
          <BiRightArrow />
          <span className="postheader-group">{group_name}</span>
        </div>
        <span className="postheader-date">8m</span>
      </div>
      <div className="postheader-moreoptions">
        <BiDotsHorizontalRounded className="moreoptions-icon" />
      </div>
    </div>
  );
};

export default PostHeader;
