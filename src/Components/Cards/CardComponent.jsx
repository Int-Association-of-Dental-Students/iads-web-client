import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import "./Card.scss";

import card from "./card.png";

const CardComponent = (props) => {
  const [data, setData] = useState({
    title: props.t,
    description: props.d,
    image: props.i,
    link: props.l,
  });

  return (
    <div>
      <Card className="card" bg="white" style={{ width: "18rem" }}>
        <Card.Img className="card-img" variant="top" src={card} />
        <Card.Body>
          <Card.Title className="card-title" style={{ color: "#C60E3C" }}>
            {data.title}
          </Card.Title>
          <Card.Text>12/5/2022</Card.Text>
          <Card.Text className="card-text">{data.description}</Card.Text>
          <Button className="card-button" href={data.link} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
