import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import "./PodcastCard.scss";
import findmore from "../findmore.svg";
import axios from "axios";
import LoginModal from "../../LoginModal";
import backend from "../../../utils/backend";

import card from "../card.png";
import AddNewModal from "../AddNewModal";

import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

const PodcastCardComponent = (props) => {
  const deleteCard = async (id) => {
    console.log("remove by id");
    try {
      await axios.post(`${backend}api/card/delete/${id}`).then((res) => {
        // setTemp(!temp);
        console.log("card deleted");
      });
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };
  const Auth = useContext(AuthContext);
  const [loginShow, setLoginShow] = useState(false);

  const [data, setData] = useState({
    id: props.id,
    title: props.t,
    description: props.d,
    image: props.i,
    link: props.l,
    date: props.date,
    apply: props.a,
  });

  const date = new Date(data.date);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const formattedDate = `${day}/${month}/${date.getFullYear()}`;

  return (
    <div className="podcast-card">
      <Card className="card" style={{ width: "100%" }}>
        <div className="card-overlay" />
        <Card.Img className="card-img" variant="top" src={data.image} />
        <Card.Body className="card-body">
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href={data.link}
          >
            <Button className="register-button" variant="primary">
              Register
            </Button>
          </a>
          {Auth.editor && (
            <Button
              className="delete-button"
              onClick={() => {
                deleteCard(data.id);
              }}
              variant="primary"
              style={{ color: props.style, alignSelf: "flex-start" }}
            >
              Delete
            </Button>
          )}
          <div className="card-bottom">
            <Card.Title className="card-title">{data.title}</Card.Title>
            <Card.Text className="card-date">{formattedDate}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PodcastCardComponent;
