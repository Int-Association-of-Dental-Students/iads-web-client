import React from "react";
import "./SCORE.scss";
import logo from "../../../Assets/Committees/SCORE/logo.svg";
import WorkforceCard from "../../../Components/Workforce/WorkforceCard";
import { Button } from "react-bootstrap";

import colgate from "../../../Assets/Committees/SCORE/projectColgate.svg";
import zhermack from "../../../Assets/Committees/SCORE/projectZhermack.svg";
import research from "../../../Assets/Committees/SCORE/research.svg";

import delegate from "../../../Assets/Committees/SCORE/irem.png";

const SCORE = () => {
  return (
    <div className="container scorePage">
      <img className="logo" src={logo} />
      <p className="description">
        The Standing Committee on Research and Education (SCORE) stresses the
        need for the students’ involvement within the dental scientific
        community by offering opportunities for the ones who desire to make a
        difference within the society.
      </p>
      <WorkforceCard
        delegateImage={delegate}
        delegateName="Irem Türkan"
        delegatePosition="Vice President of Science & Research"
      />

      <h1 className="title" style={{ marginTop: "50px", marginBottom: "55px" }}>
        Projects
      </h1>

      <div className="projectsCards">
        <div className="projectCard colgate">
          <div className="ellipse">
            <img src={colgate} />
          </div>
          <h3 className="title" style={{ marginBottom: "0px" }}>
            International Bright Smiles Bright Future (İBSBF) Contest
          </h3>
          <p className="description">
            By enabling IADS members to produce and execute their innovative
            ideas, the international BSBF Contest will emanate Colgate's mission
            to connect underserved communities to oral health education, free
            dental screenings and treatment referrals.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              href="https://iads-web.com/projects/colgate"
              className="btn"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="projectCard zhermack">
          <div className="ellipse">
            <img src={zhermack} />
          </div>
          <h3 className="title">Zhermack© Webinars</h3>
          <p className="description">
            Expand your knowledge and skills with a variety of webinars on
            different topics such as Smile Esthetics, Prosthodontology,
            Periodontology and more and discover many tips and tricks for your
            learning journey and daily practice all the way from Itally provided
            by Zhermack.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              href="https://iads-web.com/projects/zhermack"
              className="btn"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="projectCard research">
          <div className="ellipse">
            <img src={research} />
          </div>
          <h3 className="title">
            International Bright Smiles Bright Future (İBSBF) Contest
          </h3>
          <p className="description">Coming soon!</p>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              className="btn"
              style={{ backgroundColor: "#676769 !important", border: "none" }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="publications">
        <h1
          className="title"
          style={{ marginTop: "50px", marginBottom: "55px" }}
        >
          Publications
        </h1>
      </div>
    </div>
  );
};

export default SCORE;
