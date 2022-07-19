import React from "react";
import "./Internal.scss";
import { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import WorkforceCard from "../WorkforceCard";

import delegate from "../../../Assets/Committees/Ellipse 18.png";

import CardList from "../../../Components/Cards/CardList";

const Internal = () => {
  const [data, setData] = useState([
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
    },
    {
      title: "Title",
      description: "Description",
      image: "image-url",
      link: "link-url",
    },
  ]);

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
      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div
            className="col-lg-3 col-sm-12"
            style={{ borderRight: "1px solid #1D015C" }}
          >
            <img src={delegate} />
            <h3 className="subtitle">Name Surname</h3>
            <p className="position">Position Name</p>
            <Button className="photoUpload">Upload Photo</Button>
            <br />
            <Button className="editWorkforce">Edit Workforce</Button>
          </div>
          <div className="col offset-1">
            <div className="row subtitle">Workforce Members</div>{" "}
            <div className="row WF_memberList">
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>

              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
              <h4 className="name">Name Here</h4>
              <p className="country">Country</p>
            </div>
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
      </div>
      <div className="press">
        <h1 className="title">Press Release</h1>
        <CardList className="card-list" data={data}></CardList>
      </div>
    </div>
  );
};

export default Internal;
