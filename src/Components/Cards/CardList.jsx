import React, { useState } from "react";
import CardComponent from "./CardComponent";
import "./CardList.scss";
import plus from "./plusIcon.svg";
import { modal } from "react-bootstrap";
import AddNewModal from "./AddNewModal";

import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const CardList = ({ data, textColor }) => {
  const Auth = useContext(AuthContext);
  const [show, setShow] = useState(false);

  console.log(Auth);

  return (
    <div>
      <div className="container cardlist">
        {Auth.editor && (
          <div>
            {show && <AddNewModal show={show} />}
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
        {data.map((data) => (
          <CardComponent
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
