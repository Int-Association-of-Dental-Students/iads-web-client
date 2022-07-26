import React from "react";
import "./Exchange.scss";

import logo from "../../../Assets/Committees/Exchange/logo.svg";
import delegate from "../../../Assets/Committees/Exchange/delegate.svg";

import programs from "./programs";
import CardList from "../../../Components/Cards/CardList";

const Exchange = () => {
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
        Exchange Portal
      </button>

      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div className="delegatee col-lg-3 col-sm-12">
            <img style={{ borderRadius: "100%" }} src={delegate} />
            <h3 className="subtitle">Dr. Arsal Sadiq</h3>
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
                <h4 className="role">Secretary:</h4>
                <h4 className="name">Mian Aneeq Majid</h4>
                <p className="country">Pakistan</p>
                <h4 className="role">Content Manager:</h4>
                <h4 className="name">Fatima Rehman</h4>
                <p className="country">Pakistan</p>
                <h4 className="role">Members:</h4>
                <h4 className="name">Maira Pasha</h4>
                <p className="country">Pakistan</p>
                <h4 className="name">Yuina Okazaki</h4>
                <p className="country">Japan</p>
              </div>

              <div className="col-4 WF_memberList">
                <h4 className="name">Raghad Saleh</h4>
                <p className="country">Palestine</p>

                <h4 className="name">Öykü Naz Turan</h4>
                <p className="country">Turkey</p>

                <h4 className="name">Anna Pakhuta</h4>
                <p className="country">Ukraine</p>
                <h4 className="name">Mana Kitsugi</h4>
                <p className="country">Japan</p>
                <h4 className="name">Daria Vladimirovna Savchenko</h4>
                <p className="country">Russia</p>
                <h4 className="name">Gaida Yaser</h4>
                <p className="country">Sudan</p>
              </div>

              <div className="col-4 WF_memberList">
                <h4 className="name"> Ruba Mazin</h4>
                <p className="country">Palestine</p>

                <h4 className="name">Jazila Afifa</h4>
                <p className="country">Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="title" style={{ marginTop: "70px", marginBottom: "50px" }}>
        Exhange Programs
      </h1>

      <CardList
        className="card-list"
        data={programs}
        textColor="#0D7B7D"
      ></CardList>
    </div>
  );
};

export default Exchange;
