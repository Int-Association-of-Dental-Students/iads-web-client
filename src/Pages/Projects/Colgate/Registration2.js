import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import axios from "axios";
import { Audio } from "react-loader-spinner";

import step1 from "../../../Assets/Projects/Colgate/step1.svg";
import step2 from "../../../Assets/Projects/Colgate/step2.svg";
import step3 from "../../../Assets/Projects/Colgate/step3.svg";
import step4 from "../../../Assets/Projects/Colgate/step4.svg";
import step5 from "../../../Assets/Projects/Colgate/step5.svg";

import fileUpload from "../../../Assets/Projects/Colgate/fileUpload.svg";

import "./Registration2.scss";

const Registration2 = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    setLoading(true);
    console.log(data);
    data = { ...data, ...imgStr };
    e.preventDefault();

    // try {
    //   await axios
    //     .post(
    //       "https://sheet.best/api/sheets/f9231cdc-76f3-43ee-a9c0-159ed2649351",
    //       data
    //     )
    //     .then((response) => {
    //       console.log(response);
    //     });
    // } catch (err) {
    //   console.log(err);
    // }

    // emailjs
    //   .sendForm(
    //     "service_zhe1pvp",
    //     "template_gedxh1p",
    //     e.target,
    //     "Blp53EzBsHt7ji3lO"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(e.target);
    //       //   setloading(false);
    //       //   setModalTitle("Congratulations");
    //       //   setRefresh(true);
    //       //   setError(
    //       //     "Your results has been sent, check your email for payment instructions"
    //       //   );
    //     },
    //     (error) => {
    //       //   setloading(false);
    //       //   setModalTitle("Error");
    //       //   setError(error.text);
    //       console.log(error);
    //       return;
    //     }
    //   );

    // alert(
    //   "Your Idea submission has been successfully completed. Kindly check your email inbox for confirmation mail."
    // );

    setLoading(false);
  };

  console.log(errors);

  const [members, setMembers] = useState([
    { name: "", position: "", tasks: "" },
  ]);

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

  const handleFormChange = (index, event) => {
    let data = [...members];
    data[index][event.target.name] = event.target.value;
    setMembers(data);
  };
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const addMember = (e) => {
    e.preventDefault();
    if (members.length >= 3) return;
    let newfield = { name: "", age: "" };

    setMembers([...members, newfield]);
  };

  const removeMember = (index) => {
    let data = [...members];
    data.splice(index, 1);
    setMembers(data);
  };

  return (
    <>
      {loading ? (
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
      ) : (
        <div className="regs2-page container-fluid">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="regs2 container-fluid"
          >
            <div className="step">
              <div className="steptext">
                <h4>Step 1</h4>
                <p>Personal & Contact Information</p>
              </div>
              <img className="step-img" src={step1} alt="" />
              <div className="row">
                <div className="col">
                  <label htmlFor="name">Full Name*</label>
                  <input
                    type="text"
                    placeholder="Type..."
                    {...register("name", {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                </div>
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email Address*"
                    {...register("email", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="gender">Gender</label>
                  <select {...register("gender", { required: true })}>
                    <option label="Choose..."></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="nationality">Nationality</label>
                  <select {...register("nationality", { required: true })}>
                    <option label="Choose..."></option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Antigua & Deps">Antigua & Deps</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia Herzegovina">
                      Bosnia Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina">Burkina</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Central African Rep">
                      Central African Rep
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo {Democratic Rep}">
                      Congo Democratic Rep
                    </option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
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
                    <option value="Ireland {Republic}">Ireland Republic</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Ivory Coast">Ivory Coast</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea North">Korea North</option>
                    <option value="Korea South">Korea South</option>
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
                    <option value="Macedonia">Macedonia</option>
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
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Burma">Burma</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="St Kitts & Nevis">St Kitts & Nevis</option>
                    <option value="St Lucia">St Lucia</option>
                    <option value="Saint Vincent & the Grenadines">
                      Saint Vincent & the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome & Principe">
                      Sao Tome & Principe
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
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
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
              </div>
            </div>

            <div className="step">
              <div className="steptext">
                <h4>Step 2</h4>
                <p>Affiliation</p>
              </div>
              <img className="step-img" src={step2} alt="" />
              <div className="row">
                <div className="col">
                  <label htmlFor="affiliated">
                    Affiliated IADS Member Association*
                  </label>
                  <input
                    type="text"
                    placeholder="Type..."
                    {...register("affiliated", {
                      required: true,
                    })}
                  />
                </div>
                {/* <div className="col">
              <label htmlFor="delegateEmail">
                Official Email of the Delegate*
              </label>
              <input
                type="email"
                placeholder="Type..."
                {...register("Official Email of the Delegate*", {
                  required: true,
                })}
              />
            </div> */}
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="country">Country</label>
                  <select {...register("country", { required: true })}>
                    <option label="Choose..."></option>
                    <option value="Croatia">Croatia</option>
                    <option value="Czech republic">Czech republic</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="North Cyprus">North Cyprus</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Romania">Romania</option>
                    <option value="Romania">Romania</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="uni">Name of University*</label>
                  <input
                    type="text"
                    placeholder="Type..."
                    {...register("uniName", { required: true })}
                  />
                </div>
              </div>
            </div>

            <div className="step">
              <div className="steptext">
                <h4>Step 3</h4>
                <p>Project Details</p>
              </div>
              <img className="step-img" src={step3} alt="" />

              <div className="row">
                <div className="col">
                  <label className="pTitle" htmlFor="pTitle">
                    Project Title*
                  </label>
                  <input
                    type="text"
                    placeholder="Type..."
                    {...register("projectTitle", { required: true })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="idea">Idea Type*</label>
                  <select {...register("idea", { required: true })}>
                    <option label="Choose..."></option>
                    <option value="Oral care">Oral care</option>
                    <option value="Household care">Household care</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Pet Nutrition">Pet Nutrition</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Digital Platforms">Digital Platforms</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Product">Product</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="specifyIdea">
                    Specify Idea (if other was chosen)
                  </label>
                  <input
                    type="text"
                    placeholder="specifyIdea"
                    {...register("specifyIdea", { required: false })}
                  />
                </div>
              </div>
            </div>

            <div className="step">
              <div className="steptext"></div>
              <div className="row">
                <div className="col">
                  <label className="pTitle" htmlFor="projectSummary">
                    Project Summary*
                  </label>
                  <textarea
                    type="text"
                    style={{ height: "175px", alignSelf: "flex-start" }}
                    placeholder="Please explain the benefit of your proposition and how it is better than other solutions."
                    {...register("projectSummary", { required: true })}
                  />
                </div>
              </div>
            </div>

            <div className="step">
              <div className="steptext"></div>
              <div
                className="row"
                style={{ display: "flex", flexDirection: "horizontal" }}
              >
                <div className="col">
                  <label>Have you licensed your idea?*</label>
                  <select {...register("licensed", { required: true })}>
                    <option label="Choose..."></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="col">
                  <label>Patent Status</label>
                  <select {...register("patentStatus", { required: true })}>
                    <option label="Choose..."></option>
                    <option value="I have a published patent">
                      I have a published patent
                    </option>
                    <option value="I do not have a published patent">
                      I do not have a published patent
                    </option>
                    <option value="Patent pending">Patent pending</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="steptext"></div>
              <div
                className="row step4"
                style={{
                  display: "flex",
                  flexDirection: "horizontal",
                  justifyContent: "space-between",
                }}
              >
                <div className="col">
                  <label>
                    What is the desired outcome? (check all that applies)*
                  </label>
                  <div className="check">
                    <input
                      type="checkbox"
                      name="chk-research"
                      id="chk-research"
                      placeholder="chk-research"
                      {...register("chk-research", {})}
                      style={{ marginRight: "5px" }}
                    />
                    <label for="chk-research">Research & Development</label>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      name="chk-supply"
                      id="chk-supply"
                      placeholder="chk-supply"
                      {...register("chk-supply", {})}
                      style={{ marginRight: "5px" }}
                    />
                    <label for="chk-supply">Supply</label>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      name="chk-license"
                      id="chk-license"
                      placeholder="chk-license"
                      {...register("chk-license", {})}
                      style={{ marginRight: "5px" }}
                    />
                    <label for="chk-license">Licensing</label>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      name="chk-patent"
                      id="chk-patent"
                      placeholder="chk-patent"
                      {...register("chk-patent", {})}
                      style={{ marginRight: "5px" }}
                    />
                    <label for="chk-patent">Patent Sale</label>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      name="chk-joint"
                      id="chk-joint"
                      placeholder="chk-joint"
                      {...register("chk-joint", {})}
                      style={{ marginRight: "5px" }}
                    />
                    <label for="chk-joint">Joint Development</label>
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="">
                    Paste the link to your motivational video*
                  </label>
                  <input
                    type="text"
                    placeholder="Paste Here..."
                    {...register("motivationalLink", { required: true })}
                  />
                  <label htmlFor="">
                    Paste the link to your pitch presentation*
                  </label>
                  <input
                    type="text"
                    placeholder="Paste Here..."
                    {...register("pitchPresentation", { required: true })}
                  />
                </div>
              </div>
            </div>

            <div className="step">
              <div className="steptext">
                <h4>Step 4</h4>
                <p>Team Details</p>
              </div>
              <img className="step-img" src={step4} alt="" />
              <div
                className="row"
                style={{
                  display: "flex",
                  flexDirection: "horizontal",
                  justifyContent: "space-between",
                }}
              >
                <div className="col">
                  <label>Number of Members* (max. 3)</label>
                  <input
                    type="number"
                    placeholder="1 - 3"
                    {...register("numMembers", {
                      required: true,
                      max: 3,
                      min: 1,
                      maxLength: 3,
                    })}
                  />
                </div>
                <div className="col">
                  <label>Team Name*</label>
                  <input
                    type="text"
                    placeholder="Type Here..."
                    {...register("teamLeader", { required: true })}
                  />
                </div>
              </div>
            </div>

            <div className="container">
              {/* <div className="row"> */}
              {members.map((input, index) => {
                return (
                  <div className="step">
                    <div className="steptext"></div>
                    <div
                      className="row"
                      style={{
                        display: "flex",
                        flexDirection: "horizontal",
                        // justifyContent: "space-between",
                      }}
                      key={index}
                    >
                      <div className="col">
                        <label>Member Full Name</label>
                        <input
                          key={index}
                          type="text"
                          placeholder="Type ..."
                          // value={input.name}
                          onChange={(event) => handleFormChange(index, event)}
                          {...register(`memberName${index}`, {
                            required: true,
                          })}
                        />
                      </div>
                      <div className="col">
                        <label>Position in Team</label>
                        <input
                          key={index}
                          type="text"
                          placeholder="Type ..."
                          // value={input.name}
                          onChange={(event) => handleFormChange(index, event)}
                          {...register(`memberPos${index}`, { required: true })}
                        />
                      </div>

                      <div className="row">
                        <div className="col">
                          <label>Tasks Assigned</label>
                          <input
                            key={index}
                            type="text"
                            placeholder="Type ..."
                            // value={input.name}
                            onChange={(event) => handleFormChange(index, event)}
                            {...register(`memberTasks${index}`, {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <button
                        className="col-1 remove-btn"
                        onClick={() => removeMember(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}

              <button className="add-btn" onClick={(e) => addMember(e)}>
                Add Member
              </button>

              {/* </div> */}
            </div>

            <div className="step">
              <div className="col">
                <div
                  className="file-upload flexx"
                  style={{ alignItems: "center" }}
                >
                  <label
                    className="flexx"
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    for="custom-file"
                  >
                    <Button onClick={handleClick} component="span">
                      <img src={fileUpload} />
                    </Button>
                    <p className="greyed">PDF, JPEG, PNG, SVG</p>
                  </label>
                  <p>Upload Flag/Logo</p>
                </div>
                <input
                  style={{ marginBottom: "20px" }}
                  id="custom-file"
                  name="logoFile"
                  onChange={(e) => {
                    uploadImage(e.target.files[0], 0);
                    console.log(imgStr);
                  }}
                  type="file"
                  ref={hiddenFileInput}
                />
              </div>
            </div>
            <div className="row">
              <div className="check">
                <input
                  id="chk-agree"
                  type="checkbox"
                  placeholder="agreement"
                  {...register("agreement", { required: true })}
                  style={{ marginRight: "10px" }}
                />
                <label>
                  I agree to the terms and conditions stated below. (scroll for
                  more)
                </label>
              </div>
            </div>
            {/* ////////////////// */}

            <div
              className="row terms"
              style={{
                background: "#D7D7D7",
                border: "1px solid #CDB1F2",
                height: "460px",
                overflowY: "scroll",
              }}
            >
              <p style={{ textAlign: "left" }}>
                By submitting Ideas (as defined below) through this idea
                submission portal ("Portal"), you agree to all terms,
                conditions, and notices contained or referenced below
                ("Agreement") and in the Privacy Policy of this Portal (“Privacy
                Policy”). If you do not agree with the terms, conditions and
                notices of this Agreement or the Privacy Policy (collectively,
                "Terms"), please do not submit Ideas through this Portal.
                <br /> <br />
                As used in this Agreement, the term "Idea(s)" means an idea,
                innovation or invention which is owned by you. Your submission
                of an Idea is subject to the following terms and conditions:
                <br /> <br />
                1. CONFIDENTIAL IDEAS: IADS will not consider any Ideas that are
                confidential or that are subject to any restrictions of or by a
                third party. We will not accept any Idea in confidence, or on
                the basis that a confidential relationship is created or exists
                between you and IADS, or under a guarantee that we shall
                maintain the Idea in secret, or on the basis that, apart from
                this Agreement, an agreement exists, either implied or explicit,
                or that we will compensate you for our evaluation and/or use of
                your Idea. By submitting an Idea through this Portal, you
                acknowledge that such Idea is by definition non-confidential and
                IADS may share such Idea throughout its organization with no
                obligation to keep it confidential.
                <br /> <br />
                2. PATENTED IDEAS: We will consider an Idea that is patented or
                the subject of a pending published patent application only if
                you agree to rely exclusively on your rights under relevant
                patent statutes or laws. You understand that you should file for
                a patent before disclosing your Idea to anyone (including IADS
                or any other party) on a non-confidential basis or you may risk
                losing the ability to protect your Ideas according to applicable
                patent law. You acknowledge that IADS is is not providing you
                with any legal advice herein or in relation to an Idea. You may
                wish to consult with a patent attorney prior to submission of
                any Idea.
                <br /> <br />
                3. NO RETURN OF MATERIALS: By submitting an Idea, you
                acknowledge that IADS is under no obligation to return any
                materials to you. Thus, you should not furnish us with anything
                you expect to be returned. You further agree to allow IADS to
                maintain and keep a copy of your Idea for its records.
                <br /> <br />
                4. IP RIGHTS: By submitting an Idea, you:
                <br /> <br />
                4.1. Represent that you own all intellectual property rights,
                including patents, trademarks and copyrights (collectively “IP
                Rights”) in or to the Idea.
                <br /> <br />
                4.2. Agree to, and hereby do, grant a limited right to your IP
                Rights in the Idea to IADS for the purpose of allowing IADS to
                review and evaluate the Idea.
                <br /> <br />
                4.3. Agree to waive any claims against IADS in connection with
                their review and evaluation of the Idea.
                <br /> <br />
                5. NO WAIVER OF RIGHTS BY IADS: Acceptance or review of Ideas
                shall not constitute a waiver by us of any rights we had or may
                have with respect to ideas, products, inventions or information
                that are proprietary to us, developed or created by us or owned
                by us whether such rights arise out of an employment
                relationship or any other type of relationship, contract or
                communication. You explicitly acknowledge that IADS may have
                independently and already developed your Idea or may
                independently be in the process of developing ideas or concepts
                similar to your Idea. IADS shall have no liability to you
                arising out of this Agreement for any such independent creation,
                regardless of whether such creation is in the past, present or
                future.
                <br /> <br />
                6. IADS IS SOLE JUDGE: We will be the sole judge of our interest
                in your Idea after evaluation. We, in our sole discretion, may
                decide whether to (1) contact you regarding the Idea submitted,
                (2) engage in further discussions regarding the Idea submitted,
                and/or (3) accept the Idea submitted and to enter into an
                agreement related thereto.
                <br /> <br />
                7. NO OBLIGATION OF CONTACT OR FUTURE AGREEMENT: If we decide
                not to use your Idea, we are not obligated to contact you and/or
                give you any reason for this decision. Any discussion we may
                have with you relating to your Idea or any offers we may make to
                you shall not bind either of us unless and until both of us
                enter into a definitive written agreement. Such agreement will
                define all rights and obligations that either of us may have. No
                discussion or offer shall be deemed or inferred to be an
                admission of novelty, priority, or originality of your Idea, or
                that our discussion will lead to a contract or business
                relationship between the parties.
                <br /> <br />
                8. REPRESENTATIONS: You, the submitter, represent and warrant
                that:
                <br /> <br />
                8.1. Your disclosure of your Idea and any other information you
                submit to us is not in violation of any commitment or obligation
                to any former or present employer, or any other third party or
                organization;
                <br /> <br />
                8.2. You own the entire right, title, and interest in and to the
                Idea(s) and any other information that you are submitting;
                <br /> <br />
                8.3. You have the full and unconditional right to disclose your
                Idea and any other information you submit to us, and you have
                not entered into an agreement with any other party regarding the
                Idea that may impede such rights;
                <br /> <br />
                8.4. To the best of your knowledge, IADS is not practicing
                and/or utilizing your Idea nor has it done so in the past;
                <br /> <br />
                8.5. Your Idea does not violate any applicable law or the rights
                of any third party;
                <br /> <br />
                8.6. You are at least 18 years old; and
                <br /> <br />
                8.7. an IADS member country in good standing
                <br /> <br />
                8.8 Your Idea is not confidential or subject to any
                restrictions, adverse claims or disputes of or by any third
                party.
                <br /> <br />
                9. RELEASE OF LIABILITY: In consideration of IADS evaluating
                your Idea, you release IADS from any and all liability with
                respect to your Idea. Of course, you understand that IADS
                reserves the right to assert any and all defenses with respect
                to any claims involving your Idea.
                <br /> <br />
                10. PERSONAL DATA: You understand that any personal data (such
                as contact information) is subject to IADS’s Privacy Policy.
                <br /> <br />
                11. ENTIRE AGREEMENT: You agree that this this Agreement
                contains the entire understanding between you and IADS and
                supersedes any and all prior agreements, understandings and
                arrangements whether written or oral that may exist between you
                and IADS with respect to the matters contained in this
                Agreement. No amendments, changes, modifications or alterations
                of the terms and conditions of this Agreement shall be binding
                upon you or IADS, unless in writing and signed by you and IADS.
              </p>
            </div>

            <input className="submit-btn" type="submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default Registration2;
