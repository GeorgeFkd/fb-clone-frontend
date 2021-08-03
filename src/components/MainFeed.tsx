import React from "react";
import CreatePost from "./CreatePost";
import CreateGroop from "./CreateGroup";
import "./MainFeed.css";
import PostFeed from "./PostFeed";
import StoryFeed from "./StoryFeed";
import { useState } from "react";
import { getCurrentUserFriends } from "./utils/db.requests";

const MainFeed = () => {
  const [open, setOpen] = useState(false);
  async function dbRequest() {
    const friendsRequest = await getCurrentUserFriends();
    if (friendsRequest.success) {
      console.log(friendsRequest.friends);
    } else {
      console.log("shit");
    }
  }
  return (
    <div className="mainfeed__container">
      <StoryFeed />
      <CreatePost />
      {/* lol */}
      <CreateGroop />
      <button onClick={(e) => dbRequest()}>Db Request</button>
      <PostFeed />
    </div>
  );
};

export default MainFeed;
