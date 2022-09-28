import React, { useEffect, useState } from "react";
import "./AdminPortal.scss";

import { AuthContext } from "../../Components/Context/AuthContext";
import { useContext } from "react";

import { Table } from "react-bootstrap";

import axios from "axios";

const AdminPortal = () => {
  const Auth = useContext(AuthContext);
  const [webUsers, setWebUsers] = useState([{}, {}]);

  const [temp, setTemp] = useState(true);

  const updateValidated = (id, type) => {
    console.log(id);
    console.log(type);
    axios
      .post(
        `https://infinite-wildwood-83288.herokuapp.com/api/webusers/updateVerification/${id}/${type}`
      )
      .then((res) => {
        // console.log(id);
        // console.log(type);
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

  useEffect(() => {
    axios
      .get("https://infinite-wildwood-83288.herokuapp.com/api/webusers")
      .then((res) => {
        setWebUsers(res.data);
        // console.log(res.data);
        console.log(webUsers);
      });
  }, [temp]);

  return (
    <div className="admin-portal-page">
      {Auth.admin ? (
        <div
          className="member-table"
          style={{ marginBottom: "0px !important" }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                {/* <th>Gender</th> */}
                <th>Country</th>
                <th>Phone</th>
                <th>University</th>
                <th>Association</th>
                {/* <th>Years Of Study</th> */}
                <th>Delegate</th>
                <th>Grad Year</th>
                <th>iads Employed</th>
                <th>iads Member</th>
                <th>iads Position</th>
                <th>iads Email</th>
                <th>Validated</th>
                <th>Editor</th>
              </tr>
            </thead>
            <tbody>
              {webUsers.map((user) => (
                // <div>{user.fullName}</div>;
                <tr>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  {/* <td>{user.gender}</td> */}
                  <td>{user.country}</td>
                  <td>{user.phone}</td>
                  <td>{user.uni}</td>
                  <td>{user.association}</td>
                  {/* <td>{user.yearsOfStudy}</td> */}
                  <td>{user.delegate}</td>
                  <td>{user.gradYear}</td>
                  <td>{user.iadsEmployed}</td>
                  <td>{user.iadsMember}</td>
                  <td>{user.iadsPosition}</td>
                  <td>{user.iadsEmail}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={user.validation}
                      onChange={(e) =>
                        updateValidated(user._id, e.target.checked)
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <h1>This can only be viewed by the Admin</h1>
      )}
    </div>
  );
};

export default AdminPortal;
