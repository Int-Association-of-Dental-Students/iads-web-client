import React from "react";
import { Card } from "react-bootstrap";

const Card = () => {
  const [data, setData] = useState({
    title: props.t,
    description: props.d,
    image: props.i,
    link: props.l,
  });

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Button href={data.link} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Card;
