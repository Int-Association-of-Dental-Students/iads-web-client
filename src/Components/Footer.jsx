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
              FDI World Dental Federation, 1216 <br />
              Geneva, Switzerland.
            </div>
          </div>
          <div className="col  offset-1">
            <h2 className="title">PROJECTS</h2>
            <p className="item">Zhermack</p>
            <p className="item">Colgate</p>
          </div>
          <div className="col">
            <h2 className="title">ABOUT</h2>
          </div>
          <div className="col">
            <h2 className="title">MEETINGS</h2>
            <p className="item">Annual Congress</p>
          </div>
          <div className="col">
            <h2 className="title">MEMBERSHIP</h2>
          </div>
          <div className="col">
            <h2 className="title">COMMITTEES</h2>
            <p className="item">Workforce</p>
            <p className="item">Internal Affairs</p>
            <p className="item">Editorial Board</p>
            <p className="item">Exchange Board</p>
            <p className="item">Prophylaxis</p>
            <p className="item">SCORE</p>
            <p className="item">Training</p>
            <p className="item">Voluntary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
