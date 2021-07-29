import React from "react";
import {
  MdArrowDropDown,
  MdCamera,
  MdGif,
  MdPhoto,
  MdTagFaces,
} from "react-icons/md";
import { IoMdCamera } from "react-icons/io";
import "./CommentSection.css";
import Avatar from "./utils/Avatar";
import { IconContext } from "react-icons/lib";
import { useEffect } from "react";
import { useRef } from "react";
import Comment from "./Comment";
const CommentSection = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitComment = function (comment: string | undefined, postId: number) {
    if (comment) {
      //todo api request
    }
  };

  useEffect(() => {
    const handleInputEnter = function (ev: KeyboardEvent) {
      console.log(ev.key);
      if (ev.key === "Enter") {
        // probably async
        submitComment(inputRef.current?.value, 5);
        inputRef.current!.value = "";
      }
    };
    inputRef.current?.addEventListener("keypress", handleInputEnter);
    return () => {
      inputRef.current?.removeEventListener("keypress", handleInputEnter);
    };
  }, []);
  return (
    <div className="commentsection-container">
      <div className="commentsection-toprow">
        <span className="commentsection-toprow-text">Top Comments</span>
        <MdArrowDropDown className="commentsection-toprow-icon" />
      </div>
      {/* extract to component to use for reply */}
      <div className="commentsection-newcomment">
        <Avatar
          src={
            "https://i.pinimg.com/originals/a5/41/02/a541024b0989ea9b0bd470fcfc89dcb1.jpg"
          }
          size={2.5}
        />
        <div className="commentsection-newcomment-inputbox">
          <input
            placeholder="write your comment here"
            className="commentsection-newcomment-input"
            ref={inputRef}
          />
          <div className="commentsection-newcomment-extraoptions">
            <IconContext.Provider
              value={{
                color: "blue",
                className: "commentsection-newcomment-allicons",
              }}
            >
              {
                //todo add tooltips to the icons
              }
              <MdTagFaces />
              <IoMdCamera />
              <MdGif />
              <MdPhoto />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentSection;
