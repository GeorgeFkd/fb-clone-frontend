import React from "react";
import "./NewGroupModal.css";

interface Props {
  onClose: any;
}
const NewGroupModal: React.FC<Props> = () => {
  return (
    <div className="modal-container-wrap">
      <div className="newgroupmodal-container"></div>
    </div>
  );
};

export default NewGroupModal;
