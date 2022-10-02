import React from "react";
import "./ContactUs.scss";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

import { useState } from "react";

import logo from "../../Assets/vlogo.svg";

const onSubmit = async (data) => {
  // try {
  //   const response = await httpClient.sendRequest(
  //     // `https://infinite-wildwood-83288.herokuapp.com/api/WebUsers/login`,
  //     `https://infinite-wildwood-83288.herokuapp.com/api/webUsers/login`,
  //     "POST",
  //     JSON.stringify({
  //       data,
  //     }),
  //     {
  //       "Content-Type": "application/json",
  //     }
  //   );
  //   console.log(response);
  //   auth.login(
  //     response.user.id,
  //     response.user.username,
  //     response.user.name,
  //     response.user.validation,
  //     response.user.email,
  //     response.user.editor,
  //     response.user.admin,
  //     response.token
  //   );
  //   setShow(false);
  // } catch (err) {
  //   console.log(httpClient.error);
  // }
  console.log(data);
};

const ContactUs = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="contact-us-page">
      <Modal
        show={show}
        onHide={handleClose}
        className="contact-us-modal"
        size="lg"
        centered
      >
        <Modal.Body className="contact-modal-body">
          {/* <Modal.Header closeButton></Modal.Header> */}
          <div className="contact-modal-logo">
            <img src={logo} />
          </div>
          <div className="right-section">
            <h4 className="login-hdr" style={{ marginBottom: "20px" }}>
              Contact Us
            </h4>
            <p className="desc">
              Any questions or remarks? Write us a message!
            </p>
            <form className="contact-us-form" onSubmit={handleSubmit(onSubmit)}>
              {/* <img src={eicon} /> */}
              <select {...register("who", { required: true })}>
                <option label="Choose whom you wish to contact"></option>
                <option value="IADS President - president@iads-web.org">
                  IADS President - president@iads-web.org
                </option>
                <option value="Vice President of Internal Affairs - vpia@iads-web.org">
                  Vice President of Internal Affairs - vpia@iads-web.org
                </option>
                <option value="Vice President of Public Relations - vppr@iads-web.org">
                  Vice President of Public Relations - vppr@iads-web.org
                </option>
                <option value="Vice President of Exchanges - vpe@iads-web.org">
                  Vice President of Exchanges - vpe@iads-web.org
                </option>
                <option value="Vice President of Science & Research - vpsr@iads-web.org">
                  Vice President of Science & Research - vpsr@iads-web.org
                </option>
                <option value="Vice President of Finances - Vpf@iads-web.org">
                  Vice President of Finances - Vpf@iads-web.org
                </option>
                <option value="Regional Ambassador of Africa - ra.africa@iads-web.org">
                  Regional Ambassador of Africa - ra.africa@iads-web.org
                </option>
                <option value="Regional Ambassador of Americas - ra.americas@iads-web.org">
                  Regional Ambassador of Americas - ra.americas@iads-web.org
                </option>
                <option value="Regional Ambassador of Asia-Pacific - ra.asia.pacific@iads-web.org">
                  Regional Ambassador of Asia-Pacific -
                  ra.asia.pacific@iads-web.org
                </option>
                <option value="Regional Ambassador of Europe - ra.europe@iads-web.org">
                  Regional Ambassador of Europe - ra.europe@iads-web.org
                </option>
                <option value="Regional Ambassador of the Middle-East - ra.middle.east@iads-web.org">
                  Regional Ambassador of the Middle-East -
                  ra.middle.east@iads-web.org
                </option>
                <option value="Training Officer - Training@iads-web.org">
                  Training Officer - Training@iads-web.org
                </option>
                <option value="Voluntary Offcier - voluntary@iads-web.org">
                  Voluntary Offcier - voluntary@iads-web.org
                </option>
                <option value="Public Health Officer - Prophylaxis@iads-web.org">
                  Public Health Officer - Prophylaxis@iads-web.org
                </option>
                <option value="Advisory board - advisory@iads-web.org">
                  Advisory board - advisory@iads-web.org
                </option>
              </select>
              <input
                type="text"
                placeholder="Full Name"
                id="fullName"
                {...register("fullName", { required: true })}
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                {...register("email", { required: true })}
              />
              <input
                type="text"
                placeholder="Write Your Message"
                id="message"
                {...register("message", { required: true })}
                height="185px"
              />
              <button
                id="submit-btn"
                value="Send Message"
                type="submit"
                // onClick={() => {
                //   !httpClient.error && setShow(false);
                // }}
              >
                Send Message
              </button>
            </form>
            <p style={{ color: "red", textAlign: "left", width: "70%" }}>
              {/* {httpClient.error} */}
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <div id="background"></div>
    </div>
  );
};

export default ContactUs;
