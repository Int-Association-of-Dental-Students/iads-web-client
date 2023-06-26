import React, { useState, useEffect } from "react";
import "./Research.scss";
import Arrow from "../../../Assets/About/Arrow.svg";

import CardList from "../../../Components/Cards/CardList";
import axios from "axios";

const Research = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/articles`)
      .then((res) => {
        setArticles(res.data);
        // console.log(res.data);
      });
  }, []);
  return (
    <div className="research-page">
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">Research Platform</h1>
          <div className="flex-horiz hire-btn"></div>
        </div>
      </div>

      <div className="about">
        <div className="abt container">
          <h1 className="title-2nd" style={{ marginRight: "75px" }}>
            About research platform
          </h1>
          <img className="arw" src={Arrow} style={{ marginRight: "85px" }} />
          <p className="desc" style={{ color: "white", textAlign: "left" }}>
            Publications are an important pillar of academia as well as a key
            element of our activities. In our strive to offer dental students a
            portal to all possible aspects of the profession, the research
            platform is the perfect medium where our dental students can
            showcase their own research and have access to the library of dental
            research collected by all students of our community.
            <br />
            <br />
            All research submissions will be carefully selected and the best of
            the submissions could potentially be featured on the IADS Magazine.
          </p>
        </div>
      </div>

      <div className="guidelines">
        <h1
          className="title-1st"
          style={{ color: "#1884D8", marginBottom: "-18px" }}
        >
          Check out
        </h1>
        <h1 className="title-2nd" style={{ color: "#1D015C" }}>
          The guidelines
        </h1>
        <a
          href="https://docs.google.com/document/d/1wPTRr142CpWXvEPHUblpvl_OdFnPt18M/edit?usp=sharing&ouid=105689365096512595902&rtpof=true&sd=true"
          className="bttn"
          style={{
            marginTop: "40px",
            marginBottom: "40px",
            textDecoration: "none",
          }}
        >
          Read More
        </a>
      </div>

      <div className="share">
        <h1 className="title-2nd" style={{ color: "#1D015C" }}>
          Share your article <br /> with the world!
        </h1>
        <p>Coming soon!</p>
      </div>

      <div className="articles">
        <h1
          className="title-2nd"
          style={{ color: "#3E1893", marginBottom: "80px" }}
        >
          Submitted Articles
        </h1>

        <CardList
          className="card-list"
          data={articles}
          textColor="#C60E3C"
          type="articles"
        ></CardList>
      </div>
    </div>
  );
};

export default Research;
