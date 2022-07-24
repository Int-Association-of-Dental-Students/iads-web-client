import React from "react";
import CardComponent from "./CardComponent";
import "./CardList.scss";

const CardList = ({ data }) => {
  return (
    <div>
      <div className="container cardlist">
        {data.map((data) => (
          <CardComponent
            t={data.title}
            date={data.date}
            d={data.description}
            i={data.image}
            l={data.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
