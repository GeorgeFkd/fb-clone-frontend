import React from "react";
import { useState, useEffect, useRef } from "react";
import { ImCross } from "react-icons/im";
import "./NewGroupModal.css";
import Avatar from "../utils/Avatar";
import { CreateGroup } from "../utils/db.requests";

interface Props {
  onClose: () => void; //sets state properly to close it
}
const NewGroupModal: React.FC<Props> = ({ onClose }) => {
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [groupName, setGroupName] = useState("");
  useEffect(() => {
    submitBtnRef.current!.disabled = !!groupName ? false : true;
  }, [groupName]);
  const handleChange = function (e: any) {
    setGroupName(e.target.value);
  };
  function focusOnInput(e: any) {
    inputRef.current?.focus();
  }

  async function submitGroup() {
    const createGroupIsSuccessfull = await CreateGroup(groupName);
    if (createGroupIsSuccessfull) {
      console.log("we ok bro ");
      setGroupName("");
    } else {
      console.log("ah shit here we go again");
    }
  }
  return (
    <div className="modal-container-wrap">
      <div className="newgroupmodal-container">
        <div className="groupmodal-title-container row">
          {/* find a way to center the title */}
          <h3 className="groupmodal-title">Create Group</h3>
          <ImCross className="groupmodal-title-icon" onClick={onClose} />
        </div>
        <div className="divider"></div>
        <div className="groupmodal-main-header">
          <Avatar
            src="https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"
            size={2.5}
          />
          <div className="groupmodal-main-details">
            <span className="groupmodal-main-username">Geon Fkd</span>
            {
              //todo add the tooltip}
            }
          </div>
        </div>
        <div className="groupmodal-main-inputarea" onClick={focusOnInput}>
          <input
            ref={inputRef}
            value={groupName}
            onChange={handleChange}
            placeholder="What is the name of your new group?"
            className="groupmodal-main-input"
          />
        </div>
        <button
          className="groupmodal-submit"
          onClick={submitGroup}
          ref={submitBtnRef}
        >
          Create The Group
        </button>
      </div>
    </div>
  );
};

export default NewGroupModal;
