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
    <form className="container orgForm" onSubmit={handleSubmit(onSubmit)}>
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
          <label>Phone Number*</label>
          <input
            type="tel"
            placeholder="Type Here..."
            id="phone"
            {...register("phone", { required: true })}
          />
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
          <select {...register(" requestedMembershipType", { required: true })}>
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
            id="president-name"
            {...register("president-name", { required: true })}
          />
        </div>
        <div className="col">
          <label>Email of President</label>
          <input
            type="email"
            placeholder="Type Here..."
            id="president-email"
            {...register("president-email", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>Name of Secretary</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="secretary-name"
            {...register("secretary-name", { required: true })}
          />
        </div>
        <div className="col">
          <label>Email of Secretary</label>
          <input
            type="email"
            placeholder="Type Here..."
            id="secretary-email"
            {...register("secretary-email", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>Name of Treasurer</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="treasurer-name"
            {...register("treasurer-name", { required: true })}
          />
        </div>
        <div className="col">
          <label>Email of Treasurer</label>
          <input
            type="email"
            placeholder="Type Here..."
            id="treasurer-email"
            {...register("treasurer-email", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>Name of Exchange Officer</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="exchange-name"
            {...register("exchange-name", { required: true })}
          />
        </div>
        <div className="col">
          <label>Email of Exchange Officer</label>
          <input
            type="email"
            placeholder="Type Here..."
            id="exchange-email"
            {...register("exchange-email", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>Name of Scientific Officer</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="scientific-name"
            {...register("scientific-name", { required: true })}
          />
        </div>
        <div className="col">
          <label>Email of Scientific Officer</label>
          <input
            type="email"
            placeholder="Type Here..."
            id="scientific-email"
            {...register("scientific-email", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>Name of Training Officer</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="training-name"
            {...register("training-name", { required: true })}
          />
        </div>
        <div className="col">
          <label>Email of Training Officer</label>
          <input
            type="email"
            placeholder="Type Here..."
            id="training-email"
            {...register("training-email", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>Name of Voluntary Officer</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="voluntary-name"
            {...register("voluntary-name", { required: true })}
          />
        </div>
        <div className="col">
          <label>Email of Voluntary Officer</label>
          <input
            type="email"
            placeholder="Type Here..."
            id="voluntary-email"
            {...register("voluntary-email", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>Phone Number of IADS Delegate</label>
          <input
            type="tel"
            placeholder="Type Here..."
            id="delegate1-phone"
            {...register("delegate1-phone", { required: true })}
          />
        </div>
        <div className="col">
          <label>Whatsapp Phone Number of IADS Delegate</label>
          <input
            type="tel"
            placeholder="Type Here..."
            id="delegate1-whatsapp"
            {...register("delegate1-whatsapp", { required: true })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>Name of Second IADS Delegate</label>
          <input
            type="text"
            placeholder="Type Here..."
            id="delegate2-name"
            {...register("delegate2-name", {})}
          />
        </div>
        <div className="col">
          <label>Email of Second IADS Delegate</label>
          <input
            type="email"
            placeholder="Type Here..."
            id="delegate2-email"
            {...register("delegate2-email", {})}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>Phone Number of Second IADS Delegate</label>

          <input
            type="tel"
            placeholder="Type Here..."
            id="delegate2-phone"
            {...register("delegate2-phone", {})}
          />
        </div>
        <div className="col">
          <label>WhatsApp Phone Number of IADS Delegate</label>
          <input
            type="tel"
            placeholder="Type Here..."
            id="delegate2-whatsapp"
            {...register("delegate2-whatsapp", {})}
          />
        </div>
      </div>

      <input type="submit" />
    </form>
  );
}
