import React from "react";
import "./MCAM.scss";

import logo from "../../../Assets/Projects/MCAM/logo.svg";
// import logo2 from "../../../Assets/Projects/MCAM/logo2.svg";
import bullet from "../../../Assets/Projects/MCAM/bullet.svg";
import bullet2 from "../../../Assets/Projects/MCAM/bullet2.svg";
import about from "../../../Assets/Projects/MCAM/about.png";
import desc1 from "../../../Assets/Projects/MCAM/desc1.png";
import desc2 from "../../../Assets/Projects/MCAM/desc2.png";

import { Table } from "react-bootstrap";

import CardList from "../../../Components/Cards/CardList";
import Reports from "./Reports";

const MCAM = () => {
  return (
    <div className="MCAM-page">
      <div className="hero">
        <div className="overlay">
          <div className="landing container">
            <div className="row">
              <div className="col icons">
                <img className="logo" src={logo} />

                <br />
              </div>
            </div>
            <div className="row hash mt-5" style={{ marginLeft: "200px" }}>
              <a
                href="https://www.instagram.com/explore/tags/mouthaware/"
                style={{ textDecoration: "none", color: "#024F93" }}
              >
                <b>#Mouth</b>Aware2022
              </a>
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
              About Mouth Cancer Action Month
            </h1>
            <p className="sec-txt" style={{ width: "80%" }}>
              Throughout November, <b>Mouth Cancer Action Month</b> (MCAM) aims
              to raise awareness of the disease in an attempt to get more mouth
              cancers diagnosed at an early stage. In collaboration with Oral
              Health Foundation, IADS contributes to the global workforce of
              MCAM by organising a social media contest for its national/local
              member organisations who hold awareness activities to celebrate
              MCAM at local scales.
            </p>
            {/* <a
              href="https://drive.google.com/file/d/1s5-mgmnLqjsf_dw4hnRk0xAbIT4V5RYr/view?usp=sharing"
              className="bttn"
              style={{ color: "black" }}
            >
              Green Dentistry Toolkit
            </a> */}
          </div>
        </div>
      </div>

      <div className="upcoming">
        <h1
          className="title-text"
          style={{ marginBottom: "38px", color: "#024F93" }}
        >
          <img src={bullet2} className="bullet" />
          Upcoming Trophy/Competition
        </h1>
        <div className="container padding">
          <p className="sec-txt" style={{ color: "black" }}>
            Coming Soon!
          </p>
          {/* <div className="row">
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
          </div> */}
        </div>
      </div>

      <div
        className="submit"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <h1 className="header-text" style={{ color: "#024F93" }}>
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
          Deadline for submission of reports: --
        </p>
      </div>

      <div className="history">
        <h1 className="title-text" style={{ marginBottom: "38px" }}>
          <img src={bullet} className="bullet" />
          History
        </h1>
        <p className="sec-txt" style={{ width: "80%", margin: "auto" }}>
          In September 2016, the newly elected Chairwoman of Prophylaxis
          Committee -Ave Pold- had proposed a new global health cause to be
          added to the dental students calendar worldwide and to be recurrently
          celebrated each November to boost the public awareness of oral
          cancers. <br />
          November 2016 was renowned as the “blue lips” month due to unexpected
          active response of students from Jordan, Italy, Sudan, Estonia and
          Poland who organized bunch of local public events to lever the public
          awareness of oral cancers aiming to get more of them early diagnosed.
          A social media contest was conducted between the participating
          organization to decide the “Best Mouthaware” of 2016 and the title
          went to Polish Association of Dental Students.
        </p>
      </div>

      <div className="furtherDesc">
        <div className="container">
          <p className="sec-txt2">
            “For several years our association and our members have been an
            important part in World Oral Health Day. This huge global campaign
            together with FDI is centered on raising public awareness about oral
            health and disease prevention. WOHD is a very noteworthy project
            that will always be a priority for the prophylaxis committee but
            definitely we have to look into the future as well. Adding MCAM to
            our list of events and campaigns was the first step.” IADS Magazine,
            February 2017 – report by Ave Pold.
          </p>
          <br />
          <br />
          <div className="flex-horiz">
            <img src={desc1} />
            <p className="sec-txt2">
              The following edition of MCAM in 2017 wasn’t less exciting and
              missionary by the help of a newly appointed prophylaxis committee,
              as more new countries and regions joined the global workforce of
              this cause like Malaysia from Asia Pacific, Tunisia from Africa
              and Israel and France from Europe. This edition was also
              characterised by having a new peer-reviewed contest category for
              the best performance of MCAM campaigns.
              <br />
              <br />
              “We hope to add a new prospective for the locally conducted MCAM
              campaigns by thoroughly reviewing the submitted reports of our
              member organisations in order to give them helpful and reasonable
            </p>
          </div>
          <br />
          <br />
          <div className="flex-horiz">
            <p className="sec-txt2" style={{ textAlign: "right" }}>
              feedback about their work which -we believe- is highly deemed to
              improve future performance.” said Khalida Badawi – Prophylaxis
              Chairwoman 2017/18
              <br />
              <br />
              <span style={{ color: "#024F93", fontFamily: "Poppins bold" }}>
                Turkish Dental Students Association
              </span>{" "}
              (TURK-DENTSIC) won the first place of the social media contest and
              was named as MOUTHAWARE 2017, while Tunisian Association of Dental
              Students (TADS) came in first place as the best performance of
              conducted MCAM activities.
            </p>
            <img src={desc2} />
          </div>
        </div>
      </div>

      <div className="finalReports">
        <div className="container">
          <h1
            className="title-text"
            style={{
              color: "#024F93",
              marginBottom: "100px",
              textAlign: "center",
            }}
          >
            <img src={bullet2} style={{ marginRight: "25px" }} />
            Final Reports Booklets
          </h1>

          <CardList className="card-list" data={Reports} textColor="#024F93" />
        </div>
      </div>

      <div className="honor">
        <div className="container">
          <h1
            className="title-text"
            style={{ color: "#024F93", marginBottom: "100px" }}
          >
            <img src={bullet2} style={{ marginRight: "25px" }} />
            Roll of Honor
          </h1>
          <div className="panel" style={{ borderRadius: "10px 10px 0px 0px" }}>
            <Table striped hover responsive>
              <thead className="tableHead">
                <tr>
                  <th>Term</th>

                  <th>1st Winner</th>
                  <th>2nd Winner</th>
                  <th>3rd Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2019</td>
                  <td>Tunisian Association of Dental Students 🇹🇳</td>
                  <td>UM6SS Smile Creators Association (USCA) 🇲🇦</td>
                  <td>
                    Polish Association of Dental Students (PTTS) 🇵🇱
                    <br />
                    Italian Association of Dental Students (AISO) 🇮🇹
                  </td>
                </tr>
                <tr>
                  <td>2018</td>
                  <td>Polish Association of Dental Students (PTTS) 🇵🇱</td>
                  <td>Tunisian Association of Dental Students 🇹🇳</td>
                  <td>Jordanian Association of dental students (JADS) 🇯🇴</td>
                </tr>
                <tr>
                  <td>2017</td>
                  <td>TDB Öğrenci Kolu’nun - TURK DENTSIC 🇹🇷</td>
                  <td>Tunisian Association of Dental Students 🇹🇳</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>Polskie Towarzystwo Studentów Stomatologii 🇵🇱</td>
                  <td>Sudanese Association of Dental Students 🇸🇩</td>
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

export default MCAM;
