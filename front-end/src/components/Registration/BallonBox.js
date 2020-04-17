import React from "react";
// Styling
import "../../styles/App.scss";

const BallonBox = (props) => {
  return (
    <div
      //   style={{
      //     borderRadius: "5px",
      //     position: "relative",
      //     width: "300px",
      //     height: "100px",
      //   }}
      className="ballonBox"
    >
      <div
        // style={{
        //   textAlign: "center",
        //   position: "absolute",
        //   width: "0",
        //   height: "0",
        //   borderColor: "#34495E",
        //   content: "",
        // }}
        className="ballonBox-input"
      >
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default BallonBox;
