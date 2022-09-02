import React from "react";
import "./GreenDentistry.scss";

import logo from "../../../Assets/Projects/GreenDentistry/logo.svg";
import logo2 from "../../../Assets/Projects/GreenDentistry/logo2.svg";
import bullet from "../../../Assets/Projects/GreenDentistry/bullet.svg";
import bullet2 from "../../../Assets/Projects/GreenDentistry/bullet2.svg";
import about from "../../../Assets/Projects/GreenDentistry/about.png";

import { Table } from "react-bootstrap";

import CardList from "../../../Components/Cards/CardList";
import Reports from "./Reports";

const GreenDentistry = () => {
  return (
    <div className="GD-page">
      <div className="hero">
        <div className="overlay">
          <div className="landing container">
            <div className="row">
              <div className="col icons">
                <img className="logo" src={logo} />
                <img
                  className="logo2"
                  src={logo2}
                  style={{ marginLeft: "50px" }}
                />
                <br />
              </div>
            </div>
            <div className="row hash mt-5" style={{ marginLeft: "200px" }}>
              <span>
                <b>#Green</b>Dentistry2022
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="flex-horiz">
          <img src={about} />
          <div className="flex-vert">
            <h1 className="title-text" style={{ marginBottom: "38px" }}>
              <img
                src={bullet}
                className="bullet"
                style={{ marginLeft: "-100px" }}
              />
              About Green Dentistry
            </h1>
            <p className="sec-txt" style={{ width: "80%" }}>
              <b>Green Dentistry</b> is a joint project between the
              “International Association of Dental Students” (IADS) and “Freier
              Verband Deutscher Zahnärzte“ (FVDZ) Student Chamber with the goal
              to: raise awareness within dental practitioners , teach them how
              to change their daily routine towards a profitable and
              eco-friendly workflow in order to have an eco-friendly dental
              practice in future.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <a
                href="https://drive.google.com/file/d/1s5-mgmnLqjsf_dw4hnRk0xAbIT4V5RYr/view?usp=sharing"
                className="bttn"
                style={{ color: "black" }}
              >
                Green Dentistry Toolkit
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="upcoming">
        <h1 className="title-text" style={{ marginBottom: "38px" }}>
          <img src={bullet} className="bullet" />
          Upcoming Trophy/Competition
        </h1>
        <div className="container padding">
          <div className="row">
            <div className="col">
              <h1 className="subtitle-text">About</h1>
              <p className="sec-txt">
                All IADS and FVDZ (Student Chambers) Members are invited to
                participate by organizing a campaign in their countries <br />
                Campaigns should include at least one of the following
                activities: <br />
                <ul>
                  <li>Lecture/Panel discussion about “GreenDentistry”</li>
                  <li>Awareness station/booth at their University/Campus</li>
                  <li>Online Campaign.</li>
                </ul>
              </p>
            </div>
            <div className="col">
              <h1 className="subtitle-text">The Goal</h1>
              <p className="sec-txt">
                The goal is to brainstorm ideas on how to change the daily
                routine of dentists towards a profitable and eco-friendly
                workflow in order to have an eco- friendly dental practice in
                future.
                <br />
                <br />
                Members will be asked to collaborate with National Dental
                Associations in order to reach more students and dentists.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1 className="subtitle-text">Competition Timeline</h1>
              <p className="sec-txt">
                <span style={{ color: "#0A4D13", fontFamily: "Poppins bold" }}>
                  -22nd of APRIL: International Mother Earth Day
                </span>{" "}
                <br />
                Green Dentistry Announcement → You can start preparing your
                ideas!
                <br />
                <br />
                <span style={{ color: "#0A4D13", fontFamily: "Poppins bold" }}>
                  -22nd of MAY: It’s Green Dentistry day! <br />
                </span>
                Let’s all celebrate this day! <br />
                Don’t forget to show the world how you are celebrating this day.
                <br />
                <br />
                <span style={{ color: "#0A4D13", fontFamily: "Poppins bold" }}>
                  -22nd of June: Deadline to submit the final report
                </span>
              </p>
            </div>
            <div className="col">
              <h1 className="subtitle-text">Further Info</h1>
              <p className="sec-txt">
                Fixed campaign hashtags: #GreenDentistry Additional tags to
                better serve specific campaigns can be used.
                <br /> <br />
                The competition starts on the 22th of May and lasts until the
                22nd of June; which is the final deadline for report submission.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="submit"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <h1 className="header-text" style={{ color: "#0A4D13" }}>
          <img className="blt2" src={bullet2} />
          SUBMIT YOUR REPORT
          <img className="blt2" src={bullet2} />
        </h1>
        <div className="flex-horiz" style={{ justifyContent: "center" }}>
          <a
            className="bttn"
            style={{ marginTop: "60px", background: "#706E6E" }}
          >
            Submit now
          </a>
        </div>
        <p
          className="sec-txt"
          style={{
            color: "#3A3A3D",
            textAlign: "center",

            marginTop: "50px",
          }}
        >
          Deadline for submission of reports: 22nd of June 2022 <br />
          After careful evaluation, winning organisations shall be contacted via
          email.
        </p>
      </div>

      <div className="history">
        <h1 className="title-text" style={{ marginBottom: "38px" }}>
          <img src={bullet} className="bullet" />
          History
        </h1>
        <p className="sec-txt" style={{ width: "80%", margin: "auto" }}>
          Green Dentistry started as a joint project between IADS and FVDZ in
          2020, under the leadership of Prophylaxis Chairperson, Julien Issa.
          Aiming to raise awareness for a relatively budding yet contemporary
          concern as is the safety of our environment and our footprint as
          dental professionals, the project quickly gained interest among
          national organisations among several of our member countries and was
          transformed into one of IADS major public health campaigns. <br />
          Now, both organisations celebrate Green Dentistry Day on May 22nd,
          along with several other countries that join the campaigning and each
          year a competition for best campaign is held as the reach of this
          project grows bigger. <br />
          In November 2021, FVDZ representative, and in this case our
          representative as well, Milena Hegenauer presented the Green Dentistry
          Day project at COP26, showing work that was done so far through
          campaigns and showcasing the work of the winning organisation of 2021
          under the auspices of IADS, the Sudanese Association of Dental
          Students (SADS).
        </p>
      </div>

      <div className="finalReports">
        <div className="container">
          <h1
            className="title-text"
            style={{
              color: "#0A4D13",
              marginBottom: "100px",
              textAlign: "center",
            }}
          >
            <img src={bullet2} style={{ marginRight: "25px" }} />
            Final Reports Booklets
          </h1>

          <CardList className="card-list" data={Reports} textColor="#0A4D13" />
        </div>
      </div>

      <div className="honor">
        <div className="container">
          <h1
            className="title-text"
            style={{ color: "#0A4D13", marginBottom: "100px" }}
          >
            <img src={bullet2} style={{ marginRight: "25px" }} />
            Roll of Honor
          </h1>
          <div className="panel" style={{ borderRadius: "10px 10px 0px 0px" }}>
            <Table striped hover responsive>
              <thead className="tableHead">
                <tr>
                  <th>Term</th>
                  <th>Theme</th>
                  <th>1st Winner</th>
                  <th>2nd Winner</th>
                  <th>3rd Winner</th>
                  <th>4th Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2022</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2021</td>
                  <td>-</td>
                  <td>Sudanese Association of Dental Students (SADS) 🇸🇩</td>
                  <td>Lebanese Association of Dental Students 🇱🇧</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2020</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenDentistry;
