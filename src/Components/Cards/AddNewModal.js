import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import "./AddNewModal.scss";
const AddNewModal = (props) => {
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
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Card</Modal.Title>
        </Modal.Header>
        <form
          className="addNewCard container-fluid"
          onSubmit={handleSubmit(onSubmit)}
        >
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
                onChange={(e) => {
                  setApply(true);
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

export default AddNewModal;
