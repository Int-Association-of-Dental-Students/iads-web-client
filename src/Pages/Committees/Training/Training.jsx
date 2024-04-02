import React, { useEffect, useState } from "react";
import "./Training.scss";

import TrainerIdx from "./TrainerIdx";
import backend from "../../../utils/backend";

import logo from "../../../Assets/Committees/Training/logo.svg";
import delegate from "../../../Assets/Committees/Training/delegate.svg";
import renew from "../../../Assets/Committees/Training/renew.svg";
import apply from "../../../Assets/Committees/Training/apply.svg";

import CardList from "../../../Components/Cards/CardList";
import tnts from "./tnts";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
// import { DataGridPremium } from "@mui/x-data-grid-premium";

const columns = [
  {
    field: "Trainer Name",
    headerName: "Trainer Name",
    width: 300,
    editable: false,
  },
  {
    field: "Country",
    headerName: "Country",
    width: 150,
    editable: false,
  },
  {
    field: "Class",
    headerName: "Class",
    width: 300,
    editable: false,
  },
];

const Training = () => {
  const [tnts, settnts] = useState(null);

  useEffect(() => {
    axios.get(`${backend}api/card/tnts`).then((res) => {
      settnts(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <div className="training-page">
      <img src={logo} alt="" className="logo" />
      <p className="description">
        Training Committee is one of these IADS institutions which is concerned
        with this goal of having effective healthcare worker of the future,
        through peer-reviewed qualification system for graduating Soft Skills
        and Human Rights trainers.
      </p>

      <div className="container workforce" style={{ borderRadius: "20px" }}>
        <div className="row">
          <div className="delegatee col-lg-3 col-sm-12">
            <img style={{ borderRadius: "100%" }} src={delegate} />
            <h3 className="subtitle">Ahmed Hatem</h3>
            <p className="position" style={{ marginBottom: "0px" }}>
              Training Officer
            </p>
            <p className="position">Email: training@iads-web.org</p>
            {/* <Button className="photoUpload">Upload Photo</Button>
            <br />
            <Button className="editWorkforce">Edit Workforce</Button> */}
          </div>
          <div className="members col offset-lg-1">
            <div className="row subtitle">Workforce Members</div>
            <div className="row">
              <div className="col-3 WF_memberList">
                <h4 className="name">Ecem Zöhre ALAKABAK</h4>
                <p className="country">Turkey</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tnts container-fluid">
        <h1
          className="title"
          style={{ marginTop: "120px", marginBottom: "55px" }}
        >
          Current TNTs
        </h1>
        {tnts && (
          <CardList
            className="card-list"
            data={tnts}
            textColor="#0D7B7D"
          ></CardList>
        )}
      </div>

      <div className="container-fluid trainerApp">
        <h1 className="title" style={{ color: "white" }}>
          Trainer Applications
        </h1>
        <div className="container mt-5">
          <div
            className="row justify-content-center"
            style={{ margin: "auto" }}
          >
            <div className="col-lg-3 col-sm-12 action" id="action2">
              <p className="apply">Apply as a Certified IADS Trainer</p>
              <button className="btn" style={{ backgroundColor: "grey" }}>
                <img src={apply} />
                Apply as a Trainer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="trainerIndex">
        <h1
          className="title"
          style={{ marginTop: "90px", marginBottom: "30px" }}
        >
          Trainers index
        </h1>

        <Box
          className="box-table"
          sx={{ height: 645, width: "50%" }}
          style={{ margin: "auto" }}
        >
          <DataGrid
            headerHeight={70}
            stickyHeader
            rows={TrainerIdx}
            getRowId={(row) => row["Trainer Name"]}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            // disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
        <br />
        <br />

        {/* <div className="container">
          <div className="headerRow row">
            <div className="col">
              <h1 className="header">Name</h1>
            </div>
            <div className="col">
              <h1 className="header">Country</h1>
            </div>
            <div className="col">
              <h1 className="header">Year of Certification</h1>
            </div>
          </div>
          <div className="row roww">
            <div className="col">
              <p className="item">Name Here</p>
            </div>
            <div className="col">
              <p className="item">Pakistan</p>
            </div>
            <div className="col">
              <p className="item">2022</p>
            </div>
          </div>
          <div className="row roww">
            <div className="col">
              <p className="item">Name Here</p>
            </div>
            <div className="col">
              <p className="item">Pakistan</p>
            </div>
            <div className="col">
              <p className="item">2022</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Training;
