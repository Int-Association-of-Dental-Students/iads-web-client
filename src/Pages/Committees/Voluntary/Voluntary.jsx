import React from "react";
import "./Voluntary.scss";

import events from "./events";
import CardList from "../../../Components/Cards/CardList";

import logo from "../../../Assets/Committees/Voluntary/logo.svg";
import delegate from "../../../Assets/Committees/Voluntary/delegate.svg";

const Voluntary = () => {
  return (
    <div className="container-fluid voluntary-page">
      <img className="logo" src={logo} />
      <p className="description">
        Voluntary Work Committee is concerned with creating opportunities for
        dental students to contribute their time and skills in order to help
        underprivileged communities in remote areas of the planet who otherwise
        could not access or afford ativan for sale/ oral health care.
      </p>

      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div className="delegatee col-lg-3 col-sm-12">
            <img style={{ borderRadius: "100%" }} src={delegate} />
            <h3 className="subtitle">Nadeen Haj Ahmad</h3>
            <p className="position" style={{ marginBottom: "0px" }}>
              Voluntary Officer
            </p>
            <p className="position">Email: voluntary@iads-web.org</p>
            {/* <Button className="photoUpload">Upload Photo</Button>
            <br />
            <Button className="editWorkforce">Edit Workforce</Button> */}
          </div>
          <div className="members col offset-lg-1 offset-sm-1">
            <div className="row subtitle">Workforce Members</div>
            <div className="row">
              <div className="col-4 WF_memberList">
                <h4 className="name">Al-Yaman Taha Ahmad</h4>
                <p className="country">Jordan</p>
                <h4 className="name">Amirreza Baghani</h4>
                <p className="country">Iran</p>

                <h4 className="name">Dania Ahmad Rifat Qaituqa</h4>
                <p className="country">Jordan</p>

                <h4 className="name">Deniz Naz Bilgiç</h4>
                <p className="country">Turkey</p>

                <h4 className="name">Hatice Övgü Nalçacı</h4>
                <p className="country">Turkey</p>
                <h4 className="name">Jaser Logman Hammam</h4>
                <p className="country">Sudan</p>
              </div>

              <div className="col-4 WF_memberList">
                <h4 className="name">Kinza Ghauri</h4>
                <p className="country">Pakistan</p>
                <h4 className="name">Michelle Mulach</h4>
                <p className="country">Germany</p>

                <h4 className="name">Muammer Alhan Babat</h4>
                <p className="country">Turkey</p>

                <h4 className="name">Safira Yusinta Rubiyanti</h4>
                <p className="country">Indonesia</p>
                <h4 className="name">Mahmud Salah</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Zeynep Tuğçe Tağtekin</h4>
                <p className="country">Turkey</p>
              </div>
              <div className="col-4 WF_memberList">
                <h4 className="name">Mohamed Mahjoub Ahmed</h4>
                <p className="country">Sudan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="events container-fluid">
        <h1 className="title" style={{ marginBottom: "55px" }}>
          Events & Activities
        </h1>
        <CardList
          className="card-list"
          data={events}
          textColor="#7EAF0D"
        ></CardList>
      </div>
    </div>
  );
};

export default Voluntary;
