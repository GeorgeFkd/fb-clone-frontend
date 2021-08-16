import { useRef } from "react";
import { useEffect } from "react";

export const useClickOutside = (ref: any, callback: () => void) => {
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  const handleClick = (e: any) => {
    console.warn("watch out for click outside", ref.current, e.target);
    //ref.current is null when pressing inside the ref
    if (ref.current && !ref.current.contains(e.target)) {
      console.log("activate weapons");
      callback();
    }
  };
};
