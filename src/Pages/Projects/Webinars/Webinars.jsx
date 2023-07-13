import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Webinars.scss";
import WebinarCardList from "../../../Components/Cards/Webinar/WebinarCardList";

const Webinars = () => {
  const [webinars, setWebinars] = useState(null);

  useEffect(() => {
    axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/webinars`)
      .then((res) => {
        setWebinars(res.data);
        // console.log(res.data);
      });
  }, []);
  return (
    <div className="webinars-page">
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">Webinars & Podcasts</h1>
          <div className="flex-horiz hire-btn"></div>
        </div>
      </div>
      <div className="title-section">
        <p className="homePageTitles12">IADS</p>
        <p className="homePageTitles11">Webinars</p>
        <p className="desc">
          Increase your knowledge about a wide variety of topics covered with
          our scientific webinars in collaboration with many doctors and
          instructors of all sorts of dental specialties.
        </p>
      </div>
      <WebinarCardList
        className="webinar-card-list"
        data={webinars}
        textColor="#ED8E00"
        type="webinars"
      ></WebinarCardList>
      <div className="podcasts title-section">
        <p className="homePageTitles12">IADS</p>
        <p className="homePageTitles11">Dental times podcasts</p>
        <p className="desc">Coming Soon!</p>
      </div>
    </div>
  );
};

export default Webinars;
