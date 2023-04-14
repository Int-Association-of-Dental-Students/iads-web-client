import React, { useEffect, useState } from "react";
import "./Voluntary.scss";

import events from "./events";
import CardList from "../../../Components/Cards/CardList";

import logo from "../../../Assets/Committees/Voluntary/logo.svg";
import delegate from "../../../Assets/Committees/Voluntary/delegate.svg";
import axios from "axios";

const Voluntary = () => {
  const [events, setevents] = useState(null);

  useEffect(() => {
    axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/events`)
      .then((res) => {
        setevents(res.data);
        // console.log(res.data);
      });
  }, []);

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
            <h3 className="subtitle">Maria Teresa Matute</h3>
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
                <h4 className="name">Doğa Helin Özbakır</h4>
                <p className="country">Türkiye</p>
                <h4 className="name">Simone Clementi</h4>
                <p className="country">Italy</p>
                <h4 className="name">Hiba Mohammad Al-Kharraz</h4>
                <p className="country">Jordan</p>
                <h4 className="name">Aisha Awan</h4>
                <p className="country">Thailand</p>
              </div>

              <div className="col-4 WF_memberList">
                <h4 className="name">Michelle Mulach</h4>
                <p className="country">Germany</p>
                <h4 className="name">Jaser Logman Hassan Hammam</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Elif Göksu Çelik</h4>
                <p className="country">Türkiye</p>
                <h4 className="name">Sara Ared Hamada Ebrahim</h4>
                <p className="country">Egypt</p>
              </div>
              <div className="col-4 WF_memberList">
                <h4 className="name">Sara Abdelmoneim Elamin Kheir</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Inés Bouillaud</h4>
                <p className="country">France</p>
                <h4 className="name">Talis Örs</h4>
                <p className="country">Germany</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="events container-fluid">
        <h1 className="title" style={{ marginBottom: "55px" }}>
          Events & Activities
        </h1>
        {events && (
          <CardList
            className="card-list"
            data={events}
            type={"events"}
            textColor="#7EAF0D"
          ></CardList>
        )}
      </div>
    </div>
  );
};

export default Voluntary;
