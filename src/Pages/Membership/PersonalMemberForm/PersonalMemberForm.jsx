import "./PersonalMemberForm.scss";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useHttpClient } from "../../../Shared/http-hook";
import { useNavigate } from "react-router";
import { Audio } from "react-loader-spinner";
import axios from "axios";

const PersonalMemberForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const httpClient = useHttpClient();
  const onSubmit = async (data, e) => {
    setLoading(true);
    let arr = data;

    imgStr["curriculum"] = imgStr["0"];
    imgStr["motivational"] = imgStr["1"];
    imgStr["studentship"] = imgStr["2"];

    data = { ...arr, ...imgStr };
    console.log(data);
    const response = await httpClient.sendRequest(
      `https://infinite-wildwood-83288.herokuapp.com/api/personalmember/create`,
      "POST",
      JSON.stringify({
        data,
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
  };

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

  return (
    <form
      className="personal-member-form-page"
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
      <div className="form">
        <h1 className="title">IADS Personal Membership Application Form</h1>

        <div className="row">
          <h1 style={{ fontSize: "20px" }} className="title">
            Personal Contact Information
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Full Name (as in passport)</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="fullname"
              {...register("fullname", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
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
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Country</label>
            <select {...register("country")}>
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
            <label>City</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="city"
              {...register("city")}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Address</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="address"
              {...register("address")}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Postal Code</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="postalCode"
              {...register("postalCode")}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>University</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="university"
              {...register("university")}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Grade</label>
            <select {...register("grade", { required: true })}>
              <option label="Choose..."></option>
              <option value="Year 1">Year 1</option>
              <option value="Year 2">Year 2</option>
              <option value="Year 3">Year 3</option>
              <option value="Year 4">Year 4</option>
              <option value="Year 5">Year 5</option>
              <option value="Year 6">Year 6</option>
              <option value="Intern">Intern</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Year of Graduation (if Applicable)</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="yearOfGraduation"
              {...register("yearOfGraduation")}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Type Here..."
              id="phoneNumber"
              {...register("phoneNumber")}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>WhatsApp Phone Number (if Applicable)</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="whatsappNumber"
              {...register("whatsappNumber")}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Facebook Account</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="faceBook"
              {...register("faceBook")}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>How did you hear about IADS?</label>
            <select {...register("howHeard", { required: true })}>
              <option label="Choose..."></option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Twitter">Twitter</option>
              <option value="Local Association">Local Association</option>
              <option value="Friends and Colleagues">
                Friends and Colleagues
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="row">
          <h1 style={{ fontSize: "20px" }} className="title">
            Personal Contact Information
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Upload your Curriculum Vitae ID</label>
            <input
              style={{ border: "none" }}
              type="file"
              onChange={(e) => {
                uploadImage(e.target.files[0], 0);
                console.log(imgStr);
              }}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Upload your Motivational Letter ID</label>
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
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Upload your Studentship Proof ID</label>
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
              I confirm that all above information is correct and have read the
              terms and conditions.
            </p>
          </div>
        </div>

        <input type="submit" className="submit-btn" />
      </div>
    </form>
  );
};

export default PersonalMemberForm;
