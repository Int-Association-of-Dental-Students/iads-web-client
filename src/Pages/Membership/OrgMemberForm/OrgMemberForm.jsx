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
          listOfSchools: data.listOfSchools,

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
            name: data.delegateName,
            email: data.delegateEmail,
            phoneNumber: data.delegatePhone,
            whatsapp: data.delegateWhatsapp,
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
            Organization Identity
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Full name in English*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="fullname"
              {...register("fullname", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Abbreviated Name*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="abbreviatedName"
              {...register("abbreviatedName", { required: false })}
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
              {...register("fullnameNat", { required: false })}
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
            <select id="country" {...register("country")}>
              <option label="Choose..."></option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="The Bahamas">The Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo, Democratic Republic of the">
                Congo, Democratic Republic of the
              </option>
              <option value="Congo, Republic of the">
                Congo, Republic of the
              </option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Côte d’Ivoire">Côte d’Ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor (Timor-Leste)">
                East Timor (Timor-Leste)
              </option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="The Gambia">The Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, North">Korea, North</option>
              <option value="Korea, South">Korea, South</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">
                Micronesia, Federated States of
              </option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar (Burma)">Myanmar (Burma)</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Qatar">Qatar</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">
                Saint Vincent and the Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Sudan, South">Sudan, South</option>
              <option value="Suriname">Suriname</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City">Vatican City</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>City*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="city"
              {...register("city", { required: false })}
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
              {...register("address", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Postal Code*</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="postalCode"
              {...register("postalCode", { required: false })}
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
              {...register("faxNumber", { required: false })}
            />
          </div>
        </div>

        <div className="row" style={{ paddingBottom: "25px" }}>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Website*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="website"
              {...register("website", { required: false })}
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
              {...register("dateOfEstablishment", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Number of Member Schools (Universities)</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="numOfMemberSchools"
              {...register("numOfMemberSchools", { required: false })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col flexx">
            <label>Names of Member Schools (Universities) </label>
            <p className="desc" style={{ color: "grey" }}>
              Please enter the list of schools separated by a comma ","
            </p>
            <textarea
              // style={{ height: "100px", wid }}
              rows="5"
              type="text"
              placeholder="Type the list of schools separated by a comma ,"
              id="listOfSchools"
              {...register("listOfSchools", { required: false })}
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
              {...register("numOfMemberStudents", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Requested Membership Type</label>
            <select
              {...register("requestedMembershipType", { required: false })}
            >
              <option value="Full National">Full National</option>
              <option value="Full Local">Full Local Corresponding</option>
              <option value="Corresponding">Corresponding</option>
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
              {...register("secretaryName", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Secretary</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="secretaryEmail"
              {...register("secretaryEmail", { required: false })}
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
              {...register("treasurerName", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Treasurer</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="treasurerEmail"
              {...register("treasurerEmail", { required: false })}
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
              {...register("editorName", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Editor</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="editorEmail"
              {...register("editorEmail", { required: false })}
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
              {...register("exchangeName", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Exchange Officer</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="exchangeEmail"
              {...register("exchangeEmail", { required: false })}
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
              {...register("scientificName", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Scientific Officer</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="scientificEmail"
              {...register("scientificEmail", { required: false })}
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
              {...register("trainingName", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Training Officer</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="trainingEmail"
              {...register("trainingEmail", { required: false })}
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
              {...register("voluntaryName", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of Voluntary Officer</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="voluntaryEmail"
              {...register("voluntaryEmail", { required: false })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of IADS Delegate</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="delegateName"
              {...register("delegateName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Email of IADS Delegate</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="delegateEmail"
              {...register("delegateEmail", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Phone Number of IADS Delegate</label>

            <input
              type="tel"
              placeholder="Type Here..."
              id="delegatePhone"
              {...register("delegatePhone", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>WhatsApp Phone Number of IADS Delegate</label>
            <input
              type="tel"
              placeholder="Type Here..."
              id="delegateWhatsapp"
              {...register("delegateWhatsapp", { required: false })}
            />
          </div>
        </div>
        <br />
        <p className="desc" style={{ fontFamily: "poppins bold" }}>
          In case your Association has a second delegate please specify the
          following:
        </p>

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
