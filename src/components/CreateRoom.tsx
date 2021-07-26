import React from "react";
import "./CreateRoom.css";

import { BiVideoPlus } from "react-icons/bi";
const CreateRoom = () => {
  return (
    <div className="createroom-container">
      <div className="createroom-button">
        <BiVideoPlus className="createroom-icon" />
        <p className="createroom-label">Create Room</p>
      </div>
      {/* here we insert all the avatars */}
      <div className="createroom-avatars">
        <p>Insert avatars here</p>
      </div>
    </div>
  );
};

export default CreateRoom;
