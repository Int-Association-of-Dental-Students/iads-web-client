import React, { useEffect, useState } from "react";
import "./AdminPortal.scss";
import LoginModal from "../../Components/LoginModal";
import { Button } from "react-bootstrap";

import { AuthContext } from "../../Components/Context/AuthContext";
import { useContext } from "react";

import backend from "../../utils/backend";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faUserFriends,
  faChartBar,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import { Table } from "react-bootstrap";

import axios from "axios";

const AdminPortal = () => {
  const Auth = useContext(AuthContext);
  const [webUsers, setWebUsers] = useState(null);
  const [orgMembers, setOrgMembers] = useState(null);
  const [personalMembers, setPersonalMembers] = useState(null);

  const [activeTab, setActiveTab] = useState(0);

  const [temp, setTemp] = useState(true);

  const updateValidatedUser = (id, type) => {
    console.log(id);
    console.log(type);
    axios
      .post(`${backend}api/webusers/updateVerification/${id}/${type}`)
      .then((res) => {
        setTemp(!temp);
      });
  };
  const updateValidatedOrgMember = (id, type) => {
    console.log(id);
    console.log(type);
    axios
      .post(`${backend}api/orgmember/updateVerification/${id}/${type}`)
      .then((res) => {
        setTemp(!temp);
      });
  };

  const updateValidatedPersonalMember = (id, type) => {
    console.log(id);
    console.log(type);
    axios
      .post(`${backend}api/personalmember/updateVerification/${id}/${type}`)
      .then((res) => {
        setTemp(!temp);
      });
  };

  const updateEditting = (id, type) => {
    console.log(id);
    console.log(type);
    axios
      .post(`${backend}api/webusers/updateEditting/${id}/${type}`)
      .then((res) => {
        // console.log(id);
        // console.log(type);
        setTemp(!temp);
      });
  };

  const deleteUser = (id) => {
    console.log("remove by id");
    axios.post(`${backend}api/webusers/deleteUser/${id}`).then((res) => {
      setTemp(!temp);
    });
  };

  const deleteOrgMember = async (id) => {
    console.log("remove by id");
    await axios
      .post(`${backend}api/orgmember/deleteMember/${id}`)
      .then((res) => {
        setTemp(!temp);
      });
  };
  const deletePersonalMember = async (id) => {
    console.log("remove by id");
    await axios
      .post(`${backend}api/personalmember/deleteMember/${id}`)
      .then((res) => {
        setTemp(!temp);
      });
  };

  useEffect(() => {
    axios.get("${backend}api/webusers").then((res) => {
      setWebUsers(res.data);
      // console.log(res.data);
    });
    console.log(webUsers);
    axios.get("${backend}api/orgmember").then((res) => {
      setOrgMembers(res.data);
      // console.log(res.data);
    });
    console.log(orgMembers);
    axios.get("${backend}api/personalmember").then((res) => {
      setPersonalMembers(res.data);
      // console.log(res.data);
    });
    console.log(orgMembers);
  }, [temp]);

  return (
    <>
      <div className="admin-portal-page">
        <style>
          {`
          .footer {display: none;}`}
        </style>
        {Auth.admin ? (
          <>
            <div className="panel">
              <div className="button-group">
                <Button
                  onClick={() => {
                    setActiveTab(0);
                  }}
                >
                  <FontAwesomeIcon icon={faUser} /> Web Users
                </Button>
                <Button
                  onClick={() => {
                    setActiveTab(1);
                  }}
                >
                  <FontAwesomeIcon icon={faUsers} /> Organizational Members
                </Button>
                <Button
                  onClick={() => {
                    setActiveTab(2);
                  }}
                >
                  <FontAwesomeIcon icon={faUserFriends} /> Personal Members
                </Button>
                <Button
                  onClick={() => {
                    setActiveTab(3);
                  }}
                >
                  <FontAwesomeIcon icon={faChartBar} /> Infographics
                </Button>
                <Button
                  style={{ marginTop: "30vh" }}
                  onClick={() => {
                    setActiveTab(4);
                  }}
                >
                  <FontAwesomeIcon icon={faCode} /> Development Updates
                </Button>
              </div>
            </div>
            <div className="content">
              {activeTab == 0 && (
                <>
                  <h1 className="title">Web Users</h1>
                  <div
                    className="member-table"
                    style={{
                      marginBottom: "0px !important",
                      height: "700px",
                      overflow: "scroll",
                      width: "85%",
                      margin: "auto",
                      border: "2px solid #185BB1",
                      borderRadius: "20px",
                    }}
                  >
                    <Table striped bordered hover fixed>
                      <thead
                        style={{
                          position: "sticky",
                          top: "0",
                          backgroundColor: "#185BB1",
                          color: "white",
                          verticalAlign: "middle",
                        }}
                        variant="dark"
                      >
                        <tr>
                          {/* <th>Idx</th> */}
                          <th className="header" scope="col">
                            Delete
                          </th>
                          <th className="header">Validated</th>
                          <th className="header">Editor</th>
                          <th className="header">Full Name</th>
                          <th className="header">username</th>
                          <th className="header">Email</th>
                          {/* <th>Gender</th> */}
                          <th className="header">Country</th>
                          <th className="header">Phone</th>
                          <th className="header">University</th>
                          <th className="header">Association</th>
                          {/* <th>Years Of Study</th> */}
                          <th className="header">Delegate</th>
                          <th className="header">Grad Year</th>
                          <th className="header">iads Employed</th>
                          <th className="header">iads Member</th>
                          <th className="header">iads Position</th>
                          <th className="header">iads Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {webUsers &&
                          webUsers
                            .slice(0)
                            .reverse()
                            .map((user, idx) => (
                              // <div>{user.fullName}</div>;
                              <tr>
                                {/* <td>{idx}</td> */}
                                <td>
                                  <button
                                    style={{ color: "red" }}
                                    onClick={(e) => deleteUser(user._id)}
                                  >
                                    Delete
                                  </button>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={user.validation}
                                    onChange={(e) =>
                                      updateValidatedUser(
                                        user._id,
                                        e.target.checked
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={user.editor}
                                    onChange={(e) =>
                                      updateEditting(user._id, e.target.checked)
                                    }
                                  />
                                </td>
                                <td>{user.fullName}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                {/* <td>{user.gender}</td> */}
                                <td>{user.country}</td>
                                <td>{user.phone}</td>
                                <td>{user.uni}</td>
                                <td>{user.associations}</td>
                                {/* <td>{user.yearsOfStudy}</td> */}
                                <td>{user.delegate}</td>
                                <td>{user.gradYear}</td>
                                <td>{user.iadsEmployed}</td>
                                <td>{user.iadsMember}</td>
                                <td>{user.iadsPosition}</td>
                                <td>{user.iadsEmail}</td>
                              </tr>
                            ))}
                      </tbody>
                    </Table>
                  </div>
                </>
              )}
              {activeTab == 1 && (
                <>
                  <h1 className="title">Organizational Members</h1>
                  <div
                    className="member-table"
                    style={{
                      marginBottom: "0px !important",
                      height: "700px",
                      overflow: "scroll",
                      width: "85%",
                      margin: "auto",
                      border: "2px solid #185BB1",
                      borderRadius: "20px",
                    }}
                  >
                    {orgMembers && (
                      <Table striped bordered hover fixed>
                        <thead
                          style={{
                            position: "sticky",
                            top: "0",
                            backgroundColor: "#185BB1",
                            color: "white",
                            verticalAlign: "middle",
                          }}
                          variant="dark"
                        >
                          <tr>
                            {/* <th>Idx</th> */}
                            <th className="header">Delete</th>
                            <th className="header">Validated</th>
                            <th className="header">Full Name</th>
                            <th className="header">Abbr. Name</th>
                            <th className="header">Full Name Nat. Lang.</th>
                            {/* <th>Gender</th> */}
                            <th className="header">Country</th>
                            <th className="header">City</th>
                            <th className="header">Address</th>
                            <th className="header">Postal Code</th>
                            <th className="header">Phone Number</th>
                            <th className="header">Fax Number</th>
                            <th className="header">1st Delegate Email</th>
                            <th className="header">Website</th>
                            <th className="header">Date of Establishment</th>
                            <th className="header">No. Member Schools</th>
                            {/* <th className="header">No. Member Schools</th> */}
                            <th className="header">No. Member Students</th>
                            <th className="header">Membership Type</th>

                            <th className="header">President Name</th>
                            <th className="header">President Email</th>
                            <th className="header">Secretary Name</th>
                            <th className="header">Secretary Email</th>
                            <th className="header">Treasurer Name</th>
                            <th className="header">Treasurer Email</th>
                            <th className="header">Editor Name</th>
                            <th className="header">Editor Email</th>
                            <th className="header">Exchange Name</th>
                            <th className="header">Exchange Email</th>
                            <th className="header">Scientific Name</th>
                            <th className="header">Scientific Email</th>
                            <th className="header">Training Name</th>
                            <th className="header">Training Email</th>
                            <th className="header">Voluntary Name</th>
                            <th className="header">Voluntary Email</th>

                            <th className="header">Delegate 1 Email</th>
                            <th className="header">Delegate 2 Name</th>
                            <th className="header">Delegate 2 Email</th>
                            <th className="header">Letter</th>
                            <th className="header">Logo</th>
                            <th className="header">Flag</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orgMembers &&
                            orgMembers
                              .slice(0)
                              .reverse()
                              .map((member, idx) => (
                                // <div>{user.fullName}</div>;
                                <tr>
                                  {/* <td>{idx}</td> */}
                                  <td>
                                    <button
                                      style={{ color: "red" }}
                                      onClick={(e) =>
                                        deleteOrgMember(member._id)
                                      }
                                    >
                                      Delete
                                    </button>
                                  </td>
                                  <td>
                                    <input
                                      type="checkbox"
                                      checked={member.validation}
                                      onChange={(e) =>
                                        updateValidatedOrgMember(
                                          member._id,
                                          e.target.checked
                                        )
                                      }
                                    />
                                  </td>

                                  <td>{member.fullname}</td>
                                  <td>{member.fullnameNat}</td>
                                  <td>{member.abbreviatedName}</td>
                                  <td>{member.country}</td>
                                  <td>{member.city}</td>
                                  <td>{member.address}</td>
                                  <td>{member.postalCode}</td>
                                  <td>{member.phone.number}</td>
                                  <td>{member.faxNumber}</td>
                                  <td>{member.delegate1.email}</td>
                                  <td>{member.website}</td>
                                  <td>{member.dateOfEstablishment}</td>
                                  <td>{member.numOfMemberSchools}</td>
                                  <td>{member.numOfMemberStudents}</td>
                                  <td>{member.requestedMembershipType}</td>
                                  <td>{member.president.name}</td>
                                  <td>{member.president.email}</td>
                                  <td>{member.secretary.name}</td>
                                  <td>{member.secretary.email}</td>
                                  <td>{member.treasurer.name}</td>
                                  <td>{member.treasurer.email}</td>
                                  <td>{member.editor.name}</td>
                                  <td>{member.editor.email}</td>
                                  <td>{member.exchangeOfficer.name}</td>
                                  <td>{member.exchangeOfficer.email}</td>
                                  <td>{member.scientificOfficer.name}</td>
                                  <td>{member.scientificOfficer.email}</td>
                                  <td>{member.trainingOfficer.name}</td>
                                  <td>{member.trainingOfficer.email}</td>
                                  <td>{member.voluntaryOfficer.name}</td>
                                  <td>{member.voluntaryOfficer.email}</td>

                                  <td>{member.delegate1.email}</td>
                                  <td>{member.delegate2.name}</td>
                                  <td>{member.delegate2.email}</td>

                                  <td>
                                    {
                                      <a target="_blank" href={member.letter}>
                                        Letter
                                      </a>
                                    }
                                  </td>
                                  <td>
                                    {
                                      <a target="_blank" href={member.logo}>
                                        Logo
                                      </a>
                                    }
                                  </td>
                                  <td>
                                    {
                                      <a target="_blank" href={member.flag}>
                                        Flag
                                      </a>
                                    }
                                  </td>

                                  {/* <td>{member.delegate1.email}</td> */}
                                </tr>
                              ))}
                        </tbody>
                      </Table>
                    )}
                  </div>
                </>
              )}

              {activeTab == 2 && (
                <>
                  <h1 className="title">Personal Members</h1>
                  <div
                    className="member-table"
                    style={{
                      marginBottom: "0px !important",
                      height: "700px",
                      overflow: "scroll",
                      width: "85%",
                      margin: "auto",
                      border: "2px solid #185BB1",
                      borderRadius: "20px",
                    }}
                  >
                    <Table striped bordered hover fixed>
                      <thead
                        style={{
                          position: "sticky",
                          top: "0",
                          backgroundColor: "#185BB1",
                          color: "white",
                          verticalAlign: "middle",
                        }}
                        variant="dark"
                      >
                        <tr>
                          {/* <th>Idx</th> */}
                          <th className="header" scope="col">
                            Delete
                          </th>
                          <th className="header">Validated</th>
                          <th className="header">Full Name</th>
                          <th className="header">Gender</th>
                          <th className="header">Country</th>
                          {/* <th>Gender</th> */}
                          <th className="header">City</th>
                          <th className="header">Address</th>
                          <th className="header">Postal Code</th>
                          <th className="header">University</th>
                          {/* <th>Years Of Study</th> */}
                          <th className="header">Phone</th>
                          <th className="header">Whatsapp</th>
                          <th className="header">Facebook</th>
                          <th className="header">Email</th>
                          <th className="header">How Heard</th>
                          <th className="header">Grad. Year</th>
                          <th className="header">Curriculum</th>
                          <th className="header">Motivational</th>
                          <th className="header">Studentship</th>
                        </tr>
                      </thead>
                      <tbody>
                        {personalMembers &&
                          personalMembers
                            .slice(0)
                            .reverse()
                            .map((member, idx) => (
                              // <div>{user.fullName}</div>;
                              <tr>
                                {/* <td>{idx}</td> */}
                                <td>
                                  <button
                                    style={{ color: "red" }}
                                    onClick={(e) =>
                                      deletePersonalMember(member._id)
                                    }
                                  >
                                    Delete
                                  </button>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={member.validation}
                                    onChange={(e) =>
                                      updateValidatedPersonalMember(
                                        member._id,
                                        e.target.checked
                                      )
                                    }
                                  />
                                </td>
                                <td>{member.fullname}</td>
                                <td>{member.gender}</td>
                                <td>{member.country}</td>
                                <td>{member.city}</td>
                                <td>{member.address}</td>
                                <td>{member.postalCode}</td>
                                <td>{member.university}</td>
                                <td>{member.phoneNumber}</td>
                                <td>{member.whatsappNumber}</td>
                                <td>{member.facebook}</td>
                                <td>{member.email}</td>
                                <td>{member.howHeard}</td>
                                <td>{member.yearOfGraduation}</td>
                                <td>
                                  {member.curriculum && (
                                    <a target="_blank" href={member.curriculum}>
                                      Letter
                                    </a>
                                  )}
                                </td>
                                <td>
                                  {member.motivational && (
                                    <a
                                      target="_blank"
                                      href={member.motivational}
                                    >
                                      Letter
                                    </a>
                                  )}
                                </td>
                                <td>
                                  {member.studentship && (
                                    <a
                                      target="_blank"
                                      href={member.studentship}
                                    >
                                      Letter
                                    </a>
                                  )}
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </Table>
                  </div>
                </>
              )}
              {activeTab == 3 && (
                <>
                  <iframe
                    className="chart"
                    style={{
                      background: "#FFFFFF",
                      border: "none",
                      borderRadius: "2px",
                      boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                      marginTop: "25px",
                    }}
                    width="300"
                    height="480"
                    src="https://charts.mongodb.com/charts-iads-web-pnyjk/embed/charts?id=637021c1-02c9-4766-8ee5-f6da7351f982&maxDataAge=3600&theme=light&attribution=false&autoRefresh=true"
                  ></iframe>
                  <iframe
                    className="chart"
                    style={{
                      background: "#FFFFFF",
                      border: "none",
                      borderRadius: "2px",
                      marginTop: "25px",
                      boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                    }}
                    width="640"
                    showAttribution="false"
                    height="480"
                    src="https://charts.mongodb.com/charts-iads-web-pnyjk/embed/charts?id=636eb5a3-3d08-4150-8457-2618c9b22811&maxDataAge=3600&theme=light&attribution=false&autoRefresh=true"
                  ></iframe>
                </>
              )}
              {activeTab == 4 && (
                <>
                  <h1 className="title">
                    Hello From CodeCanvas Development Team
                  </h1>
                  <p>
                    In this page, we will be sharing live updates about
                    development issues and updates.
                  </p>
                  <div
                    className="seperator"
                    style={{
                      width: "100%",
                      borderBottom: "1px solid grey",
                      marginBottom: "12px",
                    }}
                  ></div>
                  <h5
                    style={{
                      textAlign: "left",
                      marginBottom: "0px",
                      color: "#1d015c",
                    }}
                  >
                    API Documentations Published
                  </h5>
                  <p>
                    29/12/2023 - In this{" "}
                    <a href="https://documenter.getpostman.com/view/17300405/2s9YsDiuD2">
                      Link
                    </a>
                    , all the backend accessible APIs are listed for further
                    development updates. The ones related to private and/or
                    sensitive data are hidden.
                  </p>
                </>
              )}
            </div>
          </>
        ) : (
          <div className="login-curtain">
            <LoginModal
              show={true}
              description="Welcome back! Login to your account."
            />
          </div>
        )}
      </div>
      <div className="phone-disabled">
        <h1 style={{ marginTop: "200px", marginBottom: "200px" }}>
          Please use a PC or Laptop to access this page.
        </h1>
      </div>
    </>
  );
};

export default AdminPortal;
