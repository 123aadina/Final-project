import React from "react";

const BallonBox = (props) => {
  return (
    <div className="ballonBox">
      <div className="ballonBox-input">
        <h6>{props.title}</h6>
      </div>
    </div>
  );
};

export default BallonBox;
