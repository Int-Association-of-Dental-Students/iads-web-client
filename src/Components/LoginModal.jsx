import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import "./LoginModal.scss";

import { AuthContext } from "./Context/AuthContext";

import logo from "../Assets/vlogo.svg";
import eicon from "../Assets/mail-icon.svg";

import { useHttpClient } from "../Shared/http-hook";

const LoginModal = (props) => {
  const auth = useContext(AuthContext);
  const [show, setShow] = useState(props.show);
  console.log(show);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(show);

  const httpClient = useHttpClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await httpClient.sendRequest(
        // `https://infinite-wildwood-83288.herokuapp.com/api/WebUsers/login`,
        `https://infinite-wildwood-83288.herokuapp.com/api/webUsers/login`,
        "POST",
        JSON.stringify({
          data,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(response);
      auth.login(
        response.user.id,
        response.user.username,
        response.user.name,
        response.user.validation,
        response.user.email,
        response.user.editor,
        response.user.admin,
        response.token
      );
      setShow(false);
    } catch (err) {
      console.log(httpClient.error);
    }
  };
  console.log(errors);

  return (
    <div className="login-page">
      <Modal
        show={show}
        onHide={handleClose}
        className="loginModal"
        size="lg"
        centered
      >
        <Modal.Body className="modal-body">
          {/* <Modal.Header closeButton></Modal.Header> */}
          <div className="modal-logo">
            <img src={logo} />
          </div>
          <div className="right-section">
            <h4 className="login-hdr" style={{ marginBottom: "20px" }}>
              Login
            </h4>
            <p className="desc">{props.description}</p>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              {/* <img src={eicon} /> */}
              <input
                type="text"
                placeholder="username"
                id="username"
                {...register("username", { required: true })}
              />
              <input
                type="password"
                placeholder="password"
                id="password"
                {...register("password", { required: true })}
              />
              <button
                id="submit-btn"
                value="Login"
                type="submit"
                // onClick={() => {
                //   !httpClient.error && setShow(false);
                // }}
              >
                Login
              </button>
            </form>
            <p style={{ color: "red", textAlign: "left", width: "70%" }}>
              {httpClient.error}
            </p>
            <p className="nam">
              Not a member?{" "}
              <a
                style={{
                  textDecoration: "none",
                  color: "#55C9F3",
                  fontFamily: "Poppins bold",
                }}
                href="/signup"
              >
                Sign up
              </a>{" "}
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <div id="background"></div>
    </div>
  );
};

export default LoginModal;
