import React from "react";
import CardComponent from "./CardComponent";

const CardList = ({ data }) => {
  return (
    <div>
      <div className="container cardlist">
        <div className="row">
          {data.map((data) => (
            <div className="col">
              <CardComponent
                t={data.title}
                d={data.description}
                i={data.image}
                l={data.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
