import React from "react";
import "./Editorial.scss";

import magazines from "./magazines";
import CardList from "../../../Components/Cards/CardList";

import logo from "../../../Assets/Committees/Editorial/logo.svg";
import delegate from "../../../Assets/Committees/Editorial/delegate.svg";

const Editorial = () => {
  return (
    <div className="container-fluid editorial-page">
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
            <h3 className="subtitle">Deniz Devrim Kaya</h3>
            <p className="position" style={{ marginBottom: "0px" }}>
              Vice President of Public Relations
            </p>
            <p className="position">Email: vppr@iads-web.org</p>
            {/* <Button className="photoUpload">Upload Photo</Button>
            <br />
            <Button className="editWorkforce">Edit Workforce</Button> */}
          </div>
          <div className="members col offset-lg-1 offset-sm-1">
            <div className="row subtitle">Workforce Members</div>
            <div className="row">
              <div className="col-4 WF_memberList">
                <h4 className="role">Liaison Officer:</h4>
                <h4 className="name">Kristine Romanovska</h4>
                <p className="country">Latvia</p>
                <h4 className="role">Members:</h4>
                <h4 className="name">Ouiza Belkadi</h4>
                <p className="country">UAE</p>
                <h4 className="name">Alamir Nouraldeen</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Ezgi Yeşiltan</h4>
                <p className="country">Turkey</p>
                <h4 className="name">Serap Beşiroglu </h4>
                <p className="country">Turkey</p>
              </div>
              <div className="col-4 WF_memberList">
                <h4 className="name">Nisa Ünsur</h4>
                <p className="country">Turkey</p>
                <h4 className="name">Ayşe Sena Kayıkçı</h4>
                <p className="country">Turkey</p>

                <h4 className="name">Ghayda Safeen</h4>
                <p className="country">Palestine</p>

                <h4 className="name">Irina Bodnar</h4>
                <p className="country">Romania</p>
                <h4 className="name">Pedro Ivo</h4>
                <p className="country">Brazil</p>
              </div>
              <div className="col-4 WF_memberList">
                <h4 className="name">Qudsia Khan</h4>
                <p className="country">India</p>
                <h4 className="name">Wajiha Mazhar</h4>
                <p className="country">Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="magazines container-fluid">
        <h1 className="title" style={{ marginBottom: "55px" }}>
          IADS Magazines
        </h1>
        <CardList
          className="card-list"
          data={magazines}
          textColor="#E85B0D"
        ></CardList>
      </div>
    </div>
  );
};

export default Editorial;