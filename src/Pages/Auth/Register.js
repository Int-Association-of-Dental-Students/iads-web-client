import React from 'react'
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(register.formState);
    console.log(errors);
    
    return (
        <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Username*" {...register("Username*", {required: true, maxLength: 80})} />
        <input type="email" placeholder="Personal Email Address*" {...register("Personal Email Address*", {required: true, maxLength: 100})} />
        <input type="password" placeholder="Password" {...register("Password", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="password" placeholder="Confirm Password*" {...register("Confirm Password*", {required: true, maxLength: 12})} />
        <input type="text" placeholder="Full name* " {...register("Full name* ", {required: true})} />
  
        <input {...register("Gender*", { required: true })} type="radio" value="Male" />
        <input {...register("Gender*", { required: true })} type="radio" value="Female" />
        <input {...register("Gender*", { required: true })} type="radio" value="Other" />
        <select {...register("Country", { required: true })}>
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
          <option value="Nigeria N">Nigeria N</option>
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
        <input type="number" placeholder="Phone Number*" {...register("Phone Number*", {required: true})} />
        <input type="text" placeholder="Name of University*" {...register("Name of University*", {required: true})} />
        {/* <select {...register("IADS member association you're affiliated to*", { required: true })}>
          <option value="Croatian Association of Dental Student for International Activities and Exchange ">Croatian Association of Dental Student for International Activities and Exchange </option>
          <option value="Czech Association of Dental Students  ">Czech Association of Dental Students  </option>
          <option value="School Association of the Faculty of Dentistry - University of Cuenca ">School Association of the Faculty of Dentistry - University of Cuenca </option>
          <option value="Egyptian Association of Dental Students ">Egyptian Association of Dental Students </option>
          <option value="Finnish Dental Students' Association ">Finnish Dental Students' Association </option>
          <option value="UNECD ">UNECD </option>
          <option value="Association of Dental Students of the University of San Carlos of Guatemala  ">Association of Dental Students of the University of San Carlos of Guatemala  </option>
          <option value="Indian Association of Dental Students ">Indian Association of Dental Students </option>
          <option value="Indonesian Association of Dental Students ">Indonesian Association of Dental Students </option>
          <option value="Iraqi Dental Students Association  ">Iraqi Dental Students Association  </option>
          <option value="Italian Dental Student Association ">Italian Dental Student Association </option>
          <option value="Japan Dental Students Association ">Japan Dental Students Association </option>
          <option value="Jordanian association of dental students  ">Jordanian association of dental students  </option>
          <option value="Kazakhstan Association of Dental Youth  ">Kazakhstan Association of Dental Youth  </option>
          <option value="Latvian Dental Students’ Association ">Latvian Dental Students’ Association </option>
          <option value="Lithuanian Dental Students' association ">Lithuanian Dental Students' association </option>
          <option value="Malaysian Dental Students’ Association  ">Malaysian Dental Students’ Association  </option>
          <option value="UM6smile creators association  ">UM6smile creators association  </option>
          <option value="Nigeria Association of Dental Students ">Nigeria Association of Dental Students </option>
          <option value="Pakistan Association of Dental Students  ">Pakistan Association of Dental Students  </option>
          <option value="Palestinian Association of Dental Students  ">Palestinian Association of Dental Students  </option>
          <option value="Polish Association of Dental Students ">Polish Association of Dental Students </option>
          <option value="Portuguese Dental Student's Association ">Portuguese Dental Student's Association </option>
          <option value="Qatar Dental Students’ Association ">Qatar Dental Students’ Association </option>
          <option value="Bucharest Dental Students’ Association ">Bucharest Dental Students’ Association </option>
          <option value="The Society of Dental Students Iasi ">The Society of Dental Students Iasi </option>
          <option value="Rwanda Dental Students Association ">Rwanda Dental Students Association </option>
          <option value="Slovak association of dental students ">Slovak association of dental students </option>
          <option value="Slovenian Dental Students International Committee ">Slovenian Dental Students International Committee </option>
          <option value="Sudanese association of dental students  ">Sudanese association of dental students  </option>
          <option value="Swedish Dental Association  ">Swedish Dental Association  </option>
          <option value="Taiwan Dental Student Association  ">Taiwan Dental Student Association  </option>
          <option value="Dental Students’ Association of Thailand ">Dental Students’ Association of Thailand </option>
          <option value="Tunisian Association of Dental Students ">Tunisian Association of Dental Students </option>
          <option value="Zimbabwe Dental Students Association">Zimbabwe Dental Students Association</option>
        </select> */}
        <select {...register("Year of Studies*", { required: true })}>
          <option value="Year 1">Year 1</option>
          <option value="Year 2">Year 2</option>
          <option value="Year 3">Year 3</option>
          <option value="Year 4">Year 4</option>
          <option value="Year 5">Year 5</option>
          <option value="Year 6">Year 6</option>
          <option value="Intern">Intern</option>
          <option value="Graduate">Graduate</option>
        </select>
        <input type="checkbox" placeholder="Are you the delegate of your affiliated association?" {...register("Are you the delegate of your affiliated association?", {required: true})} />
        <input type="number" placeholder="Year of Graduation" {...register("Year of Graduation", {required: true})} />
        <input type="checkbox" placeholder="Are you currently employed in IADS?" {...register("Are you currently employed in IADS?", {required: true})} />
        <input type="text" placeholder="If yes, select your position" {...register("If yes, select your position", {})} />
        <input type="checkbox" placeholder="Are you an IADS Member?" {...register("Are you an IADS Member?", {required: true})} />
        <input type="email" placeholder="If applicable, enter your IADS domain email" {...register("If applicable, enter your IADS domain email", {required: true})} />
  
        <input type="submit" />
      </form>
      asadkncadncaidnc

      </>

    )
}

export default Register