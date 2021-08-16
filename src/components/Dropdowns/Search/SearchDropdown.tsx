import React from "react";
import "./SearchDropdown.css";
interface GroupType {
  group_id: number;
  name: string;
}

interface Props {
  groups: GroupType[];
}

const SearchDropdown: React.FC<Props> = ({ groups }) => {
  return (
    <div className="searchdropdown-container">
      {groups.map((group) => {
        return <p className="searchdropdown-item row">{group.name}</p>;
      })}
    </div>
  );
};

export default SearchDropdown;
