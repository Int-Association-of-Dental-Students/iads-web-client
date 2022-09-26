import React from "react";
import "./Governance.scss";

import delegatesWorld from "../../Assets/Governance/delegatesWorld.svg";

import p1 from "../../Assets/Governance/ExecCommittee/p1.png";
import f1 from "../../Assets/Governance/ExecCommittee/f1.svg";
import p2 from "../../Assets/Governance/ExecCommittee/p2.svg";
import f2 from "../../Assets/Governance/ExecCommittee/f2.svg";
import p3 from "../../Assets/Governance/ExecCommittee/p3.svg";
import f3 from "../../Assets/Governance/ExecCommittee/f3.svg";
import p4 from "../../Assets/Governance/ExecCommittee/p4.svg";
import f4 from "../../Assets/Governance/ExecCommittee/f4.svg";
import p5 from "../../Assets/Governance/ExecCommittee/p5.svg";
import f5 from "../../Assets/Governance/ExecCommittee/f5.svg";
import p6 from "../../Assets/Governance/ExecCommittee/p6.svg";
import f6 from "../../Assets/Governance/ExecCommittee/f6.svg";

import p11 from "../../Assets/Governance/StandingCommittee/p1.svg";
import f11 from "../../Assets/Governance/StandingCommittee/f1.svg";
import p12 from "../../Assets/Governance/StandingCommittee/p2.svg";
import f12 from "../../Assets/Governance/StandingCommittee/f2.svg";
import p13 from "../../Assets/Governance/StandingCommittee/p3.svg";
import f13 from "../../Assets/Governance/StandingCommittee/f3.svg";

import p21 from "../../Assets/Governance/RegionalAmbass/p1.svg";
import f21 from "../../Assets/Governance/RegionalAmbass/f1.svg";
import p22 from "../../Assets/Governance/RegionalAmbass/p2.svg";
import f22 from "../../Assets/Governance/RegionalAmbass/f2.svg";
import p23 from "../../Assets/Governance/RegionalAmbass/p3.svg";
import f23 from "../../Assets/Governance/RegionalAmbass/f3.svg";
import p24 from "../../Assets/Governance/RegionalAmbass/p4.svg";
import f24 from "../../Assets/Governance/RegionalAmbass/f4.svg";
import p25 from "../../Assets/Governance/RegionalAmbass/p5.svg";
import f25 from "../../Assets/Governance/RegionalAmbass/f5.svg";

import p31 from "../../Assets/Governance/AdvisoryBoard/p1.png";
import f31 from "../../Assets/Governance/AdvisoryBoard/f1.svg";
import p32 from "../../Assets/Governance/AdvisoryBoard/p2.svg";
import f32 from "../../Assets/Governance/AdvisoryBoard/f2.svg";
import p33 from "../../Assets/Governance/AdvisoryBoard/p3.svg";
import f33 from "../../Assets/Governance/AdvisoryBoard/f3.svg";
import p34 from "../../Assets/Governance/AdvisoryBoard/p4.svg";
import f34 from "../../Assets/Governance/AdvisoryBoard/f4.svg";
import p35 from "../../Assets/Governance/AdvisoryBoard/p5.svg";
import f35 from "../../Assets/Governance/AdvisoryBoard/f5.svg";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import delegatesList from "./DelegatesList";

import GovCard from "../../Components/Governance/GovCard";

const delegatesListColumns = [
  {
    field: "Country",
    headerName: "Country",
    width: 125,
    editable: true,
  },
  {
    field: "Member Organization",
    headerName: "Member Organization",
    width: 450,
    editable: true,
  },
  {
    field: "Abbreviation",
    headerName: "Abbreviation",
    width: 100,
    editable: true,
  },
  {
    field: "Membership Status",
    headerName: "Membership Status",
    width: 200,
    editable: true,
  },
  {
    field: "Delegate Name",
    headerName: "Delegate Name",
    width: 200,
    editable: true,
  },
];

const Governance = () => {
  return (
    <div className="governance-page">
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">GOVERNANCE</h1>
          <p className="desc" style={{ marginTop: "30px", color: "white" }}>
            Jump to
          </p>
        </div>
      </div>

      <div className="execCom">
        <h1 className="title-1st">Iads Leadership</h1>
        <h1 className="title-2nd" style={{ color: "white" }}>
          Executive Committee
        </h1>
        <p className="desc">2021/2021</p>
        <p
          className="desc"
          style={{
            color: "white",
            width: "80%",
            margin: "auto",
            marginBottom: "70px",
          }}
        >
          Executive Committee, briefly known as ExCo, is the supreme tier of
          organization leadership which is concerned with handling its
          day-to-day business. According to IADS Constitution, ExCo is composed
          of 6 members elected by the annual general assembly:
        </p>
        <div className="container horiz-cardlist">
          <GovCard
            personImg={p1}
            flag={f1}
            name="Dr. Lamis 
            Elsheikh"
            role="President"
            color="white"
          />
          <GovCard
            personImg={p2}
            flag={f2}
            name="Deniz 
            Devrim Kaya"
            role="Vice President of Internal Affairs"
            color="white"
          />
          <GovCard
            personImg={p3}
            flag={f3}
            name="Dr. Kristine Romanovska"
            role="Vice President of Public Relations"
            color="white"
          />
          <GovCard
            personImg={p4}
            flag={f4}
            name="Dr. Zhengis Zhamashev"
            role="Vice President of Science & Research"
            color="white"
          />
          <GovCard
            personImg={p5}
            flag={f5}
            name="Aneeq 
            Majid Mian"
            role="Vice President of Exchange"
            color="white"
          />
          <GovCard
            personImg={p6}
            flag={f6}
            name="Abay
            Kalymtay"
            role="Vice President of Finances"
            color="white"
          />
        </div>
      </div>

      <div className="standingCom">
        <h1 className="title-1st">Iads Leadership</h1>
        <h1 className="title-2nd">Standing Committee Officers</h1>
        <p className="desc">2021/2021</p>
        <p
          className="desc"
          style={{ width: "60%", margin: "auto", marginBottom: "70px" }}
        >
          IADS has three standing committees, each one managing worldwide
          activities in their respective fields of work.
        </p>
        <div
          className="container horiz-cardlist"
          style={{ width: "70%", margin: "auto" }}
        >
          <GovCard
            personImg={p11}
            flag={f11}
            name="Meryem 
            Lahlou"
            role="Public Health Officer"
          />
          <GovCard
            personImg={p12}
            flag={f12}
            name="Zeinab Hussein"
            role="Training Officer"
          />
          <GovCard
            personImg={p13}
            flag={f13}
            name="Maria 
            Teresa Matute"
            role="Voluntary Officer"
          />
        </div>
      </div>

      <div className="regAmbass">
        <h1 className="title-1st">Iads Leadership</h1>
        <h1 className="title-2nd">Regional Ambassadors</h1>
        <p className="desc">2021/2021</p>
        <div className="container horiz-cardlist">
          <GovCard
            personImg={p21}
            flag={f21}
            name="Juan Fernando Morales Recinos"
            role="Regional Ambassador of Americas"
          />
          <GovCard
            personImg={p22}
            flag={f22}
            name="Anna
            Pakhuta"
            role="Regional Ambassador of Europe"
          />
          <GovCard
            personImg={p23}
            flag={f23}
            name="Ranya 
            Oualid"
            role="Regional Ambassador of Africa"
          />
          <GovCard
            personImg={p24}
            flag={f24}
            name="Tasnim 
            Muhssin"
            role="Regional Ambassador of Middle East "
          />
          <GovCard
            personImg={p25}
            flag={f25}
            name="Viandra Tjokroadiredjo"
            role="Regional Ambassador of Asia-Pacific"
          />
        </div>
      </div>

      <div className="delegates">
        <h1 className="title-1st">Iads</h1>
        <h1 className="title-2nd">Delegates</h1>
        <p className="desc">2021/2021</p>
        <p
          className="desc"
          style={{
            width: "80%",
            margin: "auto",
            marginBottom: "70px",
          }}
        >
          Hover over the countries to view the delegates <br />
          *missing ux prototype*
        </p>
        <img src={delegatesWorld} />
      </div>

      <div className="delegates-list">
        <h1 className="title-1st">List of</h1>
        <h1 className="title-2nd">All Delegates</h1>

        <Box
          className="box-table"
          sx={{ height: 645, width: "80%" }}
          style={{ margin: "auto" }}
        >
          <DataGrid
            headerHeight={70}
            stickyHeader
            rows={delegatesList}
            getRowId={(row) => row["Delegate Name"]}
            columns={delegatesListColumns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            // disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>

      {/* <div className="alumni">
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
          that reects the values of interculturalism, sustainable development,
          oral health advocacy and education equity. Here is its interesting
          story; how it started, evolved and remained? what kind of challenges
          it had in past and how it managed to go thorough? valiuym what kind of
          success stories it had and how they were achieved?
        </p>
        <p className="desc" style={{ marginBottom: "10px" }}>
          Jump to
        </p>
        <div className="container jumpbtns">
          <div className="btn">Previous Executive Committee</div>
          <div className="btn">Honorary Life Members</div>
          <div className="btn">Peter Swiss Excellency Award</div>
        </div>
      </div> */}

      <div className="advisory">
        <h1 className="title-1st">Iads Leadership</h1>
        <h1 className="title-2nd" style={{ color: "white" }}>
          Advisory board
        </h1>
        <p className="desc" style={{ color: "white" }}>
          2021/2022
        </p>
        <div className="container horiz-cardlist">
          <GovCard
            personImg={p31}
            flag={f31}
            name="Dr. Huthaifa Abdul Qader"
            role="Immediate Past President"
            color="white"
          />
          <GovCard
            personImg={p32}
            flag={f32}
            name="Dr. Abanoub Riad"
            role="Advisor"
            color="white"
          />
          <GovCard
            personImg={p33}
            flag={f33}
            name="Dr. Silvi Domnori"
            role="Advisor"
            color="white"
          />
          <GovCard
            personImg={p34}
            flag={f34}
            name="Dr. Mariana Morgado"
            role="Advisor"
            color="white"
          />
          <GovCard
            personImg={p35}
            flag={f35}
            name="Dr. İrem 
            Türkan"
            role="Advisor"
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Governance;
