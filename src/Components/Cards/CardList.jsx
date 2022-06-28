import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.map((data) => (
            <div className="col">
              <Card
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
