import React from "react";
import "./Workforce.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Arrow from "../../../Assets/About/Arrow.svg";

const Workforce = () => {
  return (
    <div className="workforce-page">
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">IADS Workforce</h1>
          <div className="flex-horiz hire-btn">
            <AnchorLink
              className="dis-btn"
              style={{ marginTop: "30px", color: "white", textAlign: "center" }}
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
        <a href="" className="submit" style={{ marginTop: "25px" }}>
          Submit your Application
        </a>

        <h1
          className="title-1st"
          style={{
            paddingBottom: "100px",
            marginTop: "100px",
            color: "#55C9F3",
          }}
        >
          Coming Soon!
        </h1>
      </div>
    </div>
  );
};

export default Workforce;
