import React from "react";
import { useForm } from "react-hook-form";
import "./Signup.scss";
import { useHttpClient } from "../../Shared/http-hook";
import { useNavigate } from "react-router";

export default function Signup() {
  const navigate = useNavigate();
  const httpClient = useHttpClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.iadsMember === "No") {
      alert(
        "Please apply as a member through membership page. We will inform you once it's live!"
      );
    } else {
      try {
        const response = await httpClient.sendRequest(
          `https://infinite-wildwood-83288.herokuapp.com/api/webUsers/signup`,
          "POST",
          JSON.stringify({
            data,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        alert("Successfully signed up, we will validate your account soon!");
        navigate("/");
      } catch (err) {
        console.log(httpClient.error);
      }
    }

    console.log(data);
  };
  console.log(errors);

  return (
    <form
      className="container-fluid signup-page"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form">
        <h1 className="title">IADS account registration form</h1>
        <div className="row">
          <p
            className="desc"
            style={{ paddingBottom: "25px", borderBottom: "1px solid #C6C6C6" }}
          >
            You need to be an IADS member to sign up. If you are not a member,
            please apply through our{" "}
            <a href="/membership">membership portal.</a>
          </p>
          <div className="col-sm-12 col-lg-6 flexx">
            <label>User Name*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="username"
              {...register("username", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-lg-6 flexx">
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
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Password*</label>
            <input
              type="password"
              placeholder="Type Here..."
              id="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-lg-6 flexx">
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
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Full Name*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="fullName"
              {...register("fullName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-lg-6 flexx">
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
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Country*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="country"
              {...register("country", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-lg-6 flexx">
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
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Name of University*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="uni"
              {...register("uni", { required: true })}
            />
          </div>

          <div className="col-sm-12 col-lg-6 flexx">
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
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Years of Study*</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="yearsOfStudy"
              {...register("yearsOfStudy", { required: true })}
            />
          </div>

          <div className="col-sm-12 col-lg-6 flexx">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <label style={{ marginBottom: "15px" }}>
                Are you the delegate of your affiliated association?*
              </label>
              <input
                style={{ marginLeft: "15px", marginRight: "10px" }}
                id="delegate"
                {...register("delegate", { required: true })}
                type="radio"
                value="Yes"
              />
              Yes
              <input
                style={{ marginLeft: "20px", marginRight: "10px" }}
                id="delegate"
                {...register("delegate", { required: true })}
                type="radio"
                value="No"
              />
              No
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Year of Graduation*</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="gradYear"
              {...register("gradYear", { required: true })}
            />
          </div>

          <div className="col-sm-12 col-lg-6 flexx">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <label style={{ marginBottom: "15px" }}>
                Are you currently employed in IADS?*
              </label>
              <input
                style={{ marginLeft: "15px", marginRight: "10px" }}
                id="iadsEmployed"
                {...register("iadsEmployed", { required: true })}
                type="radio"
                value="Yes"
              />
              Yes
              <input
                style={{ marginLeft: "20px", marginRight: "10px" }}
                id="iadsEmployed"
                {...register("iadsEmployed", { required: true })}
                type="radio"
                value="No"
              />
              No
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 flexx">
            <label>If Currently Employed, What is your position?*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="iadsPosition"
              {...register("iadsPosition", { required: true })}
            />
          </div>

          <div className="col-sm-12 col-lg-6 flexx">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <label style={{ marginBottom: "15px" }}>
                Are you an IADS member?*
              </label>
              <input
                style={{ marginLeft: "15px", marginRight: "10px" }}
                id="iadsMember"
                {...register("iadsMember", { required: true })}
                type="radio"
                value="Yes"
              />
              Yes
              <input
                style={{ marginLeft: "20px", marginRight: "10px" }}
                id="iadsMember"
                {...register("iadsMember", { required: true })}
                type="radio"
                value="No"
              />
              No
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 flexx">
            <label>If applicable, enter your IADS domain email</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="iadsEmail"
              {...register("iadsEmail", { required: true })}
            />
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col d-flex justify-content-start align-items-start">
              <input
                className="small-check"
                type="checkbox"
                placeholder="declare"
                {...register("declare", { required: true })}
              />
              <p style={{ textAlign: "left", margin: "0px" }}>
                I declare that all information provided above is correct.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-start align-items-start">
              <input
                className="small-check"
                type="checkbox"
                placeholder="understand1"
                {...register("understand1", { required: true })}
              />
              <p style={{ textAlign: "left", margin: "0px" }}>
                I understand that if I am not an IADS member, I shall apply for
                personal membership in order for <br /> my account to be
                activated and verified.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-start align-items-start">
              <input
                className="small-check"
                type="checkbox"
                placeholder="understand2"
                {...register("understand2", { required: true })}
              />
              <p style={{ textAlign: "left", margin: "0px" }}>
                I understand and agree to the Terms & Conditions as a user of
                this website.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-start align-items-start">
              <input
                className="small-check"
                type="checkbox"
                placeholder="confirm"
                {...register("confirm", { required: true })}
              />
              <p style={{ textAlign: "left", margin: "0px" }}>
                I confirm that I have read and understood IADS Code of Conduct
                and I declare that I am fully responsible and to be held
                accountable for my behaviour on this website on behalf of myself
                and the organisation I am a member of, and that in no way will I
                discriminate or pose a threat to any users and IADS official’s
                civil rights. I declare that I understand any breach of these
                rules is grounds for being reported to the Triple C and I will
                be subjected to disciplinary sanctions.
              </p>
            </div>
          </div>
        </div>
        <input type="submit" className="submit-btn" />
      </div>
    </form>
  );
}
