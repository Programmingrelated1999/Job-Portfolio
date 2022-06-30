import React from "react";
import "./CurrentStatus.css";

const CurrentStatus = ({ currentStatus }) => {
  if (currentStatus === "Academic Project") {
    return <h4>You have currently applied filter: Academic Project</h4>;
  } else if (currentStatus === "Personal Project") {
    return <h4>You have currently applied filter: Personal Project</h4>;
  }

  return (
    <div>
      <h4>Click on the buttons to apply filter</h4>
    </div>
  );
};

export default CurrentStatus;
