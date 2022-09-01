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
import Workforce from "./Pages/Committees/Workforce/Workforce";
import Meetings from "./Pages/Meetings/Meetings";

import { AuthContext } from "./Components/Context/AuthContext";

import React, { useState, useCallback, useContext, useEffect } from "react";
import GreenDentistry from "./Pages/Projects/GreenDentistry/GreenDentistry";

let logoutTimer;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const [validation, setValidation] = useState(null);
  const [editor, setEditor] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [tokenExpirationData, setTokenExpirationData] = useState();

  const login = useCallback(
    (
      uid,
      username,
      name,
      validation,
      email,
      editor,
      admin,
      token,
      expirationDate
    ) => {
      console.log("helloooooooo");
      setIsLoggedIn(true);
      setUserId(uid);
      setName(name);
      setUserName(username);
      setValidation(validation);
      setEditor(editor);
      setEmail(email);
      setAdmin(admin);
      setToken(token);

      const tokenExpirationData =
        expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      console.log(tokenExpirationData);
      setTokenExpirationData(tokenExpirationData);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          uid,
          username,
          name,
          validation,
          editor,
          email,
          admin,
          token,
          expiration: tokenExpirationData.toISOString(),
        })
      );
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserId(null);
    setValidation(null);
    setEmail(null);
    setEditor(null);
    setAdmin(null);
    setName(null);
    setToken(null);
    setTokenExpirationData(null);
  }, []);

  useEffect(() => {
    if (token && tokenExpirationData) {
      const remainingTime =
        tokenExpirationData.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationData]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.uid,
        storedData.username,
        storedData.name,
        storedData.validation,
        storedData.email,
        storedData.editor,
        storedData.admin,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        isLogged: !!token,
        userId: userId,
        username: userName,
        name: name,
        validation: validation,
        email: email,
        editor: editor,
        admin: admin,
        login: login,
        logout: logout,
        token: token,
      }}
    >
      <div className="App">
        <NavBar path={window.location.pathname} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route
            path="/organizational-member-form"
            element={<OrgMemberForm />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects">
            <Route path="/projects/WOHD" element={<WOHD />} />
            <Route
              path="/projects/greendentistry"
              element={<GreenDentistry />}
            />
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
            <Route path="/committees/workforce" element={<Workforce />} />
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
    </AuthContext.Provider>
  );
}

export default App;
