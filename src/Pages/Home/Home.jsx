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
        <h1 className="title-txt" style={{ color: "blue", marginTop: "70px" }}>
          The Website is Currently Under Development You can visit the current
          projects in the projects tab.
        </h1>
        <div
          className="links"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Button
            style={{ marginBottom: "50px" }}
            href="https://congress.iads-web.com"
          >
            View Our Current Congress
          </Button>
          <Button style={{ marginBottom: "50px" }} href="/projects/colgate">
            Colgate BSBF Project
          </Button>
        </div>

        <div className="dev">
          <div className="home-main">
            <div className="titles">
              <Carousel className="carousel" fade interval={2000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={photo1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={photo2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={photo3}
                    alt="Third slide"
                  />
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
                educational needs of dental students throughout <br /> the
                world. Representing the interests of more than 200,000 dental
                students in around 60 <br /> countries worldwide and having its
                central office at the FDI World Dental Federation <br />{" "}
                headquarters in Geneva 🇨🇭 the association strives for
                educational and scientific <br /> excellence throughout the
                international projects and initiatives it manages.
              </p>
            </div>
            <div className="logo">
              <img className="vlogo" src={verticalLogo} />
            </div>
          </div>
          <div className="container-fluid congress"></div>
          <div className="upcoming-brief"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
