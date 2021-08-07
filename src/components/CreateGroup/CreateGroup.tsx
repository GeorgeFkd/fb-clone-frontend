import React from "react";
import "./CreateGroup.css";

import { BiVideoPlus } from "react-icons/bi";
import { useState } from "react";
import NewGroupModal from "../NewGroupModal/NewGroupModal";
const CreateRoom = () => {
  const [openGroupModal, setOpenGroupModal] = useState(false);
  return (
    <div className="creategroup-container">
      <div
        className="creategroup-button"
        onClick={(e) => setOpenGroupModal(true)}
      >
        <BiVideoPlus className="creategroup-icon" />
        <p className="creategroup-label">Create Group</p>
      </div>
      {/* here we insert all the avatars */}
      <div className="creategroup-avatars">
        <p>Insert avatars here</p>
      </div>
      {openGroupModal && (
        <NewGroupModal onClose={() => setOpenGroupModal(false)} />
      )}
    </div>
  );
};

export default CreateRoom;
