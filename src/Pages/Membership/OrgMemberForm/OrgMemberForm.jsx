import "./OrgMemberForm.scss";
import { useHttpClient } from "../../../Shared/http-hook";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Audio } from "react-loader-spinner";
import { useNavigate } from "react-router";

export default function OrgMemberForm() {
  const httpClient = useHttpClient();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
  const [imgStr, setImgStr] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    setLoading(true);
    let arr = data;

    imgStr["letter"] = imgStr["0"];
    imgStr["logo"] = imgStr["1"];
    imgStr["flag"] = imgStr["2"];

    data = { ...arr, ...imgStr };

    try {
      const response = await httpClient.sendRequest(
        `https://infinite-wildwood-83288.herokuapp.com/api/orgmember/create`,
        "POST",
        JSON.stringify({
          fullname: data.fullname,
          abbreviatedName: data.abbreviatedName,
          fullnameNat: data.fullnameNat,
          country: data.country,
          city: data.city,
          address: data.address,
          postalCode: data.postalCode,
          faxNumber: data.faxNumber,
          phone: { code: data.phoneCode, number: data.phone },

          website: data.website,
          dateOfEstablishment: data.dateOfEstablishment,

          numOfMemberSchools: data.numOfMemberSchools,
          numOfMemberStudents: data.numOfMemberStudents,

          requestedMembershipType: data.requestedMembershipType,

          president: {
            name: data.presidentName,
            email: data.presidentEmail,
          },
          secretary: {
            name: data.secretaryName,
            email: data.secretaryEmail,
          },
          treasurer: {
            name: data.treasurerName,
            email: data.treasurerEmail,
          },
          editor: { name: data.editorName, email: data.editorEmail },
          exchangeOfficer: {
            name: data.exchangeName,
            email: data.exchangeEmail,
          },
          scientificOfficer: {
            name: data.scientificName,
            email: data.scientificEmail,
          },
          trainingOfficer: {
            name: data.trainingName,
            email: data.trainingEmail,
          },
          voluntaryOfficer: {
            name: data.voluntaryName,
            email: data.voluntaryEmail,
          },

          delegate1: {
            email: data.delegateEmail,
            phoneNumber: data.delegate1Phone,
            whatsapp: data.delegate1Whatsapp,
          },

          delegate2: {
            name: data.delegate2Name,
            email: data.delegate2Email,
            phoneNumber: data.delegate2Phone,
            whatsapp: data.delegate2Whatsapp,
          },

          letter: data.letter,
          logo: data.logo,
          flag: data.flag,

          //   data,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      alert(
        "Successfully signed up, we will validate your account within 2 to 3 days!"
      );
      setLoading(false);
      e.target.reset();
      navigate("/");
    } catch (err) {
      console.log(httpClient.error);
    }
  };

  console.log(errors);

  return (
    <form className="container-fluid orgForm" onSubmit={handleSubmit(onSubmit)}>
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
      <div className="form">
        <h1 className="title">
          IADS Organizational Membership Application Form
        </h1>

        <div className="row">
          <h1 style={{ fontSize: "20px" }} className="title">
            Personal Contact Information
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Full name in English*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="fullname"
              {...register("fullname", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Abbreviated Name*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="abbreviatedName"
              {...register("abbreviatedName", { required: true })}
            />
          </div>
        </div>

        <div className="row" style={{ paddingBottom: "25px" }}>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Full Name in National Language</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="fullnameNat"
              {...register("fullnameNat", { required: true })}
            />
          </div>
        </div>

        <div
          className="row"
          style={{ paddingTop: "25px", borderTop: "1px solid #C6C6C6" }}
        >
          <h1 style={{ fontSize: "20px" }} className="title">
            Organization Contacts
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Country*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="country"
              {...register("country", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>City*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="city"
              {...register("city", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Address*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="address"
              {...register("address", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Postal Code*</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="postalCode"
              {...register("postalCode", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label></label>
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label></label>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <div className="row">
              {/* <div className="col flexx">
                <label>Phone Code*</label>
                <input
                  type="tel"
                  placeholder="Type Here..."
                  id="phoneCode"
                  {...register("phoneCode", { required: true })}
                  // style={{ width: "100px" }}
                />
              </div> */}
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
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Fax Number*</label>
            <input
              type="tel"
              placeholder="Type Here..."
              id="faxNumber"
              {...register("faxNumber", { required: true })}
            />
          </div>
        </div>

        <div className="row" style={{ paddingBottom: "25px" }}>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of The Official Delegate</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="delegateEmail"
              {...register("delegateEmail", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Website*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="website"
              {...register("website", { required: true })}
            />
          </div>
        </div>

        <div
          className="row"
          style={{ paddingTop: "25px", borderTop: "1px solid #C6C6C6" }}
        >
          <h1 style={{ fontSize: "20px" }} className="title">
            Organization Representation
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Date of Establishment</label>
            <input
              type="date"
              placeholder="Type Here..."
              id="dateOfEstablishment"
              {...register("dateOfEstablishment", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Number of Member Schools (Universities)</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="numOfMemberSchools"
              {...register("numOfMemberSchools", { required: true })}
            />
          </div>
        </div>

        <div className="row" style={{ paddingBottom: "25px" }}>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Number of Member Students</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="numOfMemberStudents"
              {...register("numOfMemberStudents", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Requested Membership Type</label>
            <select
              {...register("requestedMembershipType", { required: true })}
            >
              <option value="Full National">Full National</option>
              <option value="Full Local Corresponding">
                Full Local Corresponding
              </option>
              <option value="Affiliate">Affiliate</option>
            </select>
          </div>
        </div>

        <div
          className="row"
          style={{ paddingTop: "25px", borderTop: "1px solid #C6C6C6" }}
        >
          <h1 style={{ fontSize: "20px" }} className="title">
            Organization Administration
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of President</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="presidentName"
              {...register("presidentName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of President</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="presidentEmail"
              {...register("presidentEmail", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of Secretary</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="secretaryName"
              {...register("secretaryName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Secretary</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="secretaryEmail"
              {...register("secretaryEmail", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of Treasurer</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="treasurerName"
              {...register("treasurerName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Treasurer</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="treasurerEmail"
              {...register("treasurerEmail", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of Editor</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="editorName"
              {...register("editorName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Editor</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="editorEmail"
              {...register("editorEmail", { required: true })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of Exchange Officer</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="exchangeName"
              {...register("exchangeName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Exchange Officer</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="exchangeEmail"
              {...register("exchangeEmail", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of Scientific Officer</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="scientificName"
              {...register("scientificName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Scientific Officer</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="scientificEmail"
              {...register("scientificEmail", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of Training Officer</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="trainingName"
              {...register("trainingName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Training Officer</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="trainingEmail"
              {...register("trainingEmail", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of Voluntary Officer</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="voluntaryName"
              {...register("voluntaryName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Voluntary Officer</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="voluntaryEmail"
              {...register("voluntaryEmail", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Phone Number of IADS Delegate</label>
            <input
              type="tel"
              placeholder="Type Here..."
              id="delegate1Phone"
              {...register("delegate1Phone", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Whatsapp Phone Number of IADS Delegate</label>
            <input
              type="tel"
              placeholder="Type Here..."
              id="delegate1Whatsapp"
              {...register("delegate1Whatsapp", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of Second IADS Delegate</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="delegate2Name"
              {...register("delegate2Name", {})}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Second IADS Delegate</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="delegate2Email"
              {...register("delegate2Email", {})}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Phone Number of Second IADS Delegate</label>

            <input
              type="tel"
              placeholder="Type Here..."
              id="delegate2Phone"
              {...register("delegate2Phone", {})}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>WhatsApp Phone Number of IADS Delegate</label>
            <input
              type="tel"
              placeholder="Type Here..."
              id="delegate2Whatsapp"
              {...register("delegate2Whatsapp", {})}
            />
          </div>
        </div>

        <div className="row">
          <div className="col flexx">
            <h1
              style={{ fontSize: "20px", marginTop: "25px" }}
              className="title"
            >
              Attachments
            </h1>
            <label>
              Upload an official letter with the association's letter head and
              the President\General Secretary signature and stamps proving this
              is the official delegate
            </label>
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
          <div className="col flexx">
            <label>Upload Logo of your Association</label>
            <input
              style={{ border: "none" }}
              type="file"
              onChange={(e) => {
                uploadImage(e.target.files[0], 1);
                console.log(imgStr);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col flexx">
            <label>Upload a Flag of your Association/Country</label>
            <input
              style={{ border: "none" }}
              type="file"
              onChange={(e) => {
                uploadImage(e.target.files[0], 2);
                console.log(imgStr);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-start align-items-start">
            <input
              className="small-check"
              type="checkbox"
              placeholder="confirm"
              {...register("confirm", { required: true })}
            />
            <p style={{ textAlign: "left", margin: "0px" }}>
              I confirm that all above information is correct.
            </p>
          </div>
        </div>
        {httpClient.error && <p style={{ color: "red" }}>{httpClient.error}</p>}
        <input type="submit" className="submit-btn" />
      </div>
    </form>
  );
}
