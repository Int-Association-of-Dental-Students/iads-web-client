import React, { useState } from "react";
import CardComponent from "./CardComponent";
import "./CardList.scss";
import plus from "./plusIcon.svg";
import { modal } from "react-bootstrap";
import AddNewModal from "./AddNewModal";

import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const CardList = ({ data, textColor, type }) => {
  console.log(data);
  const Auth = useContext(AuthContext);
  const [show, setShow] = useState(false);

  console.log(data);
  console.log(Auth);

  return (
    <div>
      <div className="container cardlist">
        {Auth.editor && (
          <div>
            {show && <AddNewModal show={show} type={type} />}
            <button
              onClick={() => {
                setShow(!show);
              }}
              className="addNew"
              style={{ border: `2.5px dashed ${textColor}` }}
            >
              <img className="plus-icon" src={plus} />
              <h5>Add New</h5>
            </button>
          </div>
        )}
        {data &&
          data.cards
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
            .map((data) => (
              <CardComponent
                key={data._id} // Ensure each item has a unique key
                style={textColor}
                t={data.title}
                date={data.date}
                d={data.description}
                i={data.image}
                l={data.link}
                a={data.apply}
              />
            ))}
      </div>
    </div>
  );
};

export default CardList;
