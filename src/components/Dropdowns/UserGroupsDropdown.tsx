import React from "react";
import "./UserGroupsDropdown.css";
interface Props {
  onSelect: any;
  availableGroups?: Array<any>;
}

const userGroups = ["emo goth grils", "sigma chads", "friends", "public"];

const UserGroupsDropdown: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="groupsdropdown-container">
      {userGroups.map((group) => {
        return (
          <span className="groupsdropdown-item" onClick={() => onSelect(group)}>
            {group}
          </span>
        );
      })}
    </div>
  );
};

export default UserGroupsDropdown;
