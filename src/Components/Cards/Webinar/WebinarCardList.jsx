import React, { useState } from "react";
import WebinarCardComponent from "./WebinarCardComponent";
import "./WebinarCardList.scss";
import plus from "../plusIcon.svg";
import WebinarAddNewModal from "./WebinarAddNewModal";

import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

const WebinarCardList = ({ data, textColor, type }) => {
  console.log(data);
  const Auth = useContext(AuthContext);
  const [show, setShow] = useState(false);

  console.log(data);
  console.log(Auth);

  return (
    <div>
      <div className="container webinar-cardlist">
        {Auth.editor && (
          <div>
            {show && <WebinarAddNewModal show={show} type={type} />}
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
          data.cards.map((data) => (
            <WebinarCardComponent
              id={data._id}
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

export default WebinarCardList;
