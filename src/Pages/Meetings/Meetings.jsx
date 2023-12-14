import React from "react";
import "./Meetings.scss";
import PrevMeetings from "./PrevMeetings";

import { Table } from "react-bootstrap";

import apply from "../../Assets/Committees/Training/apply.svg";

import logo from "../../Assets/Meetings/logo.svg";
import Arrow from "../../Assets/About/Arrow.svg";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Link } from "@mui/material";

const PrevMeetingsCol = [
  {
    field: "Term",
    headerName: "Term",
    width: 125,
    editable: false,
  },
  {
    field: "Annual Congress (AC)",
    headerName: "Annual Congress (AC)",
    width: 300,
    editable: false,
  },
  {
    field: "Gallery",
    headerName: "Gallery",
    width: 175,
    editable: false,
    renderCell: (params) => <a href={`${params.value}`}>{params.value}</a>,
  },
  {
    field: "Mid-Year Meeting (MYM)",
    headerName: "Mid-Year Meeting (MYM)",
    width: 300,
    editable: false,
  },
  {
    field: "MM Gallery",
    headerName: "MM Gallery",
    width: 175,
    editable: true,
    renderCell: (params) => <a href={`${params.value}`}>{params.value}</a>,
  },
];

const Meetings = () => {
  const [headerState, setHeaderState] = useState(1);
  //   console.log({ headerState });

  return (
    <div className="meetings-page">
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">IADS Meetings</h1>
        </div>
      </div>

      <div className="upcoming">
        <h1
          className="title-1st"
          style={{ paddingTop: "80px", color: "#FDBE3D" }}
        >
          Previous
        </h1>
        <h1 className="title-2nd">IADS Meeting</h1>
        <img src={logo} style={{ marginBottom: "30px" }} />
        <br />
        <a href="https://congress.iads-web.com/" className="congress-btn">
          Visit the congress page
        </a>
      </div>

      <div className="about">
        <div className="abt container">
          <h1 className="title-2nd" style={{ marginRight: "75px" }}>
            About IADS Meetings
          </h1>
          <img className="arw" src={Arrow} style={{ marginRight: "85px" }} />
          <p className="desc" style={{ color: "white", textAlign: "left" }}>
            IADS has a tradition of organizing two meetings each year. The
            Annual World Dental Student Congress (AC) which is the biggest event
            of the year, usually takes place at the end of summer, it always
            hosts the General Assembly and this is where the annual elections
            take place; and The Mid-Year Meeting (MYM), which usually takes
            place at the end of winter or beginning of spring, is an
            intermediate meeting between two Congresses to evaluate and optimize
            the work of the IADS. The aim of IADS meetings is to gather
            representatives and delegates of IADS members, partners of IADS and
            people interested in the association together to exchange ideas,
            update each other, brainstorm and work together. The possibilities
            for conduction of these activities are diverse: The General
            Assembly, the Committee Meetings, the scientific programs, the
            workshops, the social activities.
          </p>
        </div>
      </div>

      <div className="glance">
        <h1 className="title-2nd" style={{ color: "#1D015C" }}>
          IADS Meetings
        </h1>
        <h1
          className="title-1st"
          style={{ color: "#1884D8", marginBottom: "50px" }}
        >
          At a Glance
        </h1>
        <iframe
          className="video"
          width="955"
          height="583"
          src="https://www.youtube.com/embed/f-7cTz-U2Cw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <div className="watchmore">
          <a
            href="https://www.youtube.com/playlist?list=PLxpgZmE9YxYpAtKf0BXzsicuJy2K2gctl"
            className="watchmore-btn"
          >
            Watch more
          </a>
        </div>
      </div>

      <div className="more-about">
        <div className="more-header flex-horiz">
          <div className="annual-header" onClick={() => setHeaderState(1)}>
            <h1
              className="title-1st"
              style={{ color: "#55C9F3", marginTop: "60px" }}
            >
              More About
            </h1>
            <h1 className="title-2nd" style={{ marginTop: "-25px" }}>
              Annual Meeting
            </h1>
          </div>
          <div className="mid-header" onClick={() => setHeaderState(0)}>
            <h1
              className="title-1st"
              style={{ color: "#55C9F3", marginTop: "60px" }}
            >
              More About
            </h1>
            <h1 className="title-2nd" style={{ marginTop: "-25px" }}>
              Mid-year Meeting
            </h1>
          </div>
        </div>
        <div className="bgcolor">
          {headerState && (
            <div className="annual-section">
              <p
                className="desc"
                style={{ textAlign: "left", fontFamily: "Poppins bold" }}
              >
                The Annual Congress is usually hosted late Summer
                (August-September) in the country that wins most votes in the
                General Assembly held in the year prior.
              </p>
              <h2 className="mini-title">General Assembly</h2>
              <p className="desc">
                Reviewing association programs, executed projects and budget of
                the previous 6-months. <br />
                Reviewing leadership and task-forces performance. <br />
                Reviewing bylaws and constitutional amendments.
                <br />
                Reviewing all the organizational membership applications and
                only the referred personal applications. <br />
                Reviewing significant member organizations activities. <br />
                Approving the financial budget of upcoming term. <br />
                Electing the new leadership board of upcoming term.
              </p>
              <h2 className="mini-title">Scientific Program</h2>
              <p className="desc">
                Delivering a variety of quality theoretical lectures, practical
                and hands-on workshops.
                <br />
                Organizing Lecture Contest.
                <br />
                Organizing Dental Olympics.
              </p>
              <h2 className="mini-title">Social Program</h2>
              <p className="desc">
                Holding Exchange Fair party.
                <br />
                Holding Opening GALA Ceremony.
                <br />
                Holding Closing GALA Ceremony.
                <br />
                Holding cultural tours and parties is a conditional subject to
                hosting country/city background and facilities.
              </p>
              <h2 className="mini-title">Training Programs</h2>
              <p className="desc">
                Delivering specialized Sub-Regional training sessions to boost
                leadership skills of participating delegates.
              </p>
            </div>
          )}

          {!headerState && (
            <div className="mid-section">
              <p className="desc" style={{ fontFamily: "Poppins bold" }}>
                The Mid-year Meeting is usually hosted later winter
                (February-March) in the country that wins most votes in the
                General Assembly held in the year prior.
              </p>
              <h2 className="mini-title">General Assembly</h2>
              <p className="desc">
                Reviewing association programs, executed projects and budget of
                the previous 6-months.
                <br />
                Reviewing leadership and task-forces performance.
                <br />
                Reviewing bylaws and constitutional amendments.
                <br />
                Reviewing all the organizational membership applications and
                only the referred personal applications.
                <br />
                Reviewing significant member organizations activities.
              </p>
              <h2 className="mini-title">Scientific Program</h2>
              <p className="desc">
                Delivering a variety of quality theoretical lectures, practical
                and hands-on workshops.
                <br />
                Organizing Lecture Contest.
                <br />
                Organizing Dental Olympics.
              </p>
              <h2 className="mini-title">Social Program</h2>
              <p className="desc">
                Holding Exchange Fair party.
                <br />
                Holding Opening GALA Ceremony.
                <br />
                Holding Closing GALA Ceremony.
                <br />
                Holding cultural tours and parties is a conditional subject to
                hosting country/city background and facilities.
              </p>

              <h2 className="mini-title">Training Programs</h2>
              <p className="desc">
                Delivering specialized Sub-Regional training sessions to boost
                leadership skills of participating delegates.
              </p>
            </div>
          )}
        </div>

        <div className="container-fluid trainerApp">
          <h1 className="title" style={{ color: "white" }}>
            HOST COUNTRY APPLICATIONS
          </h1>
          <div className="container mt-5">
            <div
              className="row justify-content-center"
              style={{ margin: "auto" }}
            >
              <div className="col-lg-3 col-sm-12 action" id="action2">
                <p className="apply">
                  Don't miss the chance to host the next IADS annual congress in
                  your country.
                </p>
                <a
                  href="https://forms.gle/QU2ANPJ6wDyCeDYVA"
                  style={{ textDecoration: "none" }}
                >
                  <button className="btn" style={{ backgroundColor: "white" }}>
                    <img src={apply} />
                    Apply as a Host Country
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="previous-meetings">
          <h1
            className="title-1st"
            style={{ color: "#1884D8", marginTop: "50px" }}
          >
            Previous
          </h1>
          <h1
            className="title-2nd"
            style={{
              color: "#1D015C",
              marginTop: "-25px",
              marginBottom: "50px",
            }}
          >
            IADS Meetings
          </h1>

          <div className="container" style={{ margin: "auto" }}>
            <Box
              className="box-table"
              sx={{ height: 645, width: "95%" }}
              style={{
                margin: "auto",
                marginTop: "50px",
                marginBottom: "50px",
              }}
            >
              <DataGrid
                headerHeight={40}
                stickyHeader
                rows={PrevMeetings}
                getRowId={(row) => row["Term"]}
                columns={PrevMeetingsCol}
                pageSize={10}
                rowsPerPageOptions={[5]}
                // checkboxSelection
                // disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
