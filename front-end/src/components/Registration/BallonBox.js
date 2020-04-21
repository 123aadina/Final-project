import React from "react";

const BallonBox = (props) => {
  return (
    <div className="ballonBox">
      <div className="ballonBox-input">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default BallonBox;
