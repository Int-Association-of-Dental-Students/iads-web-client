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
                <h4 className="name">Donia Mohamed AbdElsamie</h4>
                <p className="country">Egypt</p>
                <h4 className="name">Shubhan Gandhi</h4>
                <p className="country">India</p>
                <h4 className="name">Kseniia Dashevskaia</h4>
                <p className="country">Russian Federation</p>
              </div>
              <div className="col-4 offset-lg-1">
                <h4 className="name">Muhammad Ibrahim Usman Rabb</h4>
                <p className="country">Pakistan</p>
                <h4 className="name">Mert Özbaş</h4>
                <p className="country">Turkey</p>
                <h4 className="name">Nazli Erenay</h4>
                <p className="country">Turkey</p>
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
