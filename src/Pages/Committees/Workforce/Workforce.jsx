import React from "react";
import "./Workforce.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AuthContext } from "../../../Components/Context/AuthContext";
import { useContext } from "react";

import Arrow from "../../../Assets/About/Arrow.svg";
import LoginModal from "../../../Components/LoginModal";

import { useState } from "react";
import { Button } from "react-bootstrap";

const Workforce = () => {
  const Auth = useContext(AuthContext);
  const [loginShow, setLoginShow] = useState(false);

  return (
    <div className="workforce-page">
      {loginShow && (
        <LoginModal
          show={loginShow}
          description="Please Login to access this"
        />
      )}
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">IADS Workforce</h1>
          <div className="flex-horiz hire-btn">
            <AnchorLink
              className="btn"
              style={{
                marginTop: "30px",
                color: "white",
                textAlign: "center",
              }}
              href="#hiring"
            >
              We Are Hiring!
            </AnchorLink>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="abt container">
          <h1 className="title-2nd" style={{ marginRight: "75px" }}>
            About Workforce
          </h1>
          <img className="arw" src={Arrow} style={{ marginRight: "85px" }} />
          <p className="desc" style={{ color: "white" }}>
            IADS Workforce is the working personnel of IADS, composed of
            appointed task force teams working under the auspices of the elected
            leadership members for a 12 month office term, on a basis of
            Executive Order.. All WF posts are honorarily occupied, which means
            that they are not financially payable. Each task force has its own
            mission, strategic objectives, assigned tasks and privileged
            functions. Two categories of task forces are available to
            distinguish the broad scope of their work field and priorities.
          </p>
        </div>
      </div>

      <div className="glance">
        <h1 className="title-2nd" style={{ color: "#1D015C" }}>
          Workforce
        </h1>
        <h1 className="title-1st" style={{ color: "#1884D8" }}>
          At a glance
        </h1>
        <div className="wlist flex-horiz">
          <div className="wcard">
            <h2 className="title">Presidential Office</h2>
            <p className="position">Chaired by the President</p>
          </div>
          <div className="wcard">
            <h2 className="title">Internal Affairs Bureau</h2>
            <p className="position">
              Chaired by the Vice President of Internal Affairs
            </p>
          </div>
          <div className="wcard">
            <h2 className="title">Editorial Board</h2>
            <p className="position">
              Chaired by the Vice President of Public Relations
            </p>
          </div>
          <div className="wcard">
            <h2 className="title">SCORE</h2>
            <p className="position">
              Chaired by the Vice President of Science & Research
            </p>
          </div>
          <div className="wcard">
            <h2 className="title">Exchange Council</h2>
            <p className="position">
              Chaired by the Vice President of Exchanges
            </p>
          </div>
          <div className="wcard">
            <h2 className="title">Financial Office</h2>
            <p className="position">
              Chaired by the Vice President of Finances
            </p>
          </div>
          <div className="wcard">
            <h2 className="title">Training Committee</h2>
            <p className="position">Chaired by the Training Chairperson</p>
          </div>
          <div className="wcard">
            <h2 className="title">Public Health Committee</h2>
            <p className="position">Chaired by the Public Health Chairperson</p>
          </div>
          <div className="wcard">
            <h2 className="title">Voluntary Work Abroad Committee</h2>
            <p className="position">
              Chaired by the Vice President of Exchanges
            </p>
          </div>
          <div className="wcard">
            <h2 className="title">Regional Associate of Africa</h2>
            <p className="position">
              Associate of the Regional Ambassador of Africa
            </p>
          </div>
          <div className="wcard">
            <h2 className="title">Regional Associate of Asia Pacific</h2>
            <p className="position">
              Associate of the Regional Ambassador of Asia Pacific
            </p>
          </div>
          <div className="wcard">
            <h2 className="title">Regional Associate of Europe</h2>
            <p className="position">
              Associate of the Regional Ambassador of Europe
            </p>
          </div>
          <div className="wcard">
            <h2 className="title">Regional Associate of Middle East</h2>
            <p className="position">
              Associate of the Regional Ambassador of Middle East
            </p>
          </div>
        </div>
      </div>

      <div className="stats">
        <h1 className="title-2nd" style={{ color: "#1D015C" }}>
          Statistics
        </h1>

        <h1
          className="title-1st"
          style={{ marginTop: "150px", marginBottom: "200px" }}
        >
          Coming Soon!
        </h1>
      </div>

      <div className="hiring" id="hiring">
        <div className="title-2nd">We Are Hiring!</div>
        <p className="desc" style={{ color: "white", marginTop: "22px" }}>
          Are you interested in working for a global NGO and boosting your
          leadership and interpersonal skills?{" "}
        </p>
        {/* {!Auth.validation && (
          <Button
            className="btn"
            // href={data.link}
            // style={{ color: white }}
            onClick={() => setLoginShow(!loginShow)}
          >
            Submit App
          </Button>
        )} */}

        {Auth.validation ? (
          <a
            href="/committees/workforceform"
            className="btn"
            style={{ marginTop: "25px" }}
          >
            Submit your Application
          </a>
        ) : (
          <Button
            onClick={() => setLoginShow(!loginShow)}
            // href=""
            className="dis-btn"
            style={{ marginTop: "25px" }}
          >
            Submit your Application
          </Button>
        )}

        <div className="container" style={{ paddingTop: "72px", width: "85%" }}>
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <p className="desc-hiring">
                <ul
                  style={{ listStyleType: "none", padding: "0", margin: "0" }}
                >
                  <li>
                    <span style={{ fontFamily: "Poppins bold" }}>
                      I. Sectoral Task Forces
                    </span>
                  </li>
                  <li>
                    I.I. Internal Affairs Bureau; chaired by the Vice President
                    of Internal Affairs
                  </li>
                  <li>
                    I.II. Editorial Board; chaired by the Vice President of
                    Public Relations
                  </li>
                  <li>
                    I.III. Scientific and Research Board; chaired by the Vice
                    President of Science and Research
                  </li>
                  <li>
                    I.IV. Exchange Board; chaired by the Vice President of
                    Exchanges
                  </li>
                  <li>
                    I.V. Training Committee; chaired by the Training Committee
                    Chairperson
                  </li>
                  <li>
                    I.VI. Prophylaxis Committee; chaired by the Prophylaxis
                    Committee Chairperson
                  </li>
                  <li>
                    I.VII. Voluntary Committee; chaired by the Voluntary
                    Committee Chairperson
                  </li>
                  <br />
                  <li>
                    <span style={{ fontFamily: "Poppins bold" }}>
                      II. Individual Positions
                    </span>
                  </li>
                  <li>
                    II.I. Coordinator of International Cooperation under direct
                    supervision of the President
                  </li>
                  <li>
                    II.II. Associate Vice President of Finances under direct
                    supervision of the VP of Finances
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-sm-12 col-lg-6">
              <p className="desc-hiring">
                <ul
                  style={{ listStyleType: "none", padding: "0", margin: "0" }}
                >
                  <li>
                    <span style={{ fontFamily: "Poppins bold" }}>
                      III. Regional Associates
                    </span>
                  </li>
                  <li>
                    III.I. Regional Associate of Africa (RAAF); Assist the
                    Regional Ambassador of Africa
                  </li>
                  <li>
                    III. I. I. Junior Regional Associate of Africa (JRAAF):
                    Intern to Regional Ambassador and Associate
                  </li>
                  <li>
                    III.II. Regional Associate of the Americas (RAAM); Assist
                    the Regional Ambassador of Americas
                  </li>
                  <li>
                    III. II.I Junior Regional Associate of Americas (JRAAM):
                    Intern to Regional Ambassador and Associate
                  </li>
                  <li>
                    III.III. Regional Associate of Asia Pacific (RAAP); Assist
                    the Regional Ambassador of Asia Pacific
                  </li>
                  <li>
                    III. III.I Junior Regional Associate of Asia Pacific
                    (JRAAP): Intern to Regional Ambassador and Associate
                  </li>
                  <li>
                    III.IV. Regional Associate of Europe (RAEU); Assist the
                    Regional Ambassador of Europe
                  </li>
                  <li>
                    III.IV.I Junior Regional Associate of Europe (JRAEU): Intern
                    to Regional Ambassador and Associate
                  </li>
                  <li>
                    III.V. Regional Associate of Middle East (RAME); Assist the
                    Regional Ambassador of Middle East
                  </li>
                  <li>
                    III.V.I Junior Regional Associate of Middle East (JRAME):
                    Intern to Regional Ambassador and Associate
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="instructions">
        <h1
          className="title-2nd"
          style={{ color: "#1D015C", marginTop: "80px", marginBottom: "94px" }}
        >
          Important Instructions
        </h1>
        <div className="container" style={{ width: "70%", margin: "none" }}>
          <p className="desc" style={{ textAlign: "left" }}>
            <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
              <li>
                01. Please read this manual,{" "}
                <a
                  href="https://goo.gl/inF3Mi"
                  style={{ fontFamily: "Poppins bold", textDecoration: "none" }}
                >
                  Regulations of IADS Workforce
                </a>
                , which is produced by the Executive Committee 2020/2021 and
                reviewed by the Executive Committee 2021/22 to define the
                strategic and administrative framework of the emerging task
                forces of IADS.
              </li>
              <br />
              <li>
                02. The application form below should be filled-in precisely, in
                case of any discrepancies found the application might be denied.
              </li>
              <br />
              <li>
                03.{" "}
                <span style={{ fontFamily: "Poppins bold" }}>
                  Application Period:
                </span>{" "}
                October 7-22th, 2022 – 23:59 GMT+0
              </li>
              <br />
              <li>
                04.{" "}
                <span style={{ fontFamily: "Poppins bold" }}>
                  Entrance Interviews;
                </span>{" "}
                as an integral part of the admission process, will take place
                according to an agreed schedule by the applicants and
                interviewers. The interviewing period will take place from
                October 24th - November 4th, 2022
              </li>
              <br />
              <li>
                05. After passing entrance interviews, accepted applicants will
                sign{" "}
                <span style={{ fontFamily: "Poppins bold" }}>
                  employment contracts
                </span>{" "}
                with IADS which can be used as official documents in front of
                concerned organisations, institutions and sponsors proving the
                relationship of the student and IADS.
              </li>
              <br />
              <li>
                06. By{" "}
                <span style={{ fontFamily: "Poppins bold" }}>
                  November 15th
                </span>
                , the newly recruited positions will be appointed and officially
                announced through IADS social platforms.
              </li>
              <br />
              <li>
                If you have any further inquiries or notes please don’t hesitate
                to contact us via:{" "}
                <a
                  href="mailto:vpia@iads-web.org"
                  style={{ fontFamily: "Poppins bold", textDecoration: "none" }}
                >
                  vpia@iads-web.org
                </a>
              </li>
              <br />
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workforce;
