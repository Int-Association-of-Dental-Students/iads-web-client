import React from "react";
import "./WOHD.scss";

import Table from "react-bootstrap/Table";

import logo1 from "../../../Assets/Projects/WOHD/logo1.svg";
import logo2 from "../../../Assets/Projects/WOHD/logo2.svg";
import mainlogo from "../../../Assets/Projects/WOHD/mainlogo.svg";
import about from "../../../Assets/Projects/WOHD/about.svg";
import bullet from "../../../Assets/Projects/WOHD/bullet.svg";
import bullet2 from "../../../Assets/Projects/WOHD/bullet2.svg";
import bullet2mini from "../../../Assets/Projects/WOHD/bullet2mini.svg";
import bullet3 from "../../../Assets/Projects/WOHD/bullet3.svg";
import bullet3mini from "../../../Assets/Projects/WOHD/bullet3mini.svg";

import pic1 from "../../../Assets/Projects/WOHD/pic1.png";
import pic2 from "../../../Assets/Projects/WOHD/pic2.png";
import CardList from "../../../Components/Cards/CardList";
import Reports from "./Reports";

const WOHD = () => {
  return (
    <div className="WOHD-page">
      <div className="hero">
        <div className="overlay">
          <div className="landing container">
            <div className="row icons">
              <div className="col">
                <img className="logo1" src={logo1} />
                <img
                  className="logo2"
                  src={logo2}
                  style={{ marginLeft: "50px" }}
                />
                <br />
                <img
                  className="logo"
                  src={mainlogo}
                  style={{ marginTop: "50px" }}
                />
              </div>
            </div>
            <div className="row hash mt-5" style={{ marginLeft: "200px" }}>
              <span>
                <a
                  href="https://www.instagram.com/explore/tags/mouthproud/"
                  style={{ textDecoration: "none", color: "#044A8F" }}
                >
                  #MouthProud
                </a>
                {"  "}
                <a
                  href="https://www.instagram.com/explore/tags/wohd22/"
                  style={{ textDecoration: "none", color: "#044A8F" }}
                >
                  #WOHD22
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="flex-horiz">
          <img src={about} />
          <div className="flex-vert">
            <h1 className="title-text" style={{ marginBottom: "38px" }}>
              <img
                src={bullet}
                className="bullet"
                style={{ marginLeft: "-100px" }}
              />
              About World Oral Health Day
            </h1>
            <p className="sec-txt">
              World Oral Health Day (WOHD) is celebrated globally every year on
              20 March. It is organized by FDI World Dental Federation and its
              official global student partner IADS International Association of
              Dental Students. As the largest global awareness campaign on oral
              health, WOHD spreads messages about good oral hygiene practices to
              adults and children alike and demonstrates the importance of
              optimal oral health in maintaining general health and well-being.
              Each year, WOHD focuses on a specific theme and reaches out to the
              public, oral health professionals, and policymakers, who all have
              a role to play in helping reduce the burden of oral disease.
            </p>
          </div>
        </div>
      </div>

      <div className="upcoming">
        <h1 className="title-text">
          <img src={bullet2} className="bullet" />
          Upcoming Trophy/Competition
        </h1>
        <p className="sec-txt d" style={{ marginLeft: "75px" }}>
          The competition is organised in two categories:
        </p>
        <div className="padding">
          <h1
            className="title-text2"
            style={{ marginTop: "40px", marginBottom: "30px" }}
          >
            <img src={bullet2mini} className="bullet" />
            Most original activity
          </h1>
          <p className="sec-txt">
            Recognizes WOHD activities that make a lasting impression because
            they are unique in promoting oral health messages among the public.
            <br />
            <br />
            <b>Award criteria:</b>
            <ul>
              <li>Number of participants</li>
              <li>
                Collaboration with external partners, e.g. schools, shopping
                centres, hospitals and government
              </li>
              <li>Innovation and originality</li>
              <li>
                Impact through dissemination of take-home messages and/or oral
                care items
              </li>
              <li>Use of the WOHD theme and materials </li>
            </ul>
          </p>
        </div>
        <div className="padding">
          <h1
            className="title-text2"
            style={{ marginTop: "40px", marginBottom: "30px" }}
          >
            <img src={bullet2mini} className="bullet" />
            Best social media campaign
          </h1>
          <p className="sec-txt">
            Recognizes campaigns that successfully put WOHD in the social
            spotlight and encourage people to join the conversation on oral
            health.
            <br />
            <br />
            <b>Award criteria:</b>
            <ul>
              <li>
                Number of social media posts, including their engagement and
                reach
              </li>
              <li>
                Appropriate use of WOHD, and other oral health related hashtags
              </li>
              <li>Presence across a range of social media platforms</li>
              <li>Influencer involvement</li>
              <li>Dissemination of WOHD social media assets </li>
            </ul>
          </p>
        </div>
      </div>

      <div
        className="submit"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <h1 className="header-text" style={{ color: "#044A8F" }}>
          <img src={bullet3} />
          SUBMIT YOUR REPORT
          <img src={bullet3} />
        </h1>
        <div className="flex-horiz" style={{ justifyContent: "center" }}>
          <a
            className="bttn"
            style={{ marginTop: "60px", background: "#706E6E" }}
          >
            Submit now
          </a>
        </div>
        <p
          className="sec-txt"
          style={{
            color: "#3A3A3D",
            textAlign: "center",

            marginTop: "50px",
          }}
        >
          Deadline for submission of reports: 30th of April 2022
        </p>
      </div>

      <div
        className="links flex-horiz"
        style={{ justifyContent: "space-evenly" }}
      >
        <div className="flex-vert">
          <h1 className="title-text2" style={{ color: "#044A8F" }}>
            <img src={bullet3mini} style={{ marginRight: "10px" }} />
            FDI’s WOHD Campagin
          </h1>
          <a href="https://www.worldoralhealthday.org/about" className="bttn">
            Learn More
          </a>
        </div>
        <div className="flex-vert">
          <h1 className="title-text2" style={{ color: "#044A8F" }}>
            <img src={bullet3mini} style={{ marginRight: "10px" }} />
            FDI Resources
          </h1>
          <a
            href="https://www.worldoralhealthday.org/resource"
            className="bttn"
          >
            Learn More
          </a>
        </div>
        <div className="flex-vert">
          <h1 className="title-text2" style={{ color: "#044A8F" }}>
            <img src={bullet3mini} style={{ marginRight: "10px" }} />
            IADS Resources
          </h1>
          <a
            href="https://drive.google.com/drive/u/0/folders/1W1jGeuXVB6P7fZjbfDPDuiDzGjok7mtk"
            className="bttn"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="history">
        <div className="container">
          <h1 className="title-text">
            <img src={bullet} style={{ marginRight: "25px" }} />
            History
          </h1>

          <p
            className="sec-txt"
            style={{ width: "90%", margin: "auto", marginTop: "35px" }}
          >
            “World Oral Health Day was first declared in 2007 and was originally
            celebrated on 12 September – the birth date of FDI founder Dr
            Charles Godon. However, the campaign was not fully activated until
            2013, after the date was changed to 20 March to avoid conflict with
            the FDI World Dental Congress taking place in September.
            <br />
            <br />
            The new date was chosen to reflect that:
            <ul>
              <li>
                Seniors must have a total of 20 natural teeth at the end of
                their life to be considered healthy.
              </li>
              <li>Children should possess 20 baby teeth.</li>
              <li>
                Healthy adults must have a total of 32 teeth and 0 dental
                cavities.
              </li>
              <li>
                Expressed on a numerical basis this can be translated as 3/20
                hence March 20″{" "}
                <a
                  href="https://www.worldoralhealthday.org/about"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontFamily: "POPPINS bold",
                  }}
                >
                  World Oral Health Day Official Website
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="furtherDesc">
        <div className="container">
          <p className="sec-txt2">
            “..the oral health worldwide is in our hands, as it is up to us and
            our actions to improve it. It is in the hands of the doctors who
            teach at the university, ativan work in clinics, and in ours as
            well, as even though we are just climbing on the dentistry
            profession steps, we too can make a difference.
          </p>
          <div className="flex-horiz">
            <img src={pic1} />
            <p className="sec-txt2">
              This is the reason the International Association of Dental
              Students was glad to join the great initiative of FDI World Dental
              Federation, to celebrate World Oral Health Day on March 20th.
              Students around the world have gathered together, went to schools,
              public squares, orphanages, remote areas within their region and
              celebrated the betterment of oral health through prophylaxis
              activities designed to educate and advice the population. From
              Jamaica to Indonesia, from Malta to Saudi Arabia, 12 IADS member
              countries around the world have joined the initiative in 2013.
              Through their actions, they have set up an example and took the
              leadership in the students led prophylaxis actions to improve oral
              health. A larger and greater mobilization of dental students
              organizations awaits to occur in 2014, which would get us one step
              closer towards the oral health goals we pursue.” said{" "}
              <a
                href="https://issuu.com/iads_online/docs/wohd_2013_booklet/4"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "POPPINS bold",
                }}
              >
                Pavel Scarlat – IADS President 2012/13
              </a>
            </p>
          </div>

          <div className="flex-horiz mt-5">
            <p className="sec-txt2" style={{ textAlign: "right" }}>
              Later in August 2013, the newly formed Prophylaxis Committee
              -which was chaired by Murad Alrasheedi at that time- worked
              tightly with the World Dental Federation in order to spread word
              of the dynamically growing global cause (WOHD), and so the
              official FDI-WOHD contest started from 2014 to include an integral
              section for dental students celebrations.
              <br />
              <br />
              In 2021, the Prophylaxis Committee under the leadership of Meryem
              Lahlou, Prophylaxis Chairperson 2020/21 organised the first World
              Oral Health Day Summit of IADS . It was a two day event including
              a public discussion, lectures, workshops on public health and
              advocacy. Special thanks for their attendance as guest speakers go
              to FDI President Elect, Prof. Ihsane Ben Yahya, member of FDI
              Public Health Committee, Dr. Elham Kateeb, learning officer at WHO
              Academy & IADS Alumni Dr. Ave Pold and Public Health Research
              Fellow & IADS Alumni, Dr. Abanoub Riad.
            </p>
            <img src={pic2} />
          </div>
        </div>
      </div>

      <div className="finalReports">
        <div className="container">
          <h1
            className="title-text"
            style={{
              color: "#044A8F",
              marginBottom: "100px",
              textAlign: "center",
            }}
          >
            <img src={bullet3} style={{ marginRight: "25px" }} />
            Final Reports Booklets
          </h1>

          <CardList className="card-list" data={Reports} textColor="#044A8F" />
        </div>
      </div>

      <div className="honor">
        <div className="container">
          <h1
            className="title-text"
            style={{ color: "#044A8F", marginBottom: "100px" }}
          >
            <img src={bullet3} style={{ marginRight: "25px" }} />
            Roll of Honor
          </h1>
          <div className="panel" style={{ borderRadius: "10px 10px 0px 0px" }}>
            <Table striped hover responsive>
              <thead className="tableHead">
                <tr>
                  <th>Term</th>
                  <th>Theme</th>
                  <th>1st Winner</th>
                  <th>2nd Winner</th>
                  <th>3rd Winner</th>
                  <th>4th Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2019</td>
                  <td>Say Ahh!</td>
                  <td>
                    Russian Association of Dental Students and Young
                    Dentist(HCCM Russia) 🇷🇺
                  </td>
                  <td>@Sudanese Association of Dental Students (SADS) 🇸🇩</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2018</td>
                  <td>Say Ahh!</td>
                  <td>Tunisian Association of Dental Students 🇹🇳</td>
                  <td>Lebanese Association of Dental Students 🇱🇧</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2017</td>
                  <td>Live Mouth Smart</td>
                  <td>Dental Students' Scientific Association of Egypt 🇪🇬</td>
                  <td>Sudanese Association of Dental Students 🇸🇩</td>
                  <td>Palestinian Association of Dental Students 🇵🇸</td>
                  <td>
                    Asociación Valenciana de Estudiantes de Odontologia 🇪🇸
                  </td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>Healthy mouth. Health body.</td>
                  <td>Dental Students' Scientific Association of Egypt 🇪🇬</td>
                  <td>Polskie Towarzystwo Studentów Stomatologii 🇵🇱</td>
                  <td>Kurdistan Dental Health Organization 🇮🇶</td>
                  <td>Polskie Towarzystwo Studentów Stomatologii 🇵🇱</td>
                </tr>
                <tr>
                  <td>2015</td>
                  <td>Smile for Life!</td>
                  <td>Saudi Dental Student Club 🇸🇦</td>
                  <td>TDB Öğrenci Kolu’nun - TURK DENTSIC 🇹🇷</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2014</td>
                  <td>Celebrating Healthy Smiles</td>
                  <td>Dental Students' Scientific Association of Egypt 🇪🇬</td>
                  <td>Sudanese Association of Dental Students 🇸🇩</td>
                  <td>Associazione Italiana Studenti Odontoiatria 🇮🇹</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WOHD;
