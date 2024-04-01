import React, { useEffect, useState } from "react";
import "./Prophylaxis.scss";

import { Button } from "react-bootstrap";

import oralHealth from "../../../Assets/Committees/Prophylaxis/oralHealth.svg";
import mouthCancer from "../../../Assets/Committees/Prophylaxis/mouthCancer.svg";
import greenDentistry from "../../../Assets/Committees/Prophylaxis/greenDentistry.svg";

import toolkits from "./toolkits";
import CardList from "../../../Components/Cards/CardList";

import logo from "../../../Assets/Committees/Prophylaxis/logo.svg";
import delegate from "../../../Assets/Committees/Prophylaxis/delegate.svg";
import axios from "axios";
import delegatesWorld from "../../../Assets/Governance/delegatesWorld.svg";

import MapComponent from "./MapComponent";

const Prophylaxis = () => {
  const [toolkits, settoolkits] = useState(null);

  // const mapHTML = `
  //   <div id="map-container"></div>
  //   <link href="/Map_Flashop/map.css" rel="stylesheet">
  //   <script src="/Map_Flashop/raphael.min.js"></script>
  //   <script src="/Map_Flashop/settings.js"></script>
  //   <script src="/Map_Flashop/paths.js"></script>
  //   <script src="/Map_Flashop/map.js"></script>
  //   <script>
  //     var map = new FlaMap(map_cfg);
  //     map.drawOnDomReady('map-container');
  //   </script>
  // `;

  useEffect(() => {
    axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/toolkits`)
      .then((res) => {
        settoolkits(res.data);
        // console.log(res.data);
      });
  }, []);

  return (
    <div className="container-fluid prophylaxis-page">
      <img className="logo" src={logo} />
      <p className="description">
        The Public Health Committee aims to involve dental students in actively
        participating in the improvement of oral health as part of general
        health care. Its goal is to ensure that dental students are both
        equipped and empowered to address their concerns regarding the inclusion
        of oral health in health care delivery and community program design on a
        global and local level.
      </p>
      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div className="delegatee col-lg-3 col-sm-12">
            <img style={{ borderRadius: "100%" }} src={delegate} />
            <h3 className="subtitle">Meryem Lahlou</h3>
            <p className="position" style={{ marginBottom: "0px" }}>
              Public Health Officer
            </p>
            <p className="position">Email: prophylaxis@iads-web.org</p>
            {/* <Button className="photoUpload">Upload Photo</Button>
            <br />
            <Button className="editWorkforce">Edit Workforce</Button> */}
          </div>
          <div className="members col offset-lg-1 offset-sm-0">
            <div className="row subtitle">Workforce Members</div>
            <div className="row">
              <div className="col-4 WF_memberList">
                <h4 className="name">Zainab Noor</h4>
                <p className="country">Pakistan</p>
                <h4 className="name">Mayyasah Ramadan</h4>
                <p className="country">Palestine</p>
              </div>

              <div className="col-4 WF_memberList">
                <h4 className="name">Monisha Chinthala</h4>
                <p className="country">India</p>
              </div>
              <div className="col-4 WF_memberList">
                <h4 className="name">Simla Oksouz </h4>
                <p className="country">Turkey</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="IPMB">
        <h1
          className="title"
          style={{
            marginTop: "24px",
            marginBottom: "55px",
            width: "70%",
            margin: "auto",
          }}
        >
          International Public health Material BAnk (IPMB) Platform
        </h1>

        <MapComponent />

        <script src="./MapComponent.js"></script>
        {/* <div dangerouslySetInnerHTML={{ __html: mapHTML }} /> */}
      </div>

      <div className="toolkits container-fluid">
        <h1 className="title" style={{ marginBottom: "55px" }}>
          Toolkits
        </h1>
        {toolkits && (
          <CardList
            className="card-list"
            data={toolkits}
            textColor="#6D3591"
            type="toolkits"
          ></CardList>
        )}
      </div>

      <div className="container projectsCards">
        <div className="projectCard greenDentistry">
          <img src={greenDentistry} />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <Button
              style={{ backgroundColor: "#0B4E14" }}
              href="/projects/greendentistry"
              className="btn"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="projectCard WOHD">
          <img src={oralHealth} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{ backgroundColor: "#E41A3B" }}
              href="/projects/WOHD"
              className="btn"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="projectCard mouthCancer">
          <img src={mouthCancer} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              className="btn"
              style={{ backgroundColor: "#034F97" }}
              href="/projects/MCAM"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prophylaxis;
