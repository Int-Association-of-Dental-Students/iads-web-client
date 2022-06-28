import React, { useState } from "react";
import "./Home.scss";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import mainPic from "../../Assets/Main_photo.png";
import verticalLogo from "../../Assets/logo vertical.svg";

function Home() {
  return (
    <>
      <div className="body container-fluid">
        <div className="home-main">
          <div className="titles">
            <h1>International Association of Dental Students</h1>
            <p className="home-txt scale-up-center">
              The International Association of Dental Students (IADS) was
              founded in 1951 in Copenhagen 🇩🇰 in order to serve the educational
              needs of dental students throughout the world. Representing the
              interests of more than 200,000 dental students in around 60
              countries worldwide and having its central office at the FDI World
              Dental Federation headquarters in Geneva 🇨🇭 the association
              strives for educational and scientific excellence throughout the
              international projects and initiatives it manages.
            </p>
          </div>
          <div className="logo">
            <img className="vlogo" src={verticalLogo} />
          </div>
          {/* <h2>The website is currently under development.</h2>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button
                  className="btn"
                  style={{ marginRight: "10px" }}
                  href="https://iads-web.com/projects/zhermack"
                >
                  Zhermack Project
                </Button>
                <Button
                  className="btn"
                  style={{ marginRight: "10px" }}
                  href="https://iads-web.com/projects/colgate"
                >
                  Colgate Project
                </Button>
                <Button className="btn" href="https://congress.iads-web.com/">
                  Our upcoming congress.
                </Button>
              </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
