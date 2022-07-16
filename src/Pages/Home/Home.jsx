import React, { useState } from "react";
import "./Home.scss";
import { Image, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import mainPic from "../../Assets/Main_photo.png";
import verticalLogo from "../../Assets/logo vertical.svg";

import CongressBg from "../../Assets/Home/Congress_bg.png";

import photo1 from "../../Assets/Home/Carousel/photo1.png";
import photo2 from "../../Assets/Home/Carousel/photo2.png";
import photo3 from "../../Assets/Home/Carousel/photo3.png";
import photo4 from "../../Assets/Home/Carousel/photo4.png";

function Home() {
  return (
    <>
      <div className="body container-fluid">
        <div className="home-main">
          <div className="titles">
            <Carousel className="carousel" fade interval={2000}>
              <Carousel.Item>
                <img className="d-block w-100" src={photo1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={photo2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={photo3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={photo4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
            <h1 style={{}}>
              International <br /> Association of <br /> Dental Students
            </h1>
            <p className="home-txt scale-up-center">
              The International Association of Dental Students (IADS) was
              founded in 1951 in <br /> Copenhagen 🇩🇰 in order to serve the
              educational needs of dental students throughout <br /> the world.
              Representing the interests of more than 200,000 dental students in
              around 60 <br /> countries worldwide and having its central office
              at the FDI World Dental Federation <br /> headquarters in Geneva
              🇨🇭 the association strives for educational and scientific <br />{" "}
              excellence throughout the international projects and initiatives
              it manages.
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
        <div className="container-fluid congress"></div>
        <div className="upcoming-brief"></div>
      </div>
    </>
  );
}

export default Home;
