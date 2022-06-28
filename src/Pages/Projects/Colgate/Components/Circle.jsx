import React from "react";
import "./Circle.scss";

const Circle = (props) => {
  return (
    <div className="circle-div">
      <img
        className="circle"
        src={props.flag}
        style={{ borderRadius: "100%" }}
      />
    </div>
  );
};

export default Circle;
