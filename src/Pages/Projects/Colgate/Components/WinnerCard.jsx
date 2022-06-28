import React from "react";
import "./WinnerCard.scss";

const WinnerCard = (props) => {
  return (
    <div className="winner-card">
      <div className="circle">
        <h1 className="place">{props.place}</h1>
      </div>
      <p className="title">place winner</p>
      <p className="price">$5,000</p>
      <p className="body-txt">and complementary Congress Package seats</p>
    </div>
  );
};

export default WinnerCard;
