import React from "react";
import "./Internal.scss";
import { useState } from "react";

import delegate from "../../../Assets/Committees/Ellipse 18.png";

import CardList from "../../../Components/Cards/CardList";

const Internal = () => {
  const [data, setData] = useState(
    {
      title: "Title",
      description: "Description",
      image: "image-url",
      link: "link-url",
    },
    {
      title: "Title",
      description: "Description",
      image: "image-url",
      link: "link-url",
    }
  );

  return (
    <div className="internal-page">
      <h1 className="title">Internal Affairs Bureau</h1>
      <p className="description">
        Commodo mattis quam nunc, facilisis at nec adipiscing vulputate et.
        Facilisis at etiam est consequat nibh integer. Dignissim porttitor
        aliquam, mattis accumsan suspendisse quis urna consectetur. Rutrum eu,
        quam aliquet mauris varius ut euismod amet. Velit mauris et id proin
        pretium. Eu eget gravida turpis adipiscing. Volutpat placerat mattis
        enim neque at sed. Ullamcorper sit tincidunt neque ac felis a. Auctor
        quam scelerisque augue malesuada consequat, sit ac ut quam.
      </p>
      <div className="container workforce">
        <div className="row">
          <div className="col-3">
            <img src={delegate} />
            <h3 className="subtitle">Name Surname</h3>
            <p className="position">Position Name</p>
          </div>
          <div className="col">
            <div className="row subtitle">Workforce Members</div>{" "}
          </div>
        </div>
      </div>
      <div className="regulations">
        <h1 className="title">Regulations</h1>
        <p className="description">
          Commodo mattis quam nunc, facilisis at nec adipiscing vulputate et.
          Facilisis at etiam est consequat nibh integer. Dignissim porttitor
          aliquam, mattis accumsan suspendisse quis urna consectetur. Rutrum eu,
          quam aliquet mauris varius ut euismod amet. Velit mauris et id proin
          pretium. Eu eget gravida turpis adipiscing. Volutpat placerat mattis
          enim neque at sed. Ullamcorper sit{" "}
        </p>
        {/* <CardList data={data}></CardList> */}
      </div>
    </div>
  );
};

export default Internal;
