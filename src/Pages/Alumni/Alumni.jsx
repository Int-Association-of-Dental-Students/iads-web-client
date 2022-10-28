import React from "react";
import "./Alumni.scss";

import AnchorLink from "react-anchor-link-smooth-scroll";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import PrevExecCom from "./PrevExecCom";
import HonoraryMembers from "./HonoraryMembers";

import "../../Components/Governance/GovCard.scss";

import President from "../../Assets/Governance/Alumni/President.png";

import f1 from "../../Assets/Governance/Alumni/f1.svg";
import p1 from "../../Assets/Governance/Alumni/p1.svg";
import f2 from "../../Assets/Governance/Alumni/f2.svg";
import p2 from "../../Assets/Governance/Alumni/p2.svg";
import f3 from "../../Assets/Governance/Alumni/f3.svg";
import p3 from "../../Assets/Governance/Alumni/p3.svg";
import f4 from "../../Assets/Governance/Alumni/f4.svg";
import p4 from "../../Assets/Governance/Alumni/p4.svg";
import f5 from "../../Assets/Governance/Alumni/f5.svg";
import p5 from "../../Assets/Governance/Alumni/p5.png";
import f6 from "../../Assets/Governance/Alumni/f6.svg";
import p6 from "../../Assets/Governance/Alumni/p6.svg";
import f7 from "../../Assets/Governance/Alumni/f7.svg";
import p7 from "../../Assets/Governance/Alumni/p7.svg";
import f8 from "../../Assets/Governance/Alumni/f8.svg";
import p8 from "../../Assets/Governance/Alumni/p8.svg";
import f9 from "../../Assets/Governance/Alumni/f9.svg";
import p9 from "../../Assets/Governance/Alumni/p9.svg";
import f10 from "../../Assets/Governance/Alumni/f10.svg";
import p10 from "../../Assets/Governance/Alumni/p10.svg";
import f11 from "../../Assets/Governance/Alumni/f11.svg";
import p11 from "../../Assets/Governance/Alumni/p11.svg";

const PrevExecComCol = [
  {
    field: "Term",
    headerName: "Term",
    width: 125,
    editable: false,
  },
  {
    field: "President",
    headerName: "President",
    width: 175,
    editable: false,
  },
  {
    field: "VP of Internal Affairs",
    headerName: "VP of Internal Affairs",
    width: 175,
    editable: false,
  },
  {
    field: "VP of Finances",
    headerName: "VP of Finances",
    width: 175,
    editable: false,
  },
  {
    field: "VP of Public Relations",
    headerName: "VP Public Relations",
    width: 175,
    editable: false,
  },
  {
    field: "VP of Exchanges",
    headerName: "VP of Exchanges",
    width: 175,
    editable: false,
  },
  {
    field: "VP of Science",
    headerName: "VP Science",
    width: 175,
    editable: false,
  },
];
const HonoraryMembersCol = [
  {
    field: "Name",
    headerName: "Name",
    width: 250,
    editable: false,
  },
  {
    field: "Country",
    headerName: "Country",
    width: 300,
    editable: false,
  },
  {
    field: "Year of Nomination",
    headerName: "Year of Nomination",
    width: 300,
    editable: false,
  },
];

const GovCard = (props) => {
  return (
    <div className="govCard">
      <img className="person-img" src={props.personImg} />
      <img
        className="flag-img"
        style={{ marginTop: "-20px" }}
        src={props.flag}
      />
      <h1 className="name">{props.name}</h1>
      <p className="role" style={{ color: props.color, marginTop: "45px" }}>
        {props.role}
      </p>
    </div>
  );
};

const Alumni = () => {
  return (
    <div className="alumni-page">
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">Alumni</h1>
          <p className="desc" style={{ marginTop: "30px", color: "white" }}>
            Jump to
          </p>
          <div className="container jumpbtns">
            <AnchorLink offset="50" href="#prev" className="btn">
              Previous Executive Committee
            </AnchorLink>
            <AnchorLink offset="50" href="#honor" className="btn">
              Honorary Life Members
            </AnchorLink>
            <AnchorLink offset="50" href="#peter" className="btn">
              Peter Swiss Excellency Award
            </AnchorLink>
          </div>
        </div>
      </div>

      <div className="alumni">
        <h1 className="title-1st">Iads</h1>
        <h1 className="title-2nd">Alumni</h1>
        <p className="desc">1951 - present</p>
        <p
          className="desc"
          style={{
            width: "80%",
            margin: "auto",
            marginBottom: "70px",
          }}
        >
          From Paris to the entire globe, from as few as four executive
          committee members in 1951 to more than 200,000 member students
          worldwide today and from 6 European founding countries to over 50
          countries based in all world regions – this is the story of
          International Association of Dental Students (IADS). An organization
          that reflects the values of interculturalism, sustainable development,
          oral health advocacy and education equity. Here are the ones who made
          it happen & maintained it.
        </p>
      </div>

      <div className="title-bg" id="prev">
        <h1 className="title-3rd">PREVIOUS EXECUTIVE COMMITTEES</h1>
      </div>
      <Box
        className="box-table"
        sx={{ height: 645, width: "85%" }}
        style={{ margin: "auto", marginTop: "50px", marginBottom: "50px" }}
      >
        <DataGrid
          headerHeight={40}
          stickyHeader
          rows={PrevExecCom}
          getRowId={(row) => row["President"]}
          columns={PrevExecComCol}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          // disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>

      <div className="title-bg" id="honor">
        <h1 className="title-3rd">Honorary Life Members</h1>
      </div>
      <Box
        className="box-table honoraryTable"
        sx={{ height: 645, width: "85%" }}
        style={{ margin: "auto", marginTop: "50px", marginBottom: "50px" }}
      >
        <DataGrid
          headerHeight={40}
          stickyHeader
          rows={HonoraryMembers}
          getRowId={(row) => row["Name"]}
          columns={HonoraryMembersCol}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          // disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>

      <div className="title-bg" id="peter">
        <h1 className="title-3rd">Peter Swiss Excellence Award</h1>
      </div>
      <p
        className="desc-2"
        style={{
          marginTop: "46px",
          marginBottom: "24px",
          width: "70%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        In August 2012, three students from Indonesia, Czech Republic and
        Romania were honored to receive a brand new prize named after the
        legendary IADS officer, Dr. Peter Swiss. It was according to the
        nominations and voting of Executive Committee 2011/12, that these three
        students were worthy the new award due to significance of their
        contributions to the worldwide dental student community.
      </p>

      <div className="president flex-horiz">
        <div>
          <img src={President} />
          <p>Dr. Peter Swiss</p>
        </div>

        <p className="desc-2">
          Dr. Peter B F Swiss is renowned as the most contributor to IADS
          throughout history. After his service as IADS Treasurer, he was
          appointed to be the FDI/IADS Liaison Officer in Paris Congress 1967.
          For 15 years, he chaired the general assemblies and assisted the
          association in every possible way. Thanks to his historic speech at
          opening ceremony of the 24th IADS Annual Congress in Malta 1977, we
          know the story of IADS establishment and we are aware of the formative
          stage during the early years following 1951.
        </p>
      </div>

      <div className="awards-split">
        <div>
          <h1 className="title-2nd" style={{ color: "#3E1893" }}>
            Year 2019
          </h1>
          <div
            className="title-1st"
            style={{ paddingTop: "1px !important", marginTop: "-100px" }}
          >
            Awards
          </div>
          <div className="flex-horiz">
            <GovCard
              personImg={p1}
              flag={f1}
              name="Abeer Al-Hamdan"
              role="Regional Exchange Officer of the Middle East"
              color="#3A3A3D"
            />
            <GovCard
              personImg={p2}
              flag={f2}
              name="Mohamed FAYED"
              role="Graphic Coordinator of Editorial Board"
              color="#3A3A3D"
            />
          </div>
        </div>
        <div>
          <h1 className="title-2nd" style={{ color: "#3E1893" }}>
            Year 2018
          </h1>
          <div
            className="title-1st"
            style={{ paddingTop: "1px !important", marginTop: "-100px" }}
          >
            Awards
          </div>
          <div className="flex-horiz">
            <GovCard
              personImg={p3}
              flag={f3}
              name="Greta KERŠYTĖ"
              role="First Liaison Officer of the Editorial Board"
              color="#3A3A3D"
            />
            <GovCard
              personImg={p4}
              flag={f4}
              name="Mustafa Hacilar"
              role="First Regional Exchange Offcier of the Middle East"
              color="#3A3A3D"
            />
          </div>
        </div>
      </div>

      <div className="awards-main">
        <h1 className="title-2nd" style={{ color: "#3E1893" }}>
          Year 2016
        </h1>
        <div
          className="title-1st"
          style={{ paddingTop: "1px !important", marginTop: "-100px" }}
        >
          Awards
        </div>
        <div className="flex-vert">
          <GovCard
            personImg={p5}
            flag={f5}
            name="Abanoub Riad"
            role=""
            color="#3A3A3D"
          />
          <p
            className="desc"
            style={{
              width: "80%",
              margin: "auto",
              fontSize: "15px",
              lineHeight: "22px",
              marginTop: "-100px",
            }}
          >
            Join the congress crowd from home via Live-Streaming. Underlying
            motivation to broadcast the General Assembly and basic events of the
            IADS meetings was to enable wider circles of students around the
            world to acquire the IADS experience distantly and to get motivated
            to travel to the upcoming ones. Live updates of General Assembly
            resolutions also made scattered groups of students to feel
            dynamically engaged with the mother organization that works always
            to bridge the gaps between them.
          </p>
        </div>
      </div>
      <div className="awards-split">
        <div>
          <h1 className="title-2nd" style={{ color: "#3E1893" }}>
            Year 2013
          </h1>
          <div
            className="title-1st"
            style={{ paddingTop: "1px !important", marginTop: "-100px" }}
          >
            Awards
          </div>
          <div className="flex-horiz">
            <GovCard
              personImg={p6}
              flag={f6}
              name="Adham Elshourbagy"
              role="Chairman of Training Committee"
              color="#3A3A3D"
            />
          </div>
        </div>
        <div>
          <h1 className="title-2nd" style={{ color: "#3E1893" }}>
            Year 2014
          </h1>
          <div
            className="title-1st"
            style={{ paddingTop: "1px !important", marginTop: "-100px" }}
          >
            Awards
          </div>
          <div className="flex-horiz">
            <GovCard
              personImg={p7}
              flag={f7}
              name="Murad ALRSHEEDI"
              role="Chairman of the Prophylaxis Committee"
              color="#3A3A3D"
            />
            <GovCard
              personImg={p8}
              flag={f8}
              name="Azmi BEN DHIAB"
              role="Chairman of the 60th IADS MYM Tunisia 2014"
              color="#3A3A3D"
            />
          </div>
        </div>
      </div>
      <div className="awards-main">
        <h1 className="title-2nd" style={{ color: "#3E1893" }}>
          Year 2012
        </h1>
        <div
          className="title-1st"
          style={{ paddingTop: "1px !important", marginTop: "-100px" }}
        >
          Awards
        </div>

        <div className="flex-horiz" style={{ justifyContent: "space-around" }}>
          <div className="flex-vert">
            <GovCard
              personImg={p9}
              flag={f9}
              name="Petra HORÁKOVÁ"
              role=""
              color="#3A3A3D"
            />
            <p
              className="desc"
              style={{
                width: "80%",
                margin: "auto",
                fontSize: "15px",
                lineHeight: "22px",
                marginTop: "-100px",
              }}
            >
              The Healthy Tooth in the Healthy World. Students (dressed in white
              cloaks) are spreading the city. They have informative desks
              placed. the main spots of the city (main city square, main
              boulevards etc. They are addressing the passers-by with offering a
              short demonstration of accurate brushing techniques and tooth
              care. Those who accept this offer are instructed by students how
              to perform oral hygiene appropriately. The instructions are
              provided on plastic models of oral cavity but people are also
              offered the brushing techniques to be shown and explained right on
              them. Those who would accept such on offer would be awarded by
              small presents - dental tools (tooth brush, tooth paste etc.).
            </p>
          </div>
          <div className="flex-vert">
            <GovCard
              personImg={p10}
              flag={f10}
              name="Esti RIYANDA"
              role=""
              color="#3A3A3D"
            />
            <p
              className="desc"
              style={{
                width: "80%",
                margin: "auto",
                fontSize: "15px",
                lineHeight: "22px",
                marginTop: "-100px",
              }}
            >
              International Dental Summer School is a captivating Summer school
              organized by Dental School of Muhammadiyah University of
              Yogyakarta Indonesia. The program is combining academic and
              clinical activity The aims of IOSS are to broaden students
              knowledge in Dental Health care in Indonesia and to let
              International students gain practical experience in Dentistry that
              as we know, in developing country everyone will witness the impact
              of poverty on dental health that in conclusion the quantity and
              quality of dental morbidity is way higher than we find in western
              country MSS also allows participants to perform subjective and
              objective examination. diagnose and treatment in modified Problem
              Based Learning system.
            </p>
          </div>
          <div className="flex-vert">
            <GovCard
              personImg={p11}
              flag={f11}
              name="Cosmin POPA"
              role=""
              color="#3A3A3D"
            />
            <p
              className="desc"
              style={{
                width: "90%",
                // margin: "auto",
                fontSize: "15px",
                lineHeight: "22px",
                marginTop: "-100px",
              }}
            >
              Organizing a couple of IADS Annuat Meetings. He has participated
              in the core organizing teams of the IADS Annual Meetings in 2009
              and 2012, and he is remembered for the active participation in the
              IADS General Assemblies of the recent years.{" "}
              <span style={{ color: "transparent" }}>
                Organizing Organizing a couple of IADS Annuat Meetings. He has
                participated in the core organizing teams of the IADS Annual
                Meetings in 2009 and 2012, and he is remembered for the active
                participation in the IADS General Assemblies of the recent
                years. for the active participation in the IADS General
                Assemblies of the recent years.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
