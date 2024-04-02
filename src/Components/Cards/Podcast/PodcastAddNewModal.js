import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Audio } from "react-loader-spinner";
import axios from "axios";
import "./PodcastAddNewModal.scss";

import backend from "../../../utils/backend";

const PodcastAddNewModal = (props) => {
  const [loading, setLoading] = useState(false);
  console.log(props);
  const [imgStr, setImgStr] = useState([]);
  const uploadImage = (img, idx) => {
    let resImg = null;
    const imgAPIKey = "826fbb1f90dacfa942f721a496d71950";
    let formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgAPIKey}`;
    console.log(formData);
    fetch(url, {
      method: "POST",
      body:
        // JSON.stringify({
        formData,
      // })
    })
      .then((res) => res.json())
      .then((result) => {
        resImg = result.data.display_url;
        console.log(resImg);
        console.log("imgbb", result);
        let arr = imgStr;
        arr[idx] = resImg;
        setImgStr(arr);
        console.log(imgStr);
        return resImg;
      });
  };

  const [show, setShow] = useState(props.show);
  console.log(show);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [apply, setApply] = useState(false);
  console.log(show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    let arr = data;
    imgStr["image"] = imgStr["0"];
    data = { ...arr, ...imgStr };

    setLoading(true);
    try {
      await axios({
        method: "post",
        headers: { "Access-Control-Allow-Origin": "*" },
        url: `${backend}api/card/create`,
        data: {
          title: data.title,
          description: data.description,
          image: data.image,
          link: data.link,
          date: data.date,
          type: props.type,
        },
      });
      setLoading(false);
      e.target.reset();
      window.location.reload(false);
    } catch (err) {}
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="podcast-modal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Card</Modal.Title>
        </Modal.Header>
        <form
          className="addNewCard container-fluid"
          onSubmit={handleSubmit(onSubmit)}
        >
          {loading && (
            <div className="loading">
              <Audio
                height="80"
                width="80"
                radius="9"
                color="red"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
              <p
                style={{
                  fontFamily: "POPPINS bold",
                  color: "white",
                  marginTop: "20px",
                }}
              >
                Please Wait...
              </p>
            </div>
          )}
          <Modal.Body>
            <div className="row">
              <div className="col">
                <label>Title</label>
                <br />
                <input
                  type="text"
                  placeholder="title"
                  {...register("title", { required: true })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Description</label> <br />
                <input
                  type="text"
                  placeholder="description"
                  {...register("description", { required: true })}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Date</label> <br />
                <input
                  type="date"
                  placeholder="date"
                  {...register("date", { required: true })}
                />
                {/* <input
                  type="text"
                  placeholder="date"
                  {...register("date", { required: true })}
                /> */}
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Add Image</label>
                <input
                  style={{ border: "none" }}
                  type="file"
                  onChange={(e) => {
                    uploadImage(e.target.files[0], 0);
                    console.log(imgStr);
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Find Out Link</label> <br />
                <input
                  type="url"
                  placeholder="link"
                  {...register("link", { required: true })}
                />
              </div>
            </div>

            <div className="row">
              <input
                className="small-check"
                type="checkbox"
                // checked={apply}
                onClick={(e) => {
                  setApply(!apply);
                  console.log(apply);
                }}
                {...register("apply")}
              />
              <label>Includes Apply Form?</label>
            </div>
            {apply == true && (
              <div className="row">
                <div className="col">
                  <label>Apply form link</label>
                  <br />
                  <input
                    type="url"
                    placeholder="applyURL"
                    {...register("applyURL")}
                  />
                </div>
              </div>
            )}
            {/* <input type="submit" /> */}
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" />
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
            Ok!
          </Button> */}
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default PodcastAddNewModal;
