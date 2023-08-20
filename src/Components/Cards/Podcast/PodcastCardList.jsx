import React, { useState } from "react";
import PodcastCardComponent from "./PodcastCardComponent";
import "./PodcastCardList.scss";
import plus from "../plusIcon.svg";
import PodcastAddNewModal from "./PodcastAddNewModal";

import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

const PodcastCardList = ({ data, textColor, type }) => {
  console.log(data);
  const Auth = useContext(AuthContext);
  const [show, setShow] = useState(false);

  console.log(data);
  console.log(Auth);

  return (
    <div>
      <div className="container podcast-cardlist">
        {Auth.editor && (
          <div>
            {show && <PodcastAddNewModal show={show} type={type} />}
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
            <PodcastCardComponent
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

export default PodcastCardList;
