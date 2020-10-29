import React from "react";
import "./stylesheets/SidebarOptions.css";

// instead of using props as parameter in the function
// I destructured this here and used it directly
function SidebarOptions({ active, Icon, text }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
