import "./OrgMemberForm.scss";
import { useHttpClient } from "../../../Shared/http-hook";

import React from "react";
import { useForm } from "react-hook-form";

export default function OrgMemberForm() {
  const httpClient = useHttpClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await httpClient.sendRequest(
        `http://localhost:3001/api/orgmember/create`,
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

          numberOfMemberSchools: data.numberOfMemberSchools,
          numberOfMemberSstudents: data.numberOfMemberSstudents,

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
            name: data.exchangeOfficerName,
            email: data.exchangeOfficerEmail,
          },
          sceintificOfficer: {
            name: data.sceintificOfficerName,
            email: data.sceintificOfficerEmail,
          },
          trainingOfficer: {
            name: data.trainingOfficerName,
            email: data.trainingOfficerEmail,
          },
          voluntaryOfficer: {
            name: data.voluntaryOfficerName,
            email: data.voluntaryOfficerEmail,
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

          //   data,
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
    <form className="container-fluid orgForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
        <div className="row">
          <div className="col">
            <label>Full name in English*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="fullname"
              {...register("fullname", { required: true })}
            />
          </div>
          <div className="col">
            <label>Abbreviated Name*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="abbreviatedName"
              {...register("abbreviatedName", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Full Name in National Language</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="fullnameNat"
              {...register("fullnameNat", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Country*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="country"
              {...register("country", { required: true })}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label>Address*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="address"
              {...register("address", { required: true })}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label></label>
          </div>
          <div className="col">
            <label></label>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <label>Phone Code*</label>
                <input
                  type="tel"
                  placeholder="Type Here..."
                  id="phoneCode"
                  {...register("phoneCode", { required: true })}
                />
              </div>
              <div className="col">
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
          <div className="col">
            <label>Fax Number*</label>
            <input
              type="tel"
              placeholder="Type Here..."
              id="faxNumber"
              {...register("faxNumber", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Email of The Official Delegate</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="delegateEmail"
              {...register("delegateEmail", { required: true })}
            />
          </div>
          <div className="col">
            <label>Website*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="website"
              {...register("website", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Date of Establishment</label>
            <input
              type="date"
              placeholder="Type Here..."
              id="dateOfEstablishment"
              {...register("dateOfEstablishment", { required: true })}
            />
          </div>
          <div className="col">
            <label>Number of Member Schools (Universities)</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="numOfMemberSchools"
              {...register("numOfMemberSchools", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Number of Member Students</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="numOfMemberSstudents"
              {...register("numOfMemberSstudents", { required: true })}
            />
          </div>
          <div className="col">
            <label>Requested Membership Type</label>
            <select
              {...register(" requestedMembershipType", { required: true })}
            >
              <option value="Full National">Full National</option>
              <option value="Full Local Corresponding">
                Full Local Corresponding
              </option>
              <option value="Affiliate">Affiliate</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Name of President</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="presidentName"
              {...register("presidentName", { required: true })}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label>Name of Secretary</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="secretaryName"
              {...register("secretaryName", { required: true })}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label>Name of Treasurer</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="treasurerName"
              {...register("treasurerName", { required: true })}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label>Name of Exchange Officer</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="exchangeName"
              {...register("exchangeName", { required: true })}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label>Name of Scientific Officer</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="scientificName"
              {...register("scientificName", { required: true })}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label>Name of Training Officer</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="trainingName"
              {...register("trainingName", { required: true })}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label>Name of Voluntary Officer</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="voluntaryName"
              {...register("voluntaryName", { required: true })}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label>Phone Number of IADS Delegate</label>
            <input
              type="tel"
              placeholder="Type Here..."
              id="delegate1Phone"
              {...register("delegate1Phone", { required: true })}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label>Name of Second IADS Delegate</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="delegate2Name"
              {...register("delegate2Name", {})}
            />
          </div>
          <div className="col">
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
          <div className="col">
            <label>Phone Number of Second IADS Delegate</label>

            <input
              type="tel"
              placeholder="Type Here..."
              id="delegate2Phone"
              {...register("delegate2Phone", {})}
            />
          </div>
          <div className="col">
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
        <input type="submit" className="submit-btn" />
      </div>
    </form>
  );
}
