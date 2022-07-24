import React from "react";
import delegate from "../../Assets/Committees/Ellipse 18.png";
import { Button } from "react-bootstrap";
import uploadIcon from "./Assets/upload.svg";

import "./WorkforceCard.scss";

const WorkforceCard = (props) => {
  return (
    <div className="container workforce" style={{ borderRadius: "20px" }}>
      <div className="row">
        <div
          className="col-lg-3 col-sm-12"
          style={{ borderRight: "1px solid #1D015C" }}
        >
          <img src={props.delegateImage} />
          <h3 className="subtitle">{props.delegateName}</h3>
          <p className="position">{props.delegatePosition}</p>
          <Button className="photoUpload">
            <img src={uploadIcon} style={{ marginRight: "7px" }} />
            Upload Photo
          </Button>
          <br />
          <Button className="editWorkforce btn">Edit Workforce</Button>
        </div>
        <div className="col offset-1">
          <div className="row subtitle" style={{ margin: "0px 0px 15px 0px" }}>
            Workforce Members
          </div>{" "}
          <div className="row WF_memberList">
            {props.WFList.map((member) => {
              <div className="col-4">
                {/* <h4 className="role" style={{}}>
                  Name Here
                </h4> */}
                <h4 className="name">{member.name}</h4>
                <p className="country">{member.country}</p>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceCard;
