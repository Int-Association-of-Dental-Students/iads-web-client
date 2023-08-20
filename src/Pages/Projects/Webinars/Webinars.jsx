import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Webinars.scss";
import WebinarCardList from "../../../Components/Cards/Webinar/WebinarCardList";
import PodcastCardList from "../../../Components/Cards/Podcast/PodcastCardList";

const Webinars = () => {
  const [webinars, setWebinars] = useState(null);
  const [podcasts, setPodcasts] = useState(null);

  useEffect(() => {
    axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/webinars`)
      .then((res) => {
        setWebinars(res.data);
        // console.log(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/podcasts`)
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
      <PodcastCardList
        className="podcast-card-list"
        data={podcasts}
        textColor="#ED8E00"
        type="webinars"
      ></PodcastCardList>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Webinars;
