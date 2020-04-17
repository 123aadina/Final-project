import React from "react";

const BallonBox = (props) => {
  return (
    <div
      style={{
        borderRadius: "5px",
        position: "relative",
        width: "300px",
        height: "100px",
      }}
      className="ballonBox"
    >
      <div style={{ textAlign: "center" }} className="ballonBox-input">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default BallonBox;
