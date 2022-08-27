import React from "react";
import "./Prophylaxis.scss";

import { Button } from "react-bootstrap";

import oralHealth from "../../../Assets/Committees/Prophylaxis/oralHealth.svg";
import mouthCancer from "../../../Assets/Committees/Prophylaxis/mouthCancer.svg";
import greenDentistry from "../../../Assets/Committees/Prophylaxis/greenDentistry.svg";

import toolkits from "./toolkits";
import CardList from "../../../Components/Cards/CardList";

import logo from "../../../Assets/Committees/Prophylaxis/logo.svg";
import delegate from "../../../Assets/Committees/Prophylaxis/delegate.svg";

const Prophylaxis = () => {
  return (
    <div className="container-fluid prophylaxis-page">
      <img className="logo" src={logo} />

      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div className="delegatee col-lg-3 col-sm-12">
            <img style={{ borderRadius: "100%" }} src={delegate} />
            <h3 className="subtitle">Payman Sarmad</h3>
            <p className="position" style={{ marginBottom: "0px" }}>
              Prophylaxis Officer
            </p>
            <p className="position">Email: prophylaxis@iads-web.org</p>
            {/* <Button className="photoUpload">Upload Photo</Button>
            <br />
            <Button className="editWorkforce">Edit Workforce</Button> */}
          </div>
          <div className="members col offset-lg-1 offset-sm-1">
            <div className="row subtitle">Workforce Members</div>
            <div className="row">
              <div className="col-4 WF_memberList">
                <h4 className="name">Kosar ghazi zahedi</h4>
                <p className="country">Iran</p>
                <h4 className="name">Hend Taha Abulatifa</h4>
                <p className="country">Palestine</p>
                <h4 className="name">Farras Syakira Reiza</h4>
                <p className="country">Pakistan</p>
                <h4 className="name">Trianita Diva Nugraheni</h4>
                <p className="country">Indonesia</p>
                <h4 className="name">Romaysa Galal Elsayed</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Weam Kamil Elyas</h4>
                <p className="country">Sudan</p>
              </div>
              <div className="col-4 WF_memberList">
                <h4 className="name">Mochammad Syauqi Syafiq</h4>
                <p className="country">Indonesia</p>
                <h4 className="name">Aaminah Salman Wasif</h4>
                <p className="country">Pakistan</p>

                <h4 className="name">Duaa Abdelmoniem Hamid</h4>
                <p className="country">Sudan</p>

                <h4 className="name">Malaika Roghani</h4>
                <p className="country">Pakistan</p>
                <h4 className="name">Hassan Sidahmed</h4>
                <p className="country">Country</p>
                <h4 className="name">Malak Ahmed</h4>
                <p className="country">Iraq</p>
              </div>
              <div className="col-4 WF_memberList">
                <h4 className="name">Pemika Lerttiendamrong</h4>
                <p className="country">Thailand</p>
                <h4 className="name">Zainab Omer</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Rawan Mahmoud</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Francesca Baronchelli</h4>
                <p className="country">Italy</p>
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
          data={toolkits}
          textColor="#6D3591"
        ></CardList>
      </div>

      <div className="container projectsCards">
        <div className="projectCard greenDentistry">
          <img src={greenDentistry} />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <Button
              style={{ backgroundColor: "#0B4E14" }}
              href=""
              className="btn"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="projectCard WOHD">
          <img src={oralHealth} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{ backgroundColor: "#E41A3B" }}
              href="https://iads-web.com/projects/WOHD"
              className="btn"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="projectCard mouthCancer">
          <img src={mouthCancer} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button className="btn" style={{ backgroundColor: "#034F97" }}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prophylaxis;
