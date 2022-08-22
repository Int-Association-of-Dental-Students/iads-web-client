import "./App.scss";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Colgate from "./Pages/Projects/Colgate/Colgate";
import ColgateForm from "./Pages/Projects/Colgate/RegistrationForm";
import Registration2 from "./Pages/Projects/Colgate/Registration2";
import Zhermack from "./Pages/Projects/Zhermack/Zhermack";
import Home from "./Pages/Home/Home";

import Internal from "./Pages/Committees/Internal Affairs/Internal";

import { Routes, Route } from "react-router-dom";
import SCORE from "./Pages/Committees/SCORE/SCORE";
// import Register from "./Pages/Auth/Register";

import Signup from "./Pages/Signup/Signup";

import Training from "./Pages/Committees/Training/Training";
import Exchange from "./Pages/Committees/Exchange Board/Exchange";
import Voluntary from "./Pages/Committees/Voluntary/Voluntary";
import Editorial from "./Pages/Committees/Editorial/Editorial";
import Prophylaxis from "./Pages/Committees/Prophylaxis/Prophylaxis";
import Governance from "./Pages/Governance/Governance";
import Membership from "./Pages/Membership/Membership";
import About from "./Pages/About/About";
import WOHD from "./Pages/Projects/WOHD/WOHD";
import OrgMemberForm from "./Pages/Membership/OrgMemberForm/OrgMemberForm";

function App() {
  return (
    <div className="App">
      <NavBar path={window.location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/organizational-member-form" element={<OrgMemberForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects">
          <Route path="/projects/WOHD" element={<WOHD />} />
          <Route path="/projects/zhermack" element={<Zhermack />} />
          <Route path="/projects/colgate" element={<Colgate />} />
          <Route
            path="/projects/colgate/registration"
            element={<ColgateForm />}
          ></Route>
          <Route
            path="/projects/colgate/registration"
            element={<ColgateForm />}
          ></Route>
          <Route
            path="/projects/colgate/registration2"
            element={<Registration2 />}
          ></Route>
        </Route>
        <Route path="/committees">
          <Route path="/committees/internal" element={<Internal />} />
          <Route path="/committees/SCORE" element={<SCORE />} />
          <Route path="/committees/training" element={<Training />} />
          <Route path="/committees/exchange" element={<Exchange />} />
          <Route path="/committees/voluntary" element={<Voluntary />} />
          <Route path="/committees/editorial" element={<Editorial />} />
          <Route path="/committees/prophylaxis" element={<Prophylaxis />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
