import React from "react";
import "./TeamCard.scss";

const TeamCard = (props) => {
  return (
    <div className="card" style={{ height: "240px", width: "300px" }}>
      <img className="pic" src={props.src} />
      <p className="name"> {props.name}</p>
      <p className="role">{props.role}</p>
    </div>
  );
};

export default TeamCard;
