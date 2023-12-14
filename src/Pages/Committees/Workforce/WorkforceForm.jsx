import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./WorkforceForm.scss";
import { useNavigate } from "react-router";
import axios from "axios";
import { useHttpClient } from "../../../Shared/http-hook";

const WorkforceForm = () => {
  const httpClient = useHttpClient();
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
        // return result;
        resImg = result.data.display_url;
        console.log(resImg);
        console.log("imgbb", result);
        // setimgStr({resImg});

        let arr = imgStr;
        arr[idx] = resImg;

        setImgStr(arr);
        // imgStr[idx] = resImg;
        console.log(imgStr);
        return resImg;
      });
  };

  const onSubmit = async (data, e) => {
    let arr = data;

    imgStr["img1"] = imgStr["0"];
    // delete imgStr["0"];
    imgStr["img2"] = imgStr["1"];
    // delete imgStr["1"];
    imgStr["img3"] = imgStr["2"];
    // delete imgStr["2"];
    imgStr["img4"] = imgStr["3"];
    // delete imgStr["3"];

    const data2 = { ...arr, ...imgStr };
    console.log(data2);

    try {
      axios
        .post(
          "https://sheet.best/api/sheets/a0cbd69d-c337-4b6e-aed6-c711bfce5f72",
          data2
        )
        .then((response) => {
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }

    try {
      emailjs
        .sendForm(
          "service_y75hwxc",
          "template_odzh3nc",
          e.target,
          "Blp53EzBsHt7ji3lO"
        )
        .then(
          (result) => {
            console.log(data2);
          },
          (error) => {
            console.log(error);
            return;
          }
        );

      alert("Your form has been submitted successfully!");
      e.target.reset();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   const img = "../../../Assets/About/Mission/Hero.svg";
  //   uploadImage(img);
  // }, []);

  const [img1, setimg1] = useState();
  const [img2, setimg2] = useState();
  const [img3, setimg3] = useState();
  const [img4, setimg4] = useState();

  const [imgStr, setImgStr] = useState([]);

  const [img1Str, setimg1Str] = useState();
  const [img2Str, setimg2Str] = useState();
  const [img3Str, setimg3Str] = useState();
  const [img4Str, setimg4Str] = useState();

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
    }
  };

  return (
    <form
      className="container-fluid workforce-form-page"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form">
        <h1 className="title">Workforce Application form</h1>
        <div className="row">
          <p
            className="desc"
            style={{ paddingBottom: "25px", borderBottom: "1px solid #C6C6C6" }}
          >
            You need to be an IADS member to sign up. If you are not a member,
            please apply through our{" "}
            <a
              style={{ fontFamily: "Poppins bold", textDecoration: "none" }}
              href="/membership"
            >
              membership portal.
            </a>
          </p>
        </div>

        <div className="row">
          <h1 style={{ fontSize: "20px" }} className="title">
            Personal Contact Information
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Full Name*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="fullName"
              {...register("fullName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
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
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Gender</label>
            <select id="gender" {...register("gender", { required: true })}>
              <option label="Choose..."></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Country*</label>
            <select id="country" {...register("country", { required: true })}>
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
              <option value="PakistanPalestine">PakistanPalestine</option>
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
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Phone Number*</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="phone"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Whatsapp Phone Number*</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="whatsapp"
              {...register("whatsapp", { required: true })}
            />
          </div>
        </div>

        <div className="row" style={{ paddingBottom: "25px" }}>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Instagram Tag</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="insta"
              {...register("insta", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Facebook URL</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="facebook"
              {...register("facebook", { required: false })}
            />
          </div>
        </div>

        <div
          className="row"
          style={{ paddingTop: "25px", borderTop: "1px solid #C6C6C6" }}
        >
          <h1 style={{ fontSize: "20px" }} className="title">
            Affiliation
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Name of University</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="uni"
              {...register("uni", { required: false })}
            />
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Country of Studies</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="studyCountry"
              {...register("studyCountry", { required: false })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Years of Study*</label>

            <select
              id="yearsOfStudy"
              {...register("yearsOfStudy", { required: true })}
            >
              <option label="Choose..."></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="Internship">Internship</option>
              <option value="Graduated">Graduated</option>
            </select>
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Year of Graduation*</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="gradYear"
              {...register("gradYear", { required: true })}
            />
          </div>
        </div>

        <div className="row" style={{ paddingBottom: "25px" }}>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>IADS member association you’re affiliated to*</label>
            <select
              id="association"
              name="association"
              {...register("association", { required: true })}
            >
              <option label="Choose..."></option>
              <option value="Personal Member">Personal Member</option>

              <option value="Bangladesh - Dhaka Dental College Debating & Quiz Society">
                Bangladesh - Dhaka Dental College Debating & Quiz Society
              </option>
              <option value="Burkina Faso - Association des Étudiants en Chirurgie Dentaire du Burkina Faso">
                Burkina Faso - Association des Étudiants en Chirurgie Dentaire
                du Burkina Faso
              </option>
              <option value="Chile - Asociacion Nacional Científica de Estudiantes de Odontología">
                Chile - Asociacion Nacional Científica de Estudiantes de
                Odontología
              </option>
              <option value="Croatian Association of Dental Student for International Activities and Exchange">
                Croatian Association of Dental Student for International
                Activities and Exchange
              </option>
              <option value="Czech Association of Dental Students ">
                Czech Association of Dental Students{" "}
              </option>
              <option value="Ecuador - School Association of the Faculty of Dentistry - University of Cuenca">
                Ecuador - School Association of the Faculty of Dentistry -
                University of Cuenca
              </option>
              <option value="Egyptian Association of Dental Students">
                Egyptian Association of Dental Students
              </option>
              <option value="Fiji Dental Students' Association">
                Fiji Dental Students' Association
              </option>
              <option value="Finnish Dental Students' Association">
                Finnish Dental Students' Association
              </option>
              <option value="France - UNECD">France - UNECD</option>
              <option value="Germany - Zahnmedizinischer Austauschdienst">
                Germany - Zahnmedizinischer Austauschdienst
              </option>
              <option value="Guatemala - Association of Dental Students of the University of San Carlos of Guatemala ">
                Guatemala - Association of Dental Students of the University of
                San Carlos of Guatemala{" "}
              </option>
              <option value="Indian Association of Dental Students">
                Indian Association of Dental Students
              </option>
              <option value="Indonesian Association of Dental Students">
                Indonesian Association of Dental Students
              </option>
              <option value="Iran - Dental Students' Scientific Research Center">
                Iran - Dental Students' Scientific Research Center
              </option>
              <option value="Iraqi Dental Students Association ">
                Iraqi Dental Students Association{" "}
              </option>
              <option value="Italian Dental Student Association">
                Italian Dental Student Association
              </option>
              <option value="Ivory Coast - National Organization of Health Sciences Students' - Odontostomatologie">
                Ivory Coast - National Organization of Health Sciences Students'
                - Odontostomatologie
              </option>
              <option value="Japan Dental Students Association">
                Japan Dental Students Association
              </option>
              <option value="Jordanian association of dental students ">
                Jordanian association of dental students{" "}
              </option>
              <option value="Kazakhstan Association of Dental Youth ">
                Kazakhstan Association of Dental Youth{" "}
              </option>
              <option value="Latvian Dental Students’ Association">
                Latvian Dental Students’ Association
              </option>
              <option value="Lebanese Association of Dental Students">
                Lebanese Association of Dental Students
              </option>
              <option value="Lithuanian Dental Students' association">
                Lithuanian Dental Students' association
              </option>
              <option value="Malaysian Dental Students’ Association ">
                Malaysian Dental Students’ Association{" "}
              </option>
              <option value="Mexican Organization of Oral Health Students">
                Mexican Organization of Oral Health Students
              </option>
              <option value="Moldovan Dental Students' Association">
                Moldovan Dental Students' Association
              </option>
              <option value="Morocco - UM6smile creators association ">
                Morocco - UM6smile creators association{" "}
              </option>
              <option value="Northern Cyprus Association of Dental Students">
                Northern Cyprus Association of Dental Students
              </option>
              <option value="Pakistan Association of Dental Students ">
                Pakistan Association of Dental Students{" "}
              </option>
              <option value="Palestinian Association of Dental Students ">
                Palestinian Association of Dental Students{" "}
              </option>
              <option value="Polish Association of Dental Students">
                Polish Association of Dental Students
              </option>
              <option value="Portuguese Dental Student's Association">
                Portuguese Dental Student's Association
              </option>
              <option value="Qatar Dental Students’ Association">
                Qatar Dental Students’ Association
              </option>
              <option value="Romania - Bucharest Dental Students’ Association (LSMDB)">
                Romania - Bucharest Dental Students’ Association (LSMDB)
              </option>
              <option value="Romania - The Society of Dental Students Iasi">
                Romania - The Society of Dental Students Iasi
              </option>
              <option value="Russia - National Medical Students' State">
                Russia - National Medical Students' State
              </option>
              <option value="Rwanda Dental Students Association">
                Rwanda Dental Students Association
              </option>
              <option value="Slovak association of dental students">
                Slovak association of dental students
              </option>
              <option value="Slovenian Dental Students International Committee">
                Slovenian Dental Students International Committee
              </option>
              <option value="Sudanese association of dental students ">
                Sudanese association of dental students{" "}
              </option>
              <option value="Swedish Dental Association ">
                Swedish Dental Association{" "}
              </option>
              <option value="Taiwan Dental Student Association ">
                Taiwan Dental Student Association{" "}
              </option>
              <option value="Thailand - Dental Students’ Association of Thailand">
                Thailand - Dental Students’ Association of Thailand
              </option>
              <option value="Tunisian Association of Dental Students">
                Tunisian Association of Dental Students
              </option>
              <option value="Turkish Dental Students International Committee (TDB)">
                Turkish Dental Students International Committee (TDB)
              </option>
              <option value="Uganda - Makarere University Dental Students' Association">
                Uganda - Makarere University Dental Students' Association
              </option>
              <option value="Ukraine - Medical Students' Union">
                Ukraine - Medical Students' Union
              </option>
            </select>
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
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

        <div
          className="row"
          style={{ paddingTop: "25px", borderTop: "1px solid #C6C6C6" }}
        >
          <h1 style={{ fontSize: "20px" }} className="title">
            Application Details
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>First Workforce Choice</label>
            <select {...register("firstChoice", { required: true })}>
              <option label="Choose..."></option>
              <option value="Coordinator of International Communications - CIC">
                Coordinator of International Communications - CIC
              </option>
              <option value="Internal Affairs Bureau">
                Internal Affairs Bureau
              </option>
              <option value="Editorial Board">Editorial Board</option>
              <option value="Exchange Board">Exchange Board</option>
              <option value="SCORE Committee">SCORE Committee</option>
              <option value="Training Committee">Training Committee</option>
              <option value="Prophylaxis Committee">
                Prophylaxis Committee
              </option>
              <option value="Voluntary Committee">Voluntary Committee</option>
              <option value="Associate Vice President of Finance">
                Associate Vice President of Finance
              </option>
              <option value="Associate Regional Ambassador of Africa">
                Associate Regional Ambassador of Africa
              </option>
              <option value="Associate Regional Ambassador of Asia Pacific">
                Associate Regional Ambassador of Asia Pacific
              </option>
              <option value="Associate Regional Ambassador of Europe">
                Associate Regional Ambassador of Europe
              </option>
              <option value="Associate Regional Ambassador of Middle East">
                Associate Regional Ambassador of Middle East
              </option>
              <option value="Associate Regional Ambassador of Americas">
                Associate Regional Ambassador of Americas
              </option>
            </select>
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Second Workforce Choice</label>
            <select {...register("secondChoice", { required: false })}>
              <option label="Choose..."></option>
              <option value="Coordinator of International Communications - CIC">
                Coordinator of International Communications - CIC
              </option>
              <option value="Internal Affairs Bureau">
                Internal Affairs Bureau
              </option>
              <option value="Editorial Board">Editorial Board</option>
              <option value="Exchange Board">Exchange Board</option>
              <option value="SCORE Committee">SCORE Committee</option>
              <option value="Training Committee">Training Committee</option>
              <option value="Prophylaxis Committee">
                Prophylaxis Committee
              </option>
              <option value="Voluntary Committee">Voluntary Committee</option>
              <option value="Associate Vice President of Finance">
                Associate Vice President of Finance
              </option>
              <option value="Associate Regional Ambassador of Africa">
                Associate Regional Ambassador of Africa
              </option>
              <option value="Associate Regional Ambassador of Asia Pacific">
                Associate Regional Ambassador of Asia Pacific
              </option>
              <option value="Associate Regional Ambassador of Europe">
                Associate Regional Ambassador of Europe
              </option>
              <option value="Associate Regional Ambassador of Middle East">
                Associate Regional Ambassador of Middle East
              </option>
              <option value="Associate Regional Ambassador of Americas">
                Associate Regional Ambassador of Americas
              </option>
            </select>
          </div>
        </div>

        <div className="row" style={{ paddingBottom: "25px" }}>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>
              If you are interested in joining the Editorial Board, please
              specify your best skills?{" "}
            </label>
            <select
              id="editorialSkills"
              {...register("editorialSkills", { required: false })}
            >
              <option label="Choose..."></option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Proofreading">Proofreading</option>
              <option value="Social Media Marketing & Content Creation">
                Social Media Marketing & Content Creation
              </option>
              <option value="Web Developing & Designing">
                Web Developing & Designing
              </option>
              <option value="Academic Writing">Academic Writing</option>
              <option value="Creative Writing">Creative Writing</option>
              <option value="Proofreading & Editing Text">
                Proofreading & Editing Text
              </option>
            </select>
          </div>
        </div>
        <div
          className="row"
          style={{ paddingTop: "25px", borderTop: "1px solid #C6C6C6" }}
        >
          <h1 style={{ fontSize: "20px" }} className="title">
            Required Attachments
          </h1>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Upload your Curriculum Vitae ID*</label>
            <input
              style={{ border: "none" }}
              type="file"
              onChange={(e) => {
                uploadImage(e.target.files[0], 0);
                console.log(imgStr);
              }}
            />
            {/* {imgStr[0] && ( */}
            {/* <input
              id="img1"
              name="img1"
              style={{ display: "none" }}
              type="text"
              value={imgStr[0]}
              // onChange={(e) => setimg1Str(e.target.value)}
              {...register("img1", { required: false })}
            /> */}
            {/* )} */}
            {/* {console.log(img1Str)} */}
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Upload your Motivational Letter*</label>
            <input
              style={{ border: "none" }}
              type="file"
              onChange={(e) => {
                uploadImage(e.target.files[0], 1);
                console.log(imgStr);
              }}
            />
            {/* {imgStr && imgStr[1] && ( */}
            {/* <input
              id="img2"
              name="img2"
              style={{ display: "none" }}
              type="text"
              value={imgStr[1]}
              {...register("img2", { required: false })}
            /> */}
            {/* )} */}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Upload a Portfolio / Previous work</label>
            <input
              style={{ border: "none" }}
              type="file"
              onChange={(e) => {
                uploadImage(e.target.files[0], 2);
                console.log(imgStr);
              }}
            />
            {/* {imgStr && imgStr[2] && ( */}
            {/* <input
              id="img3"
              name="img3"
              style={{ display: "none" }}
              type="text"
              value={imgStr[2]}
              {...register("img3", { required: false })}
            /> */}
            {/* )} */}
          </div>
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Upload an HD Front-face picture*</label>
            <input
              style={{ border: "none" }}
              type="file"
              onChange={(e) => {
                uploadImage(e.target.files[0], 3);
                console.log(imgStr);
                console.log(e.target);
              }}
            />
            {/* {imgStr && imgStr[3] && ( */}
            {/* <input
              id="img4"
              name="img4"
              style={{ display: "none" }}
              type="text"
              value={imgStr[3]}
              {...register("img4", { required: false })}
            /> */}
            {/* )} */}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xl-6 flexx">
            <label>Link to Portfolio or previous work (if applicable)</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="portfolioLink"
              {...register("portfolioLink", { required: false })}
            />
          </div>
        </div>

        {/* ____________________________________ CONSENT _____________________________________ */}
        {/* ____________________________________ CONSENT _____________________________________ */}
        <div className="container mt-5">
          <div className="row">
            <h1 style={{ fontSize: "20px" }} className="title">
              Consent
            </h1>
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
                I understand and agree to the{" "}
                <a href="https://drive.google.com/file/d/1b9O8TAlQ7jkeFetrC0SgC8fVuhJkWRks/view?usp=sharing">
                  {" "}
                  Terms & Conditions
                </a>{" "}
                as a user of this website.
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
                I confirm that I have read and understood IADS{" "}
                <a href="https://drive.google.com/file/d/1b9O8TAlQ7jkeFetrC0SgC8fVuhJkWRks/view?usp=sharing">
                  Code of Conduct
                </a>{" "}
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

          <div className="row">
            <div className="col d-flex justify-content-start align-items-start">
              <input
                className="small-check"
                type="checkbox"
                name="newsletter"
                id="newsletter"
                placeholder="newsletter"
                {...register("newsletter", { required: false })}
              />
              <p style={{ textAlign: "left", margin: "0px" }}>
                I wish to receive "IADS Weekly" E-Newsletter.
              </p>
            </div>
          </div>
        </div>
        <input type="submit" className="submit-btn" />
        {/* <div onClick={testSubmit}>SUBMIT</div> */}
      </div>
    </form>
  );
};

export default WorkforceForm;
