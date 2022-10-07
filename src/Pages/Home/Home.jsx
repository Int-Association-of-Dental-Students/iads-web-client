import React, { useState, useContext } from "react";
import "./Home.scss";
import { Image, Button, Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import mainPic from "../../Assets/Main_photo.png";
import verticalLogo from "../../Assets/logo vertical.svg";

import CongressLogo from "../../Assets/Home/conglogo.svg";
import NewsBg from "../../Assets/Home/newsbg.png";
import calIcon from "../../Assets/Home/Icons/cal-icon.svg";

import photo1 from "../../Assets/Home/Carousel/photo1.png";
import photo2 from "../../Assets/Home/Carousel/photo2.png";
import photo3 from "../../Assets/Home/Carousel/photo3.png";
import photo4 from "../../Assets/Home/Carousel/photo4.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";

import e1 from "../../Assets/DiscoverPics/e1.svg";
import e2 from "../../Assets/DiscoverPics/e2.svg";
import e3 from "../../Assets/DiscoverPics/e3.svg";
import e4 from "../../Assets/DiscoverPics/e4.svg";
import e5 from "../../Assets/DiscoverPics/e5.svg";
import e6 from "../../Assets/DiscoverPics/e6.svg";
import CardComponent from "../../Components/Cards/CardComponent";

import s1 from "../../Assets/sponsers/s1.svg";
import s2 from "../../Assets/sponsers/s2.svg";
import s3 from "../../Assets/sponsers/s3.svg";
import s4 from "../../Assets/sponsers/s4.svg";
import s5 from "../../Assets/sponsers/s5.svg";

import end from "../../Assets/endorser.svg";
import AddNewModal from "../../Components/Cards/AddNewModal";

import { AuthContext } from "../../Components/Context/AuthContext";

function DiscoverMoreCard(props) {
  return (
    <div className="discoverMoreCard">
      <img className="discoverMoreCardImg" src={props.image} />
      <p className="discoverMoreCardTitle">{props.title}</p>
      <p className="discoverMoreCardBody">{props.body}</p>
      <a
        style={{
          color: props.color,
          backgroundColor: props.bgcolor,
          textDecoration: "none",
        }}
        className="discoverMoreCardCTA"
        href={props.link}
      >
        Learn more
      </a>
    </div>
  );
}

function Home() {
  const Auth = useContext(AuthContext);
  console.log(Auth);

  SwiperCore.use([Keyboard, Mousewheel]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <div className="homePage container-fluid">
        {/* <h1 className="title-txt" style={{ color: "blue", marginTop: "70px" }}>
          The Website is Currently Under Development You can visit the current
          projects in the projects tab
        </h1>
        <div
          className="links"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Button
            style={{ marginBottom: "50px" }}
            href="https://congress.iads-web.com"
          >
            View Our Current Congress
          </Button>
          <Button style={{ marginBottom: "50px" }} href="/projects/colgate">
            Colgate BSBF Project
          </Button>
        </div> */}

        {/* <div className="dev"> */}
        <div className="home-main">
          <div className="titles">
            <Carousel className="carousel" fade interval={2000}>
              <Carousel.Item>
                <img className="d-block w-100" src={photo1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={photo2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={photo3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={photo4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>

            <div className="homeOverlay">
              <h1 className="negative-margin">
                International <br /> Association of <br /> Dental Students
              </h1>
              <p className="home-txt scale-up-center">
                The International Association of Dental Students (IADS) was
                founded in 1951 in Copenhagen 🇩🇰 in order to serve the
                educational needs of dental students throughout the world.
                Representing the interests of more than 200,000 dental students
                in around 60 countries worldwide and having its central office
                at the FDI World Dental Federation headquarters in Geneva 🇨🇭 the
                association strives for educational and scientific excellence
                throughout the international projects and initiatives it
                manages.
              </p>

              <div className="homeOverlayCTAS">
                <p className="CTA1">Join us</p>

                <p className="CTA2">Learn more</p>
              </div>
            </div>
          </div>
          <div className="logo">
            <img className="vlogo" src={verticalLogo} />
          </div>
        </div>
        <div className="container-fluid congress">
          <img className="congLogo" src={CongressLogo} />

          <div className="congText">
            <div className="congTitles">
              <p className="congTitles1">Upcoming</p>
              <p className="congTitles2">Meeting</p>
            </div>

            <p className="congTextBody">
              Discover the latest trends in AI and a wide variety of topics and
              hands-on courses in dentistry while embarking on a fun and all-new
              experience in the beautiful and largest country in Central Asia,
              Kazakhstan in our IADS next 69th Annual Congress in August 2022.
            </p>

            <a
              href="https://congress.iads-web.com/"
              target={"_blank"}
              className="congCTA"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="discoverMore container">
          <div className="homePageTitles1">
            <p className="homePageTitles11">DISCOVER</p>
            <p className="homePageTitles12">More</p>
          </div>

          <Swiper
            style={{
              paddingLeft: "60px",
              paddingRight: "60px",
              paddingBottom: "70px",
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // mousewheel={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper"
            breakpoints={{
              // when window width is >= 640px
              1200: {
                spaceBetween: 100,
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              0: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <DiscoverMoreCard
                color="white"
                bgcolor="#3E1893"
                title="Clinical Exchange"
                body="International Exchange bridges the gap between different countries and allow students to experience a brand new environments and learn various skills. Throughout the whole year, we offer our members opportunities to travel abroad and experience dentistry with a student-friendly budget."
                image={e1}
                link="/committees/exchange"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DiscoverMoreCard
                color="white"
                bgcolor="#264CA4"
                title="Soft skills training"
                body="The Training Committee aims to build the necessary skills for future healthcare workers through a peer-reviewed qualification system for graduating Soft Skills and Human Rights trainers who can conduct a wide scope of training sessions in essential topics like Leadership, Capacity Building, Project Management, Fundraising etc.."
                image={e2}
                link="/committees/training"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DiscoverMoreCard
                color="white"
                bgcolor="#1884D8"
                title="Dental Courses"
                body="IADS’s SCORE committee provides a wide variety of dental clinical and hands-on courses and experiences for IADS members  worldwide and bridges the gap between students and the knowledge and skills necessary for our careers."
                image={e3}
                link="/committees/SCORE"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DiscoverMoreCard
                color="#1D015C"
                bgcolor="#55C9F3"
                title="Voluntary Programs"
                body="Voluntary Committee is concerned with creating opportunities for dental students to contribute their time and skills in order to help underprivileged communities in remote areas of the planet who otherwise could not access or afford oral health care."
                image={e4}
                link="/committees/voluntary"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DiscoverMoreCard
                color="white"
                bgcolor="#F5010B"
                title="iBSBF Project"
                body="By enabling IADS members to produce and execute their innovative ideas, the international BSBF Contest will emanate Colgate's mission to connect underserved communities to oral health education, free dental screenings and treatment referrals. "
                image={e5}
                link="/projects/colgate"
              />
            </SwiperSlide>
            <SwiperSlide>
              <DiscoverMoreCard
                color="white"
                bgcolor="#F5010B"
                title="Zhermack Webinars"
                body="Expand your knowledge and skills with a variety of webinars on different topics such as Prosthodontology, Periodontology, Smile Esthetics and more and learn about many tips and tricks for your learning journey and daily practice all the way from Itally provided by Zhermack."
                image={e6}
                link="/projects/zhermack"
              />
            </SwiperSlide>
          </Swiper>
          <p style={{ marginTop: "30px" }}>Swipe right or left for more</p>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="container-fluid calendar"
        >
          <div className="titles">
            <img className="bg" src={NewsBg} />
            <div className="calOverlay">
              <p className="homePageTitles12">IADS</p>
              <p className="congTitles1" style={{ color: "white" }}>
                Calendar
              </p>

              <p className="desc">
                <img
                  src={calIcon}
                  alt=""
                  style={{ marginLeft: "-35px", marginRight: "10px" }}
                />
                Save the date for our <br /> upcoming events and never <br />{" "}
                miss them again!
              </p>
              <p className="desc phone">Scroll to view --></p>
            </div>
          </div>
          <div className="googleCal">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=c_8813c4csoomfmj2cmiq41lgujg%40group.calendar.google.com&ctz=Europe%2FIstanbul"
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
              bgcolor="red"
            ></iframe>
          </div>
        </div>
        <div className="iadsLatest container">
          <div className="homePageTitles1">
            <p className="homePageTitles11">iads Latest</p>
            <p className="homePageTitles12">News</p>
          </div>
          <h1
            className="title-1st"
            style={{ marginTop: "75px", marginBottom: "100px" }}
          >
            Coming Soon!
          </h1>
          {/* <Swiper
            style={{
              paddingLeft: "60px",
              paddingRight: "60px",
              paddingBottom: "70px",
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              // when window width is >= 640px
              1300: {
                spaceBetween: 50,
                slidesPerView: 3,
              },

              1200: {
                spaceBetween: 50,
                slidesPerView: 2,
              },
              // when window width is >= 768px

              0: {
                spaceBetween: 50,
                slidesPerView: 1,
              },
            }}
            // mousewheel={true}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            className="swiper"
          >
            <SwiperSlide>
              <CardComponent
                i="https://i.ibb.co/N2KnqYx/Image-Place-holder-9.png"
                t="Exchange program in Equador"
                date="20/08/2022"
                d="Arcu sit habitasse aliquet sit. Turpis duis et non nulla eget. In dui vestibulum id tempor at eget. Mi in pulvinar mi felis, scelerisque ac sapien in."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardComponent
                i="https://i.ibb.co/N2KnqYx/Image-Place-holder-9.png"
                t="Exchange program in Equador"
                date="20/08/2022"
                d="Arcu sit habitasse aliquet sit. Turpis duis et non nulla eget. In dui vestibulum id tempor at eget. Mi in pulvinar mi felis, scelerisque ac sapien in."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardComponent
                i="https://i.ibb.co/N2KnqYx/Image-Place-holder-9.png"
                t="Exchange program in Equador"
                date="20/08/2022"
                d="Arcu sit habitasse aliquet sit. Turpis duis et non nulla eget. In dui vestibulum id tempor at eget. Mi in pulvinar mi felis, scelerisque ac sapien in."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardComponent
                i="https://i.ibb.co/N2KnqYx/Image-Place-holder-9.png"
                t="Exchange program in Equador"
                date="20/08/2022"
                d="Arcu sit habitasse aliquet sit. Turpis duis et non nulla eget. In dui vestibulum id tempor at eget. Mi in pulvinar mi felis, scelerisque ac sapien in."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardComponent
                i="https://i.ibb.co/N2KnqYx/Image-Place-holder-9.png"
                t="Exchange program in Equador"
                date="20/08/2022"
                d="Arcu sit habitasse aliquet sit. Turpis duis et non nulla eget. In dui vestibulum id tempor at eget. Mi in pulvinar mi felis, scelerisque ac sapien in."
              />
            </SwiperSlide>
          </Swiper>
          <p style={{ marginTop: "30px" }}>Swipe right or left for more</p> */}
        </div>

        <div className="ourComp container">
          <div className="homePageTitles2">
            <p className="homePageTitles21">Our</p>
            <p className="homePageTitles22">PARTNERS</p>

            <p className="homePageTitles23">
              Here are our partner organizations worldwide
            </p>
          </div>

          <div className="ourCompInner">
            <div className="ourCompInner1">
              <p className="ourCompInnerTitle">ORAL HEALTH ORGANIZATIONS</p>

              <div className="line1"></div>

              <div className="ourCompInnerInner">
                <div className="ourCompInnerInner1">
                  <p className="ourCompInnerInner1Title">
                    Professional Organizations
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇨🇭 FDI World Dental Federation
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇬🇧 ACFF Alliance for a Cavity-Free Future
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇬🇧 OHF Oral Health Foundation
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇸🇪 HSF Humble Smile Foundation
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇩🇪 DTI Dental Tribune International
                  </p>
                </div>
                <div className="ourCompInnerInner1">
                  <p className="ourCompInnerInner1Title">
                    Student Organizations
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇬🇧 EDSA European Dental Students Association
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇱🇾 AfroDSA African Dental Students Association
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇯🇵 APDSA Asia Pacific Dental Students Association
                  </p>
                </div>
              </div>
            </div>

            <div className="line2"></div>

            <div className="ourCompInner1">
              <p className="ourCompInnerTitle">GENERAL HEALTH ORGANIZATIONS</p>
              <div className="line1"></div>
              <div className="ourCompInnerInner">
                <div className="ourCompInnerInner1">
                  <p className="ourCompInnerInner1Title">
                    Professional Organizations
                  </p>

                  <p
                    className="ourCompInnerInner1body"
                    style={{ width: "100%" }}
                  >
                    🇨🇭 WHO World Health Organization
                  </p>
                </div>
                <div className="ourCompInnerInner1">
                  <p className="ourCompInnerInner1Title">
                    Student Organizations
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇳🇱 IFMSA International Federation of Medical Students'
                    Associations
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇳🇱 IPSF International Pharmaceutical Students Federation
                  </p>

                  <p className="ourCompInnerInner1body">
                    🇧🇪 IVSA International Veterinary Students' Association
                  </p>
                  <p className="ourCompInnerInner1body">
                    🇳🇱 WHSA World Health Students' Alliance
                  </p>
                  <p className="ourCompInnerInner1body">
                    🇲🇾 AMSA Asian Medical Students' Association
                  </p>
                  <p className="ourCompInnerInner1body"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ourComp container">
          <div className="homePageTitles2">
            <p className="homePageTitles21">Our</p>
            <p className="homePageTitles22">Sponsers</p>

            <p className="homePageTitles23">
              Here are our partner organizations worldwide
            </p>
          </div>

          <div className="sponsers">
            <a href="https://www.fdiworlddental.org">
              <img src={s4} />
            </a>
            <a href="https://www.zhermack.com/en/">
              <img src={s1} />
            </a>

            <a href="https://www.hufriedygroup.com">
              <img src={s2} />
            </a>

            <a href="https://www.colgate.com/en-us">
              <img src={s3} />
            </a>

            <a href="https://www.zeiss.com/meditec/int/specialties/dentistry.html?utm_source=iads&utm_medium=website&utm_campaign=iads-partnerschaft&utm_term=partnership">
              <img src={s5} />
            </a>
          </div>
        </div>

        <div className="ourComp container">
          <div className="homePageTitles2">
            <p className="homePageTitles21">Our</p>
            <p className="homePageTitles22">Endorsers</p>
          </div>
          <div className="sponsers">
            <a href="https://www.thed3group.org">
              <img src={end} />
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Home;
