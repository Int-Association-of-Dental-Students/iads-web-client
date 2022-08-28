import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import "./LoginModal.scss";

import logo from "../Assets/vlogo.svg";
import eicon from "../Assets/mail-icon.svg";

import { useHttpClient } from "../Shared/http-hook";

const LoginModal = (props) => {
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
        `http://localhost:3001/api/WebUsers/login`,
        "POST",
        JSON.stringify({
          data,
        }),
        {
          "Content-Type": "application/json",
        }
      );
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
            <p className="desc">Welcome back! Login to your account.</p>
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
              <input id="submit-btn" value="Login" type="submit" />
            </form>
            <p style={{ color: "red", textAlign: "center" }}>
              {httpClient.error}
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <div id="background"></div>
    </div>
  );
};

export default LoginModal;
