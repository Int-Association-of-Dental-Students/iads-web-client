import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Exchange.scss";

import logo from "../../../Assets/Committees/Exchange/logo.svg";
import delegate from "../../../Assets/Committees/Exchange/delegate.svg";

import programs from "./programs";
import CardList from "../../../Components/Cards/CardList";

const Exchange = () => {
  const [programs, setPrograms] = useState(null);

  useEffect(() => {
    axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/programs`)
      .then((res) => {
        setPrograms(res.data);
        // console.log(res.data);
      });
  }, []);

  return (
    <div className="exchange-page">
      <img className="logo" src={logo} />
      <p className="description">
        Exchange Board has produced a stellar opportunity for Dental Students to
        broaden their horizons and make their mark in this fast-pacing,
        ever-changing and innovative world. IADS strives to provide Dental
        Clinical Internships, uniquely designed to accommodate and acuminate the
        intellectual and technical needs of dental students. It works to
        overcome cultural barriers by delivering a work-friendly and healthy
        atmosphere through its exchange projects.
      </p>
      <button
        href="https://exchange.iads-web.org/"
        className="btn2"
        style={{ marginBottom: "80px" }}
      >
        <a
          style={{ textDecoration: "none", color: "black !important" }}
          href="https://exchange.iads-web.org/"
        >
          Exchange Portal
        </a>
      </button>

      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div className="delegatee col-lg-3 col-sm-12">
            <img style={{ borderRadius: "100%" }} src={delegate} />
            <h3 className="subtitle">Kseniia Rusakova</h3>
            <p className="position" style={{ marginBottom: "0px" }}>
              Vice President of Exchange
            </p>
            <p className="position">Email: vpe@iads-web.org</p>
            {/* <Button className="photoUpload">Upload Photo</Button>
            <br />
            <Button className="editWorkforce">Edit Workforce</Button> */}
          </div>
          <div className="members col offset-lg-1">
            <div className="row subtitle">Workforce Members</div>
            <div className="row">
              <div className="col-4 WF_memberList">
                <h4 className="name">Wajiha Mazhar</h4>
                <p className="country">Pakistan</p>
                <h4 className="name">Gaida Yaser</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Inez Marella Dion Saputri</h4>
                <p className="country">Indonesia</p>
                <h4 className="name">Andrea Fernanda Bernal Alvarez</h4>
                <p className="country">Ecuador</p>
              </div>
              <div className="col-4 WF_memberList">
                <h4 className="name">Ola Abdul Wahab</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Yaren Sönmez</h4>
                <p className="country">Türkiye</p>
                <h4 className="name">Tasnim Elrashid</h4>
                <p className="country">Sudan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="title" style={{ marginTop: "70px", marginBottom: "50px" }}>
        Exhange Programs
      </h1>

      {programs && (
        <CardList
          className="card-list"
          data={programs}
          textColor="#ED8E00"
          type="programs"
        ></CardList>
      )}
      <br />
      <br />
    </div>
  );
};

export default Exchange;
