import React from "react";
import "./Zhermack.scss";

import logo from "../../../Assets/Projects/Zhermack/zlogo.svg";
import webinar from "../../../Assets/Projects/Zhermack/webinar.svg";
import bag from "../../../Assets/Projects/Zhermack/icons/bag.svg";
import time from "../../../Assets/Projects/Zhermack/icons/time.svg";
import profile from "../../../Assets/Projects/Zhermack/icons/profile.svg";
import bg from "../../../Assets/Projects/Zhermack/bg.png";
import zevnt from "../../../Assets/Projects/Zhermack/zevnt 1.svg";
import { Button } from "react-bootstrap";

const Zhermack = () => {
  return (
    <div className="zhermackPage">
      {/* <div className="header">
        <img src={logo} alt="Zhermack Logo" />
        <img src={webinar} alt="Webinar Logo" />
      </div> */}
      <div className="hero">
        <div className="overlay">
          <div className="container home">
            <div className="homeLeft">
              <img className="webinarImg" src={webinar} />
              <p className="main">
                Rehabilitation of
                <br />
                Teeth at the Smile
                <br />
                Zone: Concepts,
                <br />
                Techniques
                <br />
                and Workflow
              </p>
              <div className="homeLeftSub">
                <div>
                  <img className="homeLeftIcon" src={bag} /> <p>14 May 2022</p>
                </div>

                <div>
                  <img className="homeLeftIcon" src={time} />
                  <p>1-2 PM CEST</p>{" "}
                </div>
                <div>
                  <img className="homeLeftIcon" src={profile} />
                  <p>
                    <b>Speaker:</b> Dr. Mirela Feraru
                  </p>{" "}
                </div>
              </div>

              <Button
                href="https://web.cvent.com/event/8a461058-1660-4a32-b792-9e3dd19090b6/regProcessStep1"
                className="homeLeftCTA"
              >
                Register now
              </Button>
            </div>

            <div className="homeRight">
              <img className="zher-logo" src={logo} alt="Zhermack Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="info container">
        <p className="title">
          Rehabilitation of Teeth at the Smile Zone: Concepts, Techniques and
          Workflow
        </p>

        <img className="zevnt" src={zevnt} />
      </div>
      <div className="event-details container">
        <p className="red-thing">
          REGISTRATION DEADLINE: Friday, 13th May 2022 at 1 PM CEST
        </p>
        <br />
        <p className="description">
          Rehabilitation of teeth at the smile zone has always been a
          challenging task due to the need to combine structural strength of the
          restored tooth and aesthetic integration with the adjacent natural
          teeth. This challenge is even ‎more prominent when the dentition
          requires an esthetic enhancement.
        </p>
        <br />
        <p className="description">
          Several techniques and materials have been developed in the last
          decade resulting in a paradigm shift of these delicate treatments.
          Planning the end result before starting the actual treatment has
          experienced revolutionary improvements through digital concepts like
          DSD and Visagism.
        </p>
        <br />
        <p className="description">
          New ceramic materials like lithium disilicate enable superior strength
          when adhesively bonded to the tooth structure and at the same time
          provide natural esthetics. Optical enhancement for the dentist through
          magnifying loops and microscopes facilitates the meticulous intra-oral
          operative procedures to a precision level that was previously unknown.
        </p>
        <br />
        <p className="description">
          These technologies enable the operative team to achieve outstanding
          results in terms of tissue integration and healthy response of the
          surrounding tissues, structural durability of the restored teeth and
          excellent esthetic results.
        </p>
        <br />
        <p className="description">
          This lecture will detail the implementation of each of the
          above-mentioned concepts and technologies through a variety of
          clinical cases backed by current scientific knowledge from the
          literature. The audience will gain an in depth understanding of the
          parameters and techniques in use today for achieving ideal modern
          restorations at the smile zone.
        </p>

        <Button
          href="https://web.cvent.com/event/8a461058-1660-4a32-b792-9e3dd19090b6/regProcessStep1"
          variant="danger"
          className="register-btn"
        >
          REGISTER NOW
        </Button>
      </div>
    </div>
  );
};

export default Zhermack;
