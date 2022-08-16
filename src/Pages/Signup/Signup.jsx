import React from "react";
import { useForm } from "react-hook-form";
import "./Signup.scss";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className="container signup-page" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col flexx">
          <label>User Name*</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="username"
            {...register("username", { required: true })}
          />
        </div>
        <div className="col flexx">
          <label>Personal Email Address*</label>
          <input
            type="email"
            placeholder="Type Here..."
            id="email"
            {...register("email", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col flexx">
          <label>Password*</label>
          <input
            type="password"
            placeholder="Type Here..."
            id="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="col flexx">
          <label>Confirm Password*</label>
          <input
            type="password"
            placeholder="Type Here..."
            id="password"
            {...register("password", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col flexx">
          <label>Full Name*</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="fullName"
            {...register("fullName", { required: true })}
          />
        </div>
        <div className="col flexx">
          <label>Gender</label>
          <select {...register("gender", { required: true })}>
            <option label="Choose..."></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col flexx">
          <label>Country*</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="country"
            {...register("country", { required: true })}
          />
        </div>
        <div className="col flexx">
          <label>Phone Number*</label>
          <input
            type="tel"
            placeholder="Type Here..."
            id="phone"
            {...register("phone", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col flexx">
          <label>Name of University*</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="uni"
            {...register("uni", { required: true })}
          />
        </div>

        <div className="col flexx">
          <label>IADS member association you’re affiliated to*</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="association"
            {...register("association", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col flexx">
          <label>Years of Study*</label>
          <input
            type="number"
            placeholder="Type Here..."
            id="yearsOfStudy"
            {...register("yearsOfStudy", { required: true })}
          />
        </div>

        <div className="col flexx">
          <label>Are you the delegate of your affiliated association?*</label>
          <input
            type="checkbox"
            id="delegate"
            {...register("delegate", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col flexx">
          <label>Year of Graduation*</label>
          <input
            type="number"
            placeholder="Type Here..."
            id="gradYear"
            {...register("gradYear", { required: true })}
          />
        </div>

        <div className="col flexx">
          <label>Are you currently employed in IADS?*</label>
          <input
            type="checkbox"
            placeholder="Type Here..."
            id="iadsEmployed"
            {...register("iadsEmployed", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col flexx">
          <label>If yes, What is your position?*</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="iadsPosition"
            {...register("iadsPosition", { required: true })}
          />
        </div>

        <div className="col flexx">
          <label>Are you an IADS member?*</label>
          <input
            type="checkbox"
            placeholder="Type Here..."
            id="iadsMember"
            {...register("iadsMember", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col flexx">
          <label>If applicable, enter your IADS domain email</label>
          <input
            type="email"
            placeholder="Type Here..."
            id="iadsEmail"
            {...register("iadsEmail", { required: true })}
          />
        </div>
      </div>

      <input type="submit" />
    </form>
  );
}
