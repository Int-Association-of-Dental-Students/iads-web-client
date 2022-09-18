import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import "./Card.scss";
import findmore from "./findmore.svg";

import LoginModal from "../LoginModal";

import card from "./card.png";
import AddNewModal from "./AddNewModal";

import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const CardComponent = (props) => {
  const Auth = useContext(AuthContext);
  const [loginShow, setLoginShow] = useState(false);

  const [data, setData] = useState({
    title: props.t,
    description: props.d,
    image: props.i,
    link: props.l,
    date: props.date,
  });

  return (
    <div>
      {loginShow && (
        <LoginModal
          show={loginShow}
          description="Please Login to access this issue"
        />
      )}
      {/* {console.log(loginShow)} */}
      <Card className="card" id="card" bg="white" style={{ width: "18rem" }}>
        <Card.Img className="card-img" variant="top" src={data.image} />
        <Card.Body>
          <Card.Title className="card-title" style={{ color: props.style }}>
            {data.title}
          </Card.Title>
          <Card.Text className="card-date">{data.date}</Card.Text>
          <Card.Text className="card-text">{data.description}</Card.Text>
          {Auth.validation && (
            <Button
              className="card-button"
              href={data.link}
              variant="primary"
              style={{ color: props.style }}
            >
              Find out more
              <img
                classname="findmore"
                style={{ marginLeft: "10px" }}
                src={findmore}
              />
            </Button>
          )}
          {!Auth.validation && (
            <Button
              className="card-button"
              // href={data.link}
              variant="primary"
              style={{ color: props.style }}
              onClick={() => setLoginShow(!loginShow)}
            >
              Find out more
              <img
                classname="findmore"
                style={{ marginLeft: "10px" }}
                src={findmore}
              />
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
