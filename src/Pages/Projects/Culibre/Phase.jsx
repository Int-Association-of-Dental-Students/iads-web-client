import React, { useState, useEffect } from "react";
import "./Phase.scss";

import DecoPhase from "../../../Assets/Projects/Culibre/DecoPhase.svg";
import tl1 from "../../../Assets/Projects/Culibre/tl1.svg";
import tl2 from "../../../Assets/Projects/Culibre/tl2.svg";
import tl3 from "../../../Assets/Projects/Culibre/tl3.svg";
import tl4 from "../../../Assets/Projects/Culibre/tl4.svg";

import RA from "../../../Assets/Projects/Culibre/RA.svg";

const Phase = () => {
  const [currentPhase, setCurrentPhase] = useState(0); // Initialize with the first phase
  const [opacity, setOpacity] = useState(1);
  const phases = [
    {
      title: "Culibre",
      subtitle: "Phase I: Awareness",
      description:
        "Cultivate: This phase consists of cultivating prospect students on the principles of sustainability through DS Curriculum which will serve as a pre-read and a frame of reference.",
      tl: tl1,
      clr: "#FFF",
    },
    {
      title: "Culibre",
      subtitle: "Phase II: Deliberate",
      description:
        "Deliberate: This phase is complementary to phase one. Educated students will be eligible to compete in IADS regional summits debating topics that relate to sustainability in dentistry. This is to breed pledge signings, concept & green papers, panel discussions, & advocacy inspirations.",
      tl: tl2,
    },
    {
      title: "Culibre",
      subtitle: "Phase III Stage 1: Inspire",
      description:
        "Advancement: The first stage of phase three is a certification program for the winning teams. Fully funded scholarships will be granted to establish a training model for FDI Toolkit to make dentistry more sustainable.",
      tl: tl3,
    },
    {
      title: "Culibre",
      subtitle: "Phase III Stage 2: Inspire",
      description:
        "Advocacy: The second stage will be in a form of a competition. IADS members will compete in a social media campaign run by IADS-DS to raise awareness and drive more traffic towards DS Curriculum. This is to amplify the reach to a larger audience and keep the wheel turning.",
      tl: tl4,
    },

    // Add other phases here
  ];

  // Functions to handle navigation
  const goToNextPhase = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentPhase((prevPhase) =>
        prevPhase === phases.length - 1 ? 0 : prevPhase + 1
      );
      setOpacity(1);
    }, 500);
  };

  const goToPrevPhase = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentPhase((prevPhase) =>
        prevPhase === 0 ? phases.length - 1 : prevPhase - 1
      );
      setOpacity(1);
    }, 500);
  };

  // Function to generate styled title based on the current object's index
  const generateStyledTitle = (phaseIndex) => {
    const phase = phases[phaseIndex];
    const title = phase.title;

    switch (phaseIndex) {
      case 0:
        // Apply style to the first 2 letters
        return (
          <h1>
            <span className="styled-letter">{title[0]}</span>
            <span className="styled-letter">{title[1]}</span>
            {title.slice(2)}
          </h1>
        );
      case 1:
        // Apply style to the second 3 letters
        return (
          <h1>
            {title.slice(0, 2)}
            <span className="styled-letter">{title[2]}</span>
            <span className="styled-letter">{title[3]}</span>
            <span className="styled-letter">{title[4]}</span>
            {title.slice(5)}
          </h1>
        );
      case 2:
      case 3:
        // Apply style to the last 2 letters
        return (
          <h1>
            {title.slice(0, title.length - 2)}
            <span className="styled-letter">{title[title.length - 2]}</span>
            <span className="styled-letter">{title[title.length - 1]}</span>
          </h1>
        );
      default:
        return <h1>{title}</h1>;
    }
  };

  // Access the current phase using the currentPhase state
  const currentPhaseData = phases[currentPhase];

  return (
    <div className={`phase-section`}>
      <div className={`all-content ${opacity === 1 ? "active" : ""}`}>
        <div className={`content`}>
          <img src={DecoPhase} alt="" />
          <div className="text-content">
            {generateStyledTitle(currentPhase)}
            <h2>{currentPhaseData.subtitle}</h2>
            <p>{currentPhaseData.description}</p>
          </div>
        </div>
        <div className="right-content">
          <div className="btns">
            <button className="left" onClick={goToPrevPhase}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.97561 3.33325L5.3335 7.97537L9.97561 12.6175"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="right" onClick={goToNextPhase}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.66663 3.33325L11.3087 7.97537L6.66663 12.6175"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="tl" style={{ opacity: opacity }}>
            <img src={currentPhaseData.tl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase;
