import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import "./Comment.css";
import Avatar from "./utils/Avatar";
const Comment = () => {
  return (
    <div className="comment-container">
      <Avatar
        src={
          "https://i.pinimg.com/originals/a5/41/02/a541024b0989ea9b0bd470fcfc89dcb1.jpg"
        }
        size={2}
      />
      <div className="comment-box-wrap">
        <div className="comment-box">
          <span className="comment-author">user123</span>
          <span className="comment-content">
            This is my first Comment Here i am so sorry
          </span>
        </div>
        <div className="comment-controls">
          <span className="comment-control">Like</span>
          <span className="comment-control">Reply</span>
          <span className="comment-control">Share</span>
          <span className="comment-date">8m</span>
        </div>
      </div>
      {/* */}
      <MdMoreHoriz className="comment-moreoptions" />
    </div>
  );
};

export default Comment;
