import React from "react";
import "./Story.css";
import Avatar from "./utils/Avatar";
interface Props {
  avatarImg: string;
  contentImg: string;
  authorName: string;
  authorId: string;
}
const Story: React.FC<Props> = ({
  avatarImg,
  contentImg,
  authorName,
  authorId,
}) => {
  return (
    <div className="story-container">
      <img src={contentImg} className="story-content" />
      <Avatar src={avatarImg} size={2} className="avatar" />

      <p className="author-name">{authorName}</p>
    </div>
  );
};

export default Story;
