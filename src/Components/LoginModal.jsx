import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import "./LoginModal.scss";

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
    <div className="loginModal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{ marginBottom: "20px" }}>Login to your account.</h4>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
            <input value="Login" type="submit" />
          </form>
          <p style={{ color: "red", textAlign: "center" }}>
            {httpClient.error}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginModal;
