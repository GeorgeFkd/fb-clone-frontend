import React from "react";
import "./Avatar.css";

interface Props {
  src: string;
  size: number;
  className?: string;
}

const Avatar: React.FC<Props> = ({ src, size, className }) => {
  let height_width = size + "rem";

  return (
    <img
      src={src}
      style={{ height: height_width, width: height_width, borderRadius: 999 }}
      className={className}
    />
  );
};

export default Avatar;
