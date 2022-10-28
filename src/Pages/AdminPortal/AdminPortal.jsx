import React, { useEffect, useState } from "react";
import "./AdminPortal.scss";

import { AuthContext } from "../../Components/Context/AuthContext";
import { useContext } from "react";

import { Table } from "react-bootstrap";

import axios from "axios";

const AdminPortal = () => {
  const Auth = useContext(AuthContext);
  const [webUsers, setWebUsers] = useState(null);
  const [orgMembers, setOrgMembers] = useState(null);

  const [temp, setTemp] = useState(true);

  const updateValidatedUser = (id, type) => {
    console.log(id);
    console.log(type);
    axios
      .post(
        `https://infinite-wildwood-83288.herokuapp.com/api/webusers/updateVerification/${id}/${type}`
      )
      .then((res) => {
        setTemp(!temp);
      });
  };
  const updateValidatedOrgMember = (id, type) => {
    console.log(id);
    console.log(type);
    axios
      .post(
        `https://infinite-wildwood-83288.herokuapp.com/api/orgmember/updateVerification/${id}/${type}`
      )
      .then((res) => {
        setTemp(!temp);
      });
  };

  const updateEditting = (id, type) => {
    console.log(id);
    console.log(type);
    axios
      .post(
        `https://infinite-wildwood-83288.herokuapp.com/api/webusers/updateEditting/${id}/${type}`
      )
      .then((res) => {
        // console.log(id);
        // console.log(type);
        setTemp(!temp);
      });
  };

  const deleteUser = (id) => {
    console.log("remove by id");
    axios
      .post(
        `https://infinite-wildwood-83288.herokuapp.com/api/webusers/deleteUser/${id}`
      )
      .then((res) => {
        setTemp(!temp);
      });
  };

  const deleteOrgMember = async (id) => {
    console.log("remove by id");
    await axios
      .post(
        `https://infinite-wildwood-83288.herokuapp.com/api/orgmember/deleteMember/${id}`
      )
      .then((res) => {
        setTemp(!temp);
      });
  };

  useEffect(() => {
    axios
      .get("https://infinite-wildwood-83288.herokuapp.com/api/webusers")
      .then((res) => {
        setWebUsers(res.data);
        // console.log(res.data);
      });
    console.log(webUsers);
    axios
      .get("https://infinite-wildwood-83288.herokuapp.com/api/orgmember")
      .then((res) => {
        setOrgMembers(res.data);
        // console.log(res.data);
      });
    console.log(orgMembers);
  }, [temp]);

  return (
    <div className="admin-portal-page">
      {Auth.admin ? (
        <>
          <h1
            className="title"
            style={{ marginTop: "30px", marginLeft: "30px" }}
          >
            Web Users
          </h1>
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
                              updateValidatedUser(user._id, e.target.checked)
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

          <h1
            className="title"
            style={{ marginTop: "30px", marginLeft: "30px" }}
          >
            Organizational Members
          </h1>
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
                              onClick={(e) => deleteOrgMember(member._id)}
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
      ) : (
        <h1>This can only be viewed by the Admin</h1>
      )}
    </div>
  );
};

export default AdminPortal;
