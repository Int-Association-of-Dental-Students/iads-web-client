import React from "react";
import "./About.scss";
import { Chrono } from "react-chrono";
import Arrow from "../../Assets/About/Arrow.svg";

import m1 from "../../Assets/About/Mission/m1.svg";
import m2 from "../../Assets/About/Mission/m2.svg";
import m3 from "../../Assets/About/Mission/m3.svg";
import m4 from "../../Assets/About/Mission/m4.svg";
import m5 from "../../Assets/About/Mission/m5.svg";
import m6 from "../../Assets/About/Mission/m6.svg";

const About = () => {
  const items = [
    {
      title: "February 1951",
      cardTitle: "Kick-off",
      cardDetailedText:
        "The French Dental Students invited some international students to their Annual Meeting in Paris where the Danish, Dutch and Swedish representatives proposed to establish an international dental student’s organisation. This proposal was unanimously welcomed.",
    },
    {
      title: "September 1951",
      cardTitle: "First ExCo",
      cardDetailedText:
        "Representatives from Denmark, Finland, France, Germany, Holland, Norway, Sweden and the UK met in Copenhagen. A committee consisting of representatives from Denmark, Holland and the UK was formed to build the constitution of the Association. This constitution was drafted and the first Executive Committee was elected; Leslie Sorling from Sweden being the first President, with Mogens Skougaard from Denmark, Secretary and Carlo Nevejan from Holland, Treasurer. The encouragement and advice of Prof.P. O. Pedersen through his great knowledge of the affairs of the FDI, was invaluable - making him the first Honorary Life Member of IADS. ",
    },
    {
      title: "July 1952",
      cardTitle: "Constitution Established",
      cardDetailedText:
        "The IADS Council (now the General Assembly) met in Birmingham. The constitution, regulations and plans for the future were put forward by the Executive Committee and it was decided that, in the future, the Annual Session of the Council should coincide with an international dental student congress.",
    },
    {
      title: "September 1953",
      cardTitle: "First Annual Congress",
      cardDetailedText:
        "The first IADS Congress was held at the University of Marburg/Lahn in Germany; some 120 students attended and the official constitution was approved and signed at the Council meeting. The Association was officially launched.",
    },
    {
      title: "September 1954",
      cardTitle: "FDI Relationship Established",
      cardDetailedText:
        "The Dutch dental students organised the second IADS Congress at Groningen and Utrecht. At this meeting the Council worked on formulating future policy and activity plans. Cooperation with other international organisations, especially the World Health Organisation (WHO) and the Federation Dentaire Internationale (FDI), were considered and consequently the close relationship between the F.D.I. and the IADS was established.",
    },
    {
      title: "1955",
      cardTitle: "And from then on",
      cardDetailedText:
        "The 1955 Annual Congress was held in Malmo and this was followed by those in Newcastle, Oslo, Ghent, Berlin, Stockholm, London, Dusseldorf, Amsterdam and London again in 1965. Only in 1963, due to late cancellation, was there no Congress. During this time the membership increased to fifteen countries and the Association had become well established in the dental world. The Annual Congress had become a most enjoyable, although mainly social, gathering; it provided almost the only communication between members as the finances of the Association precluded circularised publications. However, the exchange program had become established and this international exchange of dental students has continued to be a most worthwhile and successful project and one of which the IADS can be justly proud.",
    },
    {
      title: "September 1966",
      cardTitle: "Stepping outside Europe",
      cardDetailedText:
        "An IADS Congress was held outside Europe for the first time in its history; in Jerusalem. Incidentally, this meeting was my first introduction to the IADS and was the first of the ten Congresses which it has been my privilege to attend said Peter Swiss (IADS Legendary Alumni).This Congress also marked the transition of the IADS from that of a young association to a mature one tackling present problems and planning for a successful future. A recruitment drive in the Middle East, Eastern Europe and North America was therefore initiated and a newsletter with commercial sponsorship was planned. The increasing volume and complexity of business to be considered by the General Assembly made it essential that this be conducted in a well-ordered and democratic manner, presided over by an independent Chairperson.",
    },
    {
      title: "August 1967",
      cardTitle: "FDI Liaison Officer",
      cardDetailedText:
        "Dr. Gerald Leatherman, the Executive Director of the FDI, in view of the increasing importance of the IADS, decided that a permanent liaison officer should be appointed,  job would be to keep the FDI informed of IADS matters and to assist the IADS when requested by its Executive Committee, thus contributing some degree of continuity.",
    },
    {
      title: "August 1969",
      cardTitle: "North America Joined",
      cardDetailedText:
        "By 1969, North America was showing interest in the Association and, at the Congress arranged jointly between Copenhagen and Malmo, both the United States of America and Canada attended as observers for the first time. The New York Dental School applied for corresponding membership and thus the door to North America was at last opening.",
    },
    {
      title: "September 1969",
      cardTitle: "Regional Connections",
      cardDetailedText:
        "By this time, also, another international dental student association was being established, albeit a regional one. The Asian Pacific Dental Students Association was formed in Southeastern Asia and liaison with this Association was established.",
    },
    {
      title: "September 1970",
      cardTitle: "Policies in Action",
      cardDetailedText:
        "Berlin was host to the IADS for the second time in 1970 and at this Congress, Mr. Mark-John Vella-Bardon urged that discussion groups should replace formal lectures as the major content of the Scientific Program. The success of these groups was noticed by the FDI. As a result, in 1973, the FDI Commissions on Dental Education, Dental Practice and Public Dental Health each invited the IADS to appoint a representative to participate in their Commission meetings at the FDI Congresses.",
    },
    {
      title: "September 1971",
      cardTitle: "ASDA joins IADS",
      cardDetailedText:
        "The congress was held in Malta under the Chairpersonship of Mark-John Vella-Bardon and at this meeting the two North American Coordinators, Jeffrey Leeds and Barry Grayson, presented the application for membership of the newly-formed American Student Dental Association (ASDA), as well as more Canadian Schools, Mexico and Nicaragua.In addition, Egypt, Greece and Italy were elected members at this meeting.",
    },
    {
      title: "September 1972 ",
      cardTitle: "Published Newsletter",
      cardDetailedText:
        "Australia joined as a corresponding member at the Congress in England. More importantly, Quintessence International took over the publication and distribution of the newsletter. This brought an immediate improvement to IADS finances; allowing for more activity organising opportunities.",
    },
    {
      title: "September 1974",
      cardTitle: "The Restructuring",
      cardDetailedText:
        "The congress was held in Holland where the delegates were informed of the offer of the Medical Protection Society, a professional insurance organisation in London, to provide a central address and some secretarial assistance to the IADS. A restructuring was set in motion.",
    },
    {
      title: "September 1979",
      cardTitle: "Importance of Sponsorship",
      cardDetailedText:
        "The Congress of 1979 was set in the beautiful city of Freiburg, West Germany. It was however a conference beset by management problems due partly to failure of the CoCo, to appreciate the importance of sponsorship in a congress of such size. Successive CoCos have realized the necessity of gaining help from commercial sources a daunting and difficult task, but one which has been tackled, is some cases, by hard-nosed business acumen. One of the main areas of difficulty, about which I felt strongly, was that of a constitution which seemed to slow down proceedings and often caused the General Assembly to come to a virtual standstill over a procedural point. Valuable debating time was often lost.",
    },
    // {
    //   title: "",
    //   cardTitle: "",
    //   cardDetailedText: "",
    // },
  ];

  return (
    <div className="about-page">
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">About Us</h1>
        </div>
      </div>
      <div className="vision">
        <div className="viz container">
          <h1 className="title-2nd" style={{ marginRight: "75px" }}>
            Our Vision
          </h1>
          <img className="arw" src={Arrow} style={{ marginRight: "85px" }} />
          <p className="desc" style={{ color: "white" }}>
            Young dental students from all over the world united under the
            auspices of the IADS to gain knowledge, skills and values that are
            necessary to become highly qualified professionals and local,
            national or international leaders in dentistry and public health
            care.{" "}
          </p>
        </div>
      </div>

      <div className="mission" style={{ paddingTop: "60px" }}>
        <h1 className="title" style={{ marginBottom: "100px" }}>
          Our Mission
        </h1>
        <div className="container mission-items">
          <div className="item">
            <img src={m1} />
            <p className="desc">
              To promote international contact and co-operation between dental
              students and dental student organisations throughout the world.
            </p>
          </div>
          <div className="item">
            <img src={m2} />
            <p className="desc">
              To establish and encourage international programs which will
              stimulate the interest of dental students in the advancement of
              the science and art of dentistry.
            </p>
          </div>
          <div className="item">
            <img src={m3} />
            <p className="desc">
              Independence, implying the non-submission of the Association to
              political parties, State or religious organisations, or any other
              organisations.
            </p>
          </div>
          <div className="item">
            <img src={m4} />
            <p className="desc">
              Democracy, implying the respect for majority decisions, taken in
              accordance with the Constitution.
            </p>
          </div>
          <div className="item">
            <img src={m5} />
            <p className="desc">To improve community dentistry globally.</p>
          </div>
          <div className="item">
            <img src={m6} />
            <p className="desc">
              To promote interprofessional and interdisciplinary collaboration
              in healthcare.
            </p>
          </div>
        </div>
      </div>

      <div className="constBylaws container">
        <div className="const">
          <h1 className="title" style={{ marginBottom: "20px" }}>
            Constitutions
          </h1>
          <a
            href="https://drive.google.com/file/d/1q97JsZcx5XwV-1C7rCGt3_no2TLA74ZN/view"
            className="read-btn"
          >
            Read Now
          </a>
        </div>
        <div className="bylaws">
          <div className="title" style={{ marginBottom: "20px" }}>
            ByLaws
          </div>
          <a
            href="https://docs.google.com/document/d/1AHfN2j-ldsQzGFoXJpDrvBg4wCkxvrZLeZ7-pxPXuyI/edit?usp=sharing"
            className="read-btn"
          >
            Read Now
          </a>
        </div>
      </div>

      <div className="container story">
        <h1 className="title">IADS Story</h1>
        <p
          className="desc"
          style={{ marginTop: "30px", marginBottom: "65px", width: "80%" }}
        >
          From Paris to the entire globe, from as few as four executive
          committee members in 1951 to more than 200,000 member students
          worldwide today and from 6 European founding countries to around 60
          countries based in all regions of world – this is the story of
          International Association of Dental Students (IADS).
        </p>
        <div className="launch-flag">LAUNCH</div>
        <Chrono
          items={items}
          cardHeight="27.2rem"
          mode="VERTICAL_ALTERNATING"
          fontSizes={{
            cardSubtitle: "0.85rem",
            cardText: "0.8rem",
            cardTitle: "1.25rem",
            title: "1rem",
            cardDetailedText: "0.9375rem",
          }}
          disableAutoScrollOnClick={true}
        />
      </div>
    </div>
  );
};

export default About;
