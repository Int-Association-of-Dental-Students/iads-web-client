import React from "react";
import delegate from "../../Assets/Committees/Ellipse 18.png";

const WorkforceCard = () => {
  return (
    <div>
      <div className="container pt-5 workforce">
        <div className="row">
          <div className="col-3">
            <img src={delegate} />
            <h3 className="subtitle">Name Surname</h3>
            <p className="position">Position Name</p>
          </div>
          <div className="col">
            <div className="row subtitle">Workforce Members</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceCard;
