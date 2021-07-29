import React from "react";
import "./PostControls.css";
import { BiLike, BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { useState } from "react";
import CommentSection from "./CommentSection";
const PostControls = () => {
  const [openCommentSection, setOpenCommentSection] = useState(false);
  return (
    <div className="postcontrols-container">
      {/* this will need some work to be proper */}
      <div className="postcontrols-details">like</div>
      <div className="postcontrols-buttons-container">
        <div className="postcontrols-button row">
          <BiLike className="postcontrols-button-icon" />
          <span className="postcontrols-button-text">Like</span>
        </div>
        <div
          className="postcontrols-button row"
          onClick={(e) => setOpenCommentSection(!openCommentSection)}
        >
          <BiComment className="postcontrols-button-icon" />
          <span className="postcontrols-button-text">Comment</span>
        </div>
        <div className="postcontrols-button row">
          <RiShareForwardLine className="postcontrols-button-icon" />
          <span className="postcontrols-button-text">Share</span>
        </div>
      </div>

      {openCommentSection && <CommentSection />}
    </div>
  );
};

export default PostControls;
