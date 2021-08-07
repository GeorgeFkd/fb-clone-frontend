import React from "react";
import { useRef } from "react";
import { IoMdCamera } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { MdGif, MdPhoto, MdTagFaces } from "react-icons/md";
import Avatar from "../utils/Avatar";
import "./CommentInput.css";
import { useState } from "react";
import { PostNewComment } from "../utils/db.requests";

interface Props {
  post_id: number;
  replies_to: number | null;
}
const CommentInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [commentContent, setCommentContent] = useState("");
  inputRef.current?.addEventListener(
    "keypress",
    async function (event: KeyboardEvent) {
      console.log(event.key);
      if (event.key === "Enter") {
        submitComment().then((res) => console.log(res));
      }
    }
  );

  async function submitComment() {
    const requestWasSuccessfull = await PostNewComment();
    if (requestWasSuccessfull) {
      console.log("the end was happy");
    } else {
      console.log("the end was fkcing sad");
    }
  }
  function handleChange(e: any) {
    setCommentContent(e.target.value);
  }
  return (
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
          value={commentContent}
          onChange={handleChange}
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
  );
};

export default CommentInput;
