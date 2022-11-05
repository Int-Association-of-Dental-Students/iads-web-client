import React from "react";
import "./SCORE.scss";
import logo from "../../../Assets/Committees/SCORE/logo.svg";

import { Button } from "react-bootstrap";
import CardList from "../../../Components/Cards/CardList";
import WFList from "./WFList";
import axios from "axios";

import publications from "./publications";
import courses from "./courses";
import IDCP from "./IDCP";
import IJDS from "./IJDS";

import IDRP_Logo from "../../../Assets/Committees/SCORE/IDRP_Logo.svg";
import IDCP_Logo from "../../../Assets/Committees/SCORE/IDCP_Logo.svg";
import IJDS_Logo from "../../../Assets/Committees/SCORE/IJDS_Logo.svg";

import colgate from "../../../Assets/Committees/SCORE/projectColgate.svg";
import zhermack from "../../../Assets/Committees/SCORE/projectZhermack.svg";
import research from "../../../Assets/Committees/SCORE/research.svg";

import delegate from "../../../Assets/Committees/SCORE/irem.png";
import { useEffect } from "react";
import { useState } from "react";

const SCORE = () => {
  // const [publications, setPublications] = useState(null);

  // const getPublications = async () => {
  //   const { data } = await axios.get(
  //     "localhost:3001/api/Committees/SCORE/Publications"
  //   );
  //   setPublications(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getPublications();
  // }, []);
  const [publications, setpublications] = useState([]);
  const [courses, setcourses] = useState([]);
  const [IDCP, setIDCP] = useState([]);
  const [IJDS, setIJDS] = useState([]);



  useEffect(() => {
    axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/publications`)
      .then((res) => {
        setpublications(res.data);
        // console.log(res.data);
      });


      axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/courses`)
      .then((res) => {
        setcourses(res.data);
        // console.log(res.data);
      });


      axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/IDCP`)
      .then((res) => {
        setIDCP(res.data);
        // console.log(res.data);
      });


      axios
      .get(`https://infinite-wildwood-83288.herokuapp.com/api/card/IJDS`)
      .then((res) => {
        setIJDS(res.data);
        // console.log(res.data);
      });


  }, []);

  return (
    <div className="container-fluid scorePage">
      <img className="logo" src={logo} />
      <p className="description">
        The Standing Committee on Research and Education (SCORE) stresses the
        need for the students’ involvement within the dental scientific
        community by offering opportunities for the ones who desire to make a
        difference within the society.
      </p>
      {/* <WorkforceCard
        delegateImage={delegate}
        delegateName="Irem Türkan"
        delegatePosition="Vice President of Science & Research"
        WFList={WFList}
      /> */}

      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div className="delegatee col-lg-3 col-sm-12">
            <img style={{ borderRadius: "100%" }} src={delegate} />
            <h3 className="subtitle">Dr. İrem Türkan</h3>
            <p className="position" style={{ marginBottom: "0px" }}>
              Vice President of Science & Research
            </p>
            <p className="position">Email: vpsr@iads-web.org</p>
            {/* <Button className="photoUpload">Upload Photo</Button>
            <br />
            <Button className="editWorkforce">Edit Workforce</Button> */}
          </div>
          <div className="members col offset-lg-1 offset-sm-0">
            <div className="row subtitle">Workforce Members</div>
            <div className="row">
              <div className="col-3 WF_memberList">
                <h4 className="role">Human Resources:</h4>
                <h4 className="name">Aneeqa Aslam</h4>
                <p className="country">Pakistan</p>
                <h4 className="name">Monisha Chintala</h4>
                <p className="country">India</p>

                <h4 className="role">IDRP:</h4>
                <h4 className="name">Ataberk Kayhan</h4>
                <p className="country">Turkey</p>
                <h4 className="name">İrem Erdoğdu</h4>
                <p className="country">Turkey</p>
              </div>
              <div className="col-3 WF_memberList">
                <h4 className="role">IDRP:</h4>
                <h4 className="name">Farih Aminah</h4>
                <p className="country">Indonesia</p>
                <h4 className="name">Dilara Kılıç </h4>
                <p className="country">Turkey</p>

                <h4 className="role">Content Manegement:</h4>
                <h4 className="name">Jana Alalami</h4>
                <p className="country">Northen Cyprus</p>
                <h4 className="name">Tarteel Barakat</h4>
                <p className="country">Sudan</p>
                <h4 className="name">Efe Töre</h4>
                <p className="country">Turkey</p>
              </div>
              <div className="col-3 WF_memberList">
                <h4 className="role">Members:</h4>
                <h4 className="name">Marah Lahlouh</h4>
                <p className="country">Jordan</p>
                <h4 className="name">Mayar Danadna</h4>
                <p className="country">Palestine</p>

                <h4 className="name">Samin Sirous</h4>
                <p className="country">Iran</p>
                <h4 className="name">Serra Özdenak</h4>
                <p className="country">Northen Cyprus</p>
                <h4 className="name">Salar Chaychi</h4>
                <p className="country">Iran</p>
              </div>
              <div className="col-3 WF_memberList">
                <h4 className="role">Webinar Coordinator:</h4>
                <h4 className="name">Zhengis Zhamashev</h4>
                <p className="country">Kazakhstan</p>
                <h4 className="name">Yaren Sönmez</h4>
                <p className="country">Turkey</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="title" style={{ marginTop: "50px", marginBottom: "55px" }}>
        Projects
      </h1>

      <div className="container projectsCards">
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
      </div> */}

      <div className="publications container-fluid">
        <h1 className="title" style={{ marginBottom: "55px" }}>
          Publications
        </h1>
        <CardList
          className="card-list"
          data={publications}
          type={"publications"}
          textColor="#00467c"
        ></CardList>
      </div>

      <div className="courses container-fluid">
        <h1 className="title" style={{ marginBottom: "55px" }}>
          Dental & Scientific Courses
        </h1>
        <img
          className="IDRP_Logo"
          src={IDRP_Logo}
          style={{ marginBottom: "35px" }}
        />
        <p className="description" style={{ marginTop: "0px" }}>
          The International Dental Research Program (IDRP)’s mission is to
          bolster the very limited research training capacity of dental schools
          offered for international dental students. It remains the major source
          of support for training IADS’ young researchers. We have brought about
          research projects to bring together international dental students from
          different cultural backgrounds and dental dogmas to utilize their
          combined knowledge into accomplishing a proper research paper. <br />
          <br />
          IDRP is committed to ensuring that the key actors that fuel
          competitiveness and innovation are more internationally connected, by
          offering opportunities for collaborative international research
          training. IDRP has proven the notion that dental students have the
          capacity to comprehend and the capability to apply every step of any
          research workflow. IDRP will continue promoting international
          cooperation in dental research by encouraging more dental students to
          join properly established research projects, thus walking away from
          the mainstream proclivity of confining dental research to the
          specialists and academicians. This will predominantly enhance the
          quality of education on a global level.
        </p>
        <CardList
          className="card-list"
          data={courses}
          type={"courses"}
          textColor="#00467c"
        ></CardList>
      </div>
      <div className="IDCP container-fluid" style={{ paddingBottom: "75px" }}>
        <img
          className="IDRP_Logo"
          src={IDCP_Logo}
          style={{ marginBottom: "35px" }}
        />
        <p className="description" style={{ marginTop: "0px" }}>
          This initiative was founded in 2020 by the elected ISO to
          systematically sort all recruited lADS dental courses into one
          independent platform. It is devoted to providing advanced Hands-on
          workshops organized by dental companies or worldwide known dentists to
          enhance the practical skills of ADS dental students thus contributing
          in the complementary process of their education. This will
          predominantly reform and reshape a new generation of well-rounded
          dental professionals.
        </p>
        <CardList
          className="card-list"
          data={IDCP}
          type={"IDCP"}
          textColor="#00467c"
        ></CardList>
      </div>
      <div
        className="IJDS"
        style={{ paddingTop: "75px", paddingBottom: "75px" }}
      >
        <img
          className="IDRP_Logo"
          src={IJDS_Logo}
          style={{ marginBottom: "35px" }}
        />
        <p className="description" style={{ marginTop: "0px" }}>
          IJDS is an official publication of the International Association of
          Dental Students (IADS) which complements and perpetuates the process
          of education. The learning and exploring of our field has never
          stopped, thus we will strive to help readers become better researchers
          and clinicians, so they can advance their excellence in lab research
          and/or offer their patients the best-and most responsible-treatment
          possible.
          <br />
          <br />
          IJDS is primarily focused on shedding light upon the highest quality
          current clinical ircalments, techniques, clinical cases, and research
          in dentistry, We endeavor to do this by modernizing up-to-date
          techniques and controversial topics in clinical application and
          research accompanied by high-quality comprehensive clinical imagery to
          enhance students" apperception in a prepossessing pattern not
          restricted to the old-fashioned monotonous outlook of the original
          long papers. The ingenuity of this journal is showcased by its
          depiction of how art and science can work together to produce
          innovative articulacy.
        </p>
        <CardList
          className="card-list"
          data={IJDS}
          type={"IJDS"}
          textColor="#00467c"
        ></CardList>
      </div>
    </div>
  );
};

export default SCORE;
