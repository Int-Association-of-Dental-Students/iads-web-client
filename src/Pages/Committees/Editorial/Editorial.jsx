import React, { useEffect, useState } from "react";
import "./Editorial.scss";
import backend from "../../../utils/backend";

import magazines from "./magazines";
import CardList from "../../../Components/Cards/CardList";

import logo from "../../../Assets/Committees/Editorial/logo.svg";
import delegate from "../../../Assets/Committees/Editorial/delegate.svg";
import axios from "axios";

const Editorial = () => {
  const [magazines, setmagazines] = useState(null);

  useEffect(() => {
    axios.get(`${backend}api/card/magazines`).then((res) => {
      setmagazines(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <div className="container-fluid editorial-page">
      <img className="logo" src={logo} />
      <p className="description">
        The Editorial Board is the committee responsible for producing all the
        visual content that represents the work of itself and all other
        committees and IADS events. Under the leadership of the Vice President
        of Public Relations, the Editorial Board’s own projects include the IADS
        Magazine, IADS Newsletter, Photography Contest, while joint projects
        include Research Platform and IADS Podcasts. The Editorial Board is
        composed of 4 main teams; the magazine team, social media team, graphic
        design team and video editing team. The Liaison Officer of the Editorial
        Board (LOEB) position is one tier beneath the VP of Public Relations and
        one above the rest of the members coordinating all the internal work and
        collaborations with other committees. Have a look at the Editorial Board
        below!
      </p>

      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div className="delegatee col-lg-3 col-sm-12">
            <img style={{ borderRadius: "100%" }} src={delegate} />
            <h3 className="subtitle">Abdullah Munqith Alzubaidi</h3>
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
                <h4 className="name">Mayar Ahmed Abdelaziz Elsayed</h4>
                <p className="country">Egypt</p>
                <h4 className="role">Members:</h4>
                <h4 className="name">Ahmed Hayder Al-Kawaz</h4>
                <p className="country">Iraq</p>
                <h4 className="name">Abdulrahman Zeyad</h4>
                <p className="country">Iraq</p>
                <h4 className="name">İlayda Sürücü</h4>
                <p className="country">Türkiye</p>
                <h4 className="name">Deren Dinç</h4>
                <p className="country">Turkey</p>
                <h4 className="name">Stella Sotošek Kuhar</h4>
                <p className="country">Slovenia</p>
              </div>
              <div className="col-4 WF_memberList">
                <h4 className="name">Mariam salman</h4>
                <p className="country">Jordan</p>
                <h4 className="name">DİLA SUDE</h4>
                <p className="country">Turkey</p>

                <h4 className="name">Dilara ALTINTAŞ</h4>
                <p className="country">Turkey</p>

                <h4 className="name">Alamir Nouraldeen Elgizouli</h4>
                <p className="country">Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="magazines container-fluid">
        <h1 className="title" style={{ marginBottom: "55px" }}>
          IADS Magazines
        </h1>
        {magazines && (
          <CardList
            className="card-list"
            data={magazines}
            textColor="#E85B0D"
            type="magazines"
          ></CardList>
        )}
      </div>
    </div>
  );
};

export default Editorial;
