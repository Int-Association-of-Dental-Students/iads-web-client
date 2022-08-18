import React from "react";
import "./GovCard.scss";

const GovCard = (props) => {
  return (
    <div className="govCard">
      <img className="person-img" src={props.personImg} />
      <img className="flag-img" src={props.flag} />
      <h1 className="name" style={{ color: props.color }}>
        {props.name}
      </h1>
      <p className="role" style={{ color: props.color }}>
        {props.role}
      </p>
    </div>
  );
};

export default GovCard;
