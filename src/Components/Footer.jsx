import React from "react";
import "./Footer.scss";
import vlogo from "../Assets/logo vertical.svg";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="footer-content">
        <div className="row">
          <div className="col-lg-2">
            <img className="logo" src={vlogo} />
          </div>
          <div className="col-lg-3">
            <div className="iconss mb-5">
              <a href="https://www.facebook.com/iadsweborg/">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://twitter.com/iadsweborg">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/iadsweborg/?hl=en">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/c/iadsweborg">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="row PB">
              International Association of Dental Students (IADS){" "}
            </div>
            <br />
            <div className="row mb-5 PR">
              FDI World Dental Federation, Av. Louis-Casaï 71, 1216, Geneva,
              Switzerland.
            </div>
          </div>
          <div className="col  offset-1">
            <h2 className="title">
              <a href="/projects">PROJECTS</a>
            </h2>
            <p className="item">
              <a href="/projects/zhermack">Zhermack</a>
            </p>
            <p className="item">
              <a href="/projects/colgate">Colgate</a>
            </p>
          </div>
          <div className="col">
            <h2 className="title">
              <a href="/about">ABOUT</a>
            </h2>
            <p className="item">
              <a href="https://iads-web.com/privacy-policy">Privacy Policy</a>
            </p>
          </div>
          <div className="col">
            <h2 className="title">
              <a href="/meetings">MEETINGS</a>
            </h2>
            <p className="item">
              <a href="https://congress.iads-web.com">Annual Congress</a>
            </p>
          </div>
          <div className="col">
            <h2 className="title">
              <a href="/membership">MEMBERSHIP</a>
            </h2>
          </div>
          <div className="col">
            <h2 className="title">COMMITTEES</h2>
            <p className="item">
              <a href="/committees/workforce">Workforce</a>
            </p>
            <p className="item">
              <a href="/committees/internal">Internal Affairs</a>
            </p>
            <p className="item">
              <a href="/committees/editorial">Editorial Board</a>
            </p>
            <p className="item">
              <a href="/committees/exchange">Exchange Board</a>
            </p>
            <p className="item">
              <a href="/committees/prophylaxis">Prophylaxis</a>
            </p>
            <p className="item">
              <a href="/committees/SCORE">SCORE</a>
            </p>
            <p className="item">
              <a href="/committees/training">Training</a>
            </p>
            <p className="item">
              <a href="/committees/voluntary">Voluntary</a>
            </p>
          </div>
        </div>
      </div>
      <p className="PR" style={{ textAlign: "center", marginTop: "75px" }}>
        Copyright © 1951-2022 IADS. All rights reserved.
      </p>
      <p className="PR" style={{ textAlign: "center" }}>
        Developed by{" "}
        <a className="title" href="https://khalidxah.tech">
          xDev
        </a>
      </p>
    </div>
  );
};

export default Footer;
