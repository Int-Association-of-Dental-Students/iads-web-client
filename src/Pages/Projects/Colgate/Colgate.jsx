import React from "react";
import "./Colgate.scss";
import { Button, Accordion, Tabs, Tab, Nav } from "react-bootstrap";
import { Timeline, TimelineEvent } from "@mailtop/horizontal-timeline";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { Link } from "react-router-dom";

import logo from "../../../Assets/Projects/Colgate/Colgate_Logo.svg";
import vlogo from "../../../Assets/Projects/Colgate/vlogo.svg";
// import logo1 from "../../../Assets/Projects/Colgate/logo1.svg";
import logo2 from "../../../Assets/Projects/Colgate/logo2.svg";

import tl from "../../../Assets/Projects/Colgate/tl.svg";

import WinnerCard from "./Components/WinnerCard";

import flag1 from "../../../Assets/Projects/Colgate/Flags/finland 1.png";
import flag2 from "../../../Assets/Projects/Colgate/Flags/ger 1.png";
import flag3 from "../../../Assets/Projects/Colgate/Flags/Jp 1.png";
import flag4 from "../../../Assets/Projects/Colgate/Flags/Malaysia 1.png";
import flag5 from "../../../Assets/Projects/Colgate/Flags/port 1.png";
import flag6 from "../../../Assets/Projects/Colgate/Flags/ths 1.png";
import flag7 from "../../../Assets/Projects/Colgate/Flags/Rawanda 1.png";
import flag8 from "../../../Assets/Projects/Colgate/Flags/Paest 1.png";
import flag9 from "../../../Assets/Projects/Colgate/Flags/ukr 1.png";
import flag10 from "../../../Assets/Projects/Colgate/Flags/turk 1.png";
import flag11 from "../../../Assets/Projects/Colgate/Flags/Guatemala 1.png";
import flag12 from "../../../Assets/Projects/Colgate/Flags/ind 1.png";
import flag13 from "../../../Assets/Projects/Colgate/Flags/image 1.png";
import flag14 from "../../../Assets/Projects/Colgate/Flags/egpt 1.png";
import flag15 from "../../../Assets/Projects/Colgate/Flags/Ellipse.png";
import flag16 from "../../../Assets/Projects/Colgate/Flags/romania 1.png";

import plus from "../../../Assets/Projects/Colgate/plus.svg";

import huth from "../../../Assets/Projects/Colgate/huth.png";
import lamis from "../../../Assets/Projects/Colgate/Lamis.png";
import silvi from "../../../Assets/Projects/Colgate/silvi.png";
import konst from "../../../Assets/Projects/Colgate/konst.png";
import ouiza from "../../../Assets/Projects/Colgate/Ouiza.png";
import TeamCard from "./Components/TeamCard";
import Circle from "./Components/Circle";

function Colgate() {
  return (
    <div className="colgate-page">
      <style>
        {`
          .navbar {background: transparent;}`}
      </style>
      <div className="hero">
        <div className="overlay">
          <div className="landing container">
            <div className="row icons">
              <div className="col">
                {/* <img className="logo1" src={logo1} /> */}
                <img className="logo2" src={logo2} />
                <img className="vlogo" src={vlogo} />
                <img
                  className="logo"
                  src={logo}
                  style={{ marginTop: "50px" }}
                />

                <div className="row mt-5">
                  <div className="col offset-1">
                    <p className="sec-txt">INTERNATIONAL</p>
                  </div>
                </div>
                <div className="row">
                  <div className="header-txt col offset-1">
                    <h2>BRIGHT SMILES</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="header-txt col offset-1">
                    <h2>BRIGHT FUTURES®</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="header-txt col offset-1 mb-5">
                    <h2>Contest</h2>
                  </div>
                </div>

                <div className="row">
                  <AnchorLink
                    className="btn col-1 offset-1"
                    href="#submit"
                    offset="100"
                  >
                    APPLY HERE
                  </AnchorLink>
                  <Button
                    href="https://www.colgate.com/en-us/oral-health-education/our-commitment"
                    className="btn2 col-1"
                    style={{ marginLeft: "30px" }}
                  >
                    WHAT IS BSBF?
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section container-fluid">
        <h1 className="about-title title-text">ABOUT THE PROJECT</h1>
        <p className="row about-details sec-txt">
          The International BSBF Contest (iBSBF+) is a challenge-based framework
          which aims to accelerate the progress of Colgate Bright Smiles, Bright
          Futures® initiative. By enabling IADS members to produce their
          innovative ideas, this project will emanate Colgate's mission to
          connect underserved communities to oral health education, free dental
          screenings and treatment referrals. <br /> The primary objective of
          this project will be to scout for visionary ideas generated by IADS
          network in 66 countries located in 5 regions globally. <br /> IADS
          will assemble 10 international teams, provide complete website and
          social media publicity and creative graphic designing. IADS will work
          with Colgate during the screening, team selection, hashtag campaign,
          follow-ups, evaluation process, results and awards stages.
        </p>
      </div>
      <div className="get2know-section">
        <h1 className="title-text">GET TO KNOW BSBF®</h1>
        <div className="videowrapper">
          <iframe
            width="560"
            height="600"
            src="https://www.youtube.com/embed/7-TZCUGeqQY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="prizes-section">
        <h1 className="title-text">PRIZES TO WIN</h1>
        <p className="description">Big cash prizes to win and more!</p>
        <div className="big-winner">
          <WinnerCard place="1st" price="$5,000"></WinnerCard>
        </div>
        <div className="secondary-winners">
          <WinnerCard place={`2nd`} price="$3,500"></WinnerCard>
          <WinnerCard place="3rd" price="$2,500"></WinnerCard>
          <WinnerCard place="4th" price="$1,500"></WinnerCard>
          <WinnerCard place="5th" price="$1,000"></WinnerCard>
        </div>
        <p className="description remaining-teams">
          &gt; Last 5 Finalist Teams:{" "}
          <span style={{ color: "white" }}>$700</span>
        </p>
      </div>
      <div className="project-section">
        <div className="tabs">
          {/* <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eval-criteria">EVALUATION CRITERIA</Nav.Link>
            </Nav.Item>
          </Nav> */}
          <Tabs
            defaultActiveKey="project-timeline"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="project-timeline" title="PROJECT TIMELINE">
              <div className="container-fluid p-timeline">
                <img src={tl} />
              </div>
            </Tab>
            <Tab eventKey="eval-criteria" title="EVALUATION CRITERIA">
              <div className="container-fluid criteria">
                <div className="row details">
                  <div className="PR col-lg-6 col-sm-12">
                    <h5 className="PB">
                      Projects will be evaluated in two phases according to 3
                      major criteria:
                    </h5>
                    <ul>
                      <li>Originality</li>
                      <li>Project Maturity</li>
                      <li>Impact</li>
                    </ul>
                    <br />
                    <p>
                      Each criterion will be assigned a score from 1-5; 1 being
                      the lowest and 5 the highest score, by each juror.
                    </p>
                    <br />
                    <h5>Other considerations include:</h5>
                    <ul>
                      <li>
                        A valid application through an active IADS association
                      </li>
                      <li>Skilled project team members</li>
                      <li>A well structured proposal</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h5>IADS People's Choice Contest:</h5>
                    <p>
                      Full National Member votes will have a score value of 2
                      and Full Local Member votes will have a score value of 1.
                      Scoring according to attained likes on social media will
                      be as follows:
                    </p>
                    <div
                      className="likeslist"
                      style={{ display: "grid", gridAutoFlow: "column" }}
                    >
                      <ul style={{ listStyleType: "none" }}>
                        <li>20-30 likes = 1 point</li>
                        <li>30-50 likes = 2 points</li>
                        <li>50-150 likes = 3 points</li>
                        <li>150 -450 likes = 4 points</li>
                        <li>450 - 550 likes = 5 points</li>
                      </ul>
                      <ul style={{ listStyleType: "none" }}>
                        <li>550 - 750 = 6 points</li>
                        <li>750 - 950 = 7 points</li>
                        <li>950 - 2K = 8 points</li>
                        <li>2K - 2.5K = 9 points</li>
                        <li>2.5K - 3.5K = 10 points</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      <div className="submit-section" id="submit">
        <h1 className="title-text">SUBMIT YOUR IDEA</h1>
        <p>
          Does your country have a unique idea that has the potential to impact
          future smiles?
        </p>
        <a href="/projects/colgate/registration">
          <Button className="submit-button" style={{ marginBottom: "60px" }}>
            Submit Here
          </Button>
        </a>
        <div className="container flags">
          <div className="flags-row">
            <Circle flag={flag1}></Circle>
            <Circle flag={flag2}></Circle>
            <Circle flag={flag3}></Circle>
            <Circle flag={flag4}></Circle>
            <Circle flag={flag5}></Circle>
            <Circle flag={flag6}></Circle>
          </div>
          <div className="flags-row">
            <Circle flag={flag7}></Circle>
            <Circle flag={flag8}></Circle>
            <a href="/projects/colgate/registration" className="submit-circle">
              <img className="plus" src={plus} />
            </a>
            <Circle flag={flag9}></Circle>
            <Circle flag={flag10}></Circle>
          </div>
          <div className="flags-row">
            <Circle flag={flag11}></Circle>
            <Circle flag={flag12}></Circle>
            <Circle flag={flag13}></Circle>
            <Circle flag={flag14}></Circle>
            <Circle flag={flag15}></Circle>
            <Circle flag={flag16}></Circle>
          </div>
        </div>
      </div>

      <div className="meet-team-section">
        <h1 className="title-text">MEET OUR TEAM</h1>
        <div className="cards">
          <TeamCard
            src={huth}
            name="Dr. Huthaifa Abdul Qader"
            role="Director"
          ></TeamCard>
          <div className="horiz">
            <TeamCard
              src={lamis}
              name="Dr. Lamis Elsheikh"
              role="Logistics"
            ></TeamCard>
            <TeamCard
              src={silvi}
              name="Dr. Silvi Domnori"
              role="Editorial"
            ></TeamCard>
            <TeamCard
              src={konst}
              name="Konstantin Schrader"
              role="Finances"
            ></TeamCard>
            <TeamCard
              src={ouiza}
              name="Dr. Ouiza Belkadi"
              role="Designer"
            ></TeamCard>
          </div>
        </div>
      </div>

      <div className="part-countries">
        <h1 className="title-text">Participating Countries</h1>
        <br />
        <p className="sec-txt" style={{ fontSize: "50px" }}>
          Coming soon
        </p>
      </div>

      <div className="FAQS container-fluid">
        <h1 className="title-text">FAQS</h1>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="PB">
              Is there a limit of participating countries per region?
            </Accordion.Header>
            <Accordion.Body className="PR">
              All countries holding an active full country membership in IADS,
              from all regions are invited to participate.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="PB">
              How many teams will there be?
            </Accordion.Header>
            <Accordion.Body className="PR">
              For the competition there will be a selection of 20 teams from all
              applicants. These 20 teams will compete amongst each-other for the
              prize.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="PB">
              I have personal membership in IADS. Can I participate?
            </Accordion.Header>
            <Accordion.Body className="PR">
              Unfortunately, not. Considering the rewarding system is based per
              national association, participation can only be through the
              respective national association.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="PB">
              How do I know if my country has an active membership?
            </Accordion.Header>
            <Accordion.Body className="PR">
              In order to get to know the status of your association, you can
              contact contact the VP of Internal Affairs of IADS at
              vpia@iads-web.org.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="PB">
              I have recently graduated from dental school. Can I still
              participate?
            </Accordion.Header>
            <Accordion.Body className="PR">
              Yes, you can be part of the project teams as long as it has been
              no more than 2 years after your graduation date.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="PB">
              Does the project’s focus have to be dentistry?
            </Accordion.Header>
            <Accordion.Body className="PR">
              The main aim of the project has to be bringing an innovative
              solution to any oral health related issue; however the way of
              implementation can be through any other field, such as technology,
              nutrition, public health, etc.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="PB">
              Will we present the proposal in person or online?
            </Accordion.Header>
            <Accordion.Body className="PR">
              The presentation of proposals will be done online.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="PB">
              What happens with the winning ideas after the competition?
            </Accordion.Header>
            <Accordion.Body className="PR">
              All the winning ideas will be rewarded and additionally Colgate
              will potentially pick any of the winning ideas to fund and aid
              implementation for the intended community.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header className="PB">
              Do I still get to keep the copyright to my idea if it hasn’t been
              selected as a finalist?
            </Accordion.Header>
            <Accordion.Body className="PR">
              Yes, we put great importance to preserving all privacy and
              copyrights of the idea to the pertaining creator.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header className="PB">
              Can professors or doctors help us with the project?
            </Accordion.Header>
            <Accordion.Body className="PR">
              You may seek guidance from professors or doctors, however the idea
              should originate from a dental student or graduate of less than
              two years and such must also be the team members taking over tasks
              within the project proposal’s structure.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header className="PB">
              What are complementary package seats?
            </Accordion.Header>
            <Accordion.Body>
              In addition to the cash reward, winners shall also be rewarded
              with congress package seats to IADS’ upcoming congress.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="info-section container-fluid">
        <div className="row">
          <div className="touch col-lg-6 col-md-12 col-xs-12">
            <h1 className="title-text">GET IN TOUCH</h1>
            <p className="sec-txt" href="mailto:vpia@iads-web.org">
              vpia@iads-web.org
            </p>
            <p className="text">
              Couldn’t find the answer to your questions on the FAQs? Contact us
              for all your concerns regarding your project submission, the
              competition process and any other inquiries.
            </p>
            <a className="btn" href="mailto:vpia@iads-web.org">
              EMAIL THE VPIA
            </a>
          </div>
          <div className="touch line col">
            <h1 className="title-text">PRESS</h1>
            <p className="sec-txt" href="mailto:vppr@iads-web.org">
              vppr@iads-web.org
            </p>
            <p className="text">
              Contact our Vice President of Public Relations for any press or
              social media inquiries, concerns regarding any visuals or any
              necessary media resources.
            </p>
            <a className="btn" href="mailto:vppr@iads-web.org">
              EMAIL THE VPPR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colgate;
