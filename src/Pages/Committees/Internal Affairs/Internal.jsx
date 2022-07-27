import React from "react";
import "./Internal.scss";
import { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import WorkforceCard from "../../../Components/Workforce/WorkforceCard";

import delegate from "../../../Assets/Committees/Internal/Lamis.svg";
import pdfIcon from "../../../Assets/Committees/Internal/Pdf Icon.svg";

import CardList from "../../../Components/Cards/CardList";
import pressRelease from "./pressRelease";

const Internal = () => {
  const WFList = [
    { name: "Maryam Ayyad Ismail", country: "Iraq" },
    { name: "Maryam Ayyad Ismail", country: "Iraq" },
  ];

  return (
    <div className="internal-page">
      <h1 className="title">Internal Affairs Bureau</h1>
      <p className="description">
        The Internal Affairs Bureau is the IADS task force under the lead of the
        Vice President of Internal Affairs. Often viewed as a secretariat
        office, the IAB is actually valued as the backbone of the organization.
        It has a responsibility to oversee the whole workflow generated by IADS
        Leadership and the Workforce throughout the office term. Liaising
        communication, following up progress, rating performance; all while
        maintaining contact with all country delegates, orienting membership
        candidates,working on internal regulations and not only, are all part of
        the work the IAB does yearly.
      </p>

      {/* <WorkforceCard
        delegateImage={delegate}
        delegateName="Lamis Elsheikh"
        delegatePosition={`Vice President of Internal Affairs`}
        WFList={WFList}
      /> */}

      {/* A temporary workforce card for simplicity, Until the main functional one is bug free and finalized */}
      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div
            className="col-lg-3 col-sm-12"
            style={{ borderRight: "1px solid #1D015C" }}
          >
            <img style={{ borderRadius: "100%" }} src={delegate} />
            <h3 className="subtitle">Dr. Lamis Elsheikh</h3>
            <p className="position" style={{ marginBottom: "0px" }}>
              Vice President of Internal Affairs
            </p>
            <p className="position">Email: vpia@iads-web.org</p>
            {/* <Button className="photoUpload">Upload Photo</Button>
            <br />
            <Button className="editWorkforce">Edit Workforce</Button> */}
          </div>
          <div className="col offset-1">
            <div className="row subtitle">Workforce Members</div>{" "}
            <div className="row WF_memberList">
              <h4 className="name">Maryam Ayyad Ismael</h4>
              <p className="country">Iraq</p>
            </div>
          </div>
        </div>
      </div>

      <div className="regulations">
        <h1 className="title">Regulations</h1>
        <div className="cardList container">
          <div className="cardd">
            <img src={pdfIcon} />
            <h2 className="regtitle">Regulation file title</h2>
            <p className="reg-desc">
              Massa ultricies non at id enim tincidunt. Amet viverra aenean sed{" "}
            </p>
            <h2 className="dload">Download</h2>
          </div>
        </div>
      </div>
      <div className="press">
        <h1 className="title">Press Release</h1>
        <CardList
          className="card-list"
          data={pressRelease}
          textColor="#C60E3C"
        ></CardList>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Internal;
