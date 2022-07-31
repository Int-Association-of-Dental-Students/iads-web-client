import "./App.scss";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Colgate from "./Pages/Projects/Colgate/Colgate";
import ColgateForm from "./Pages/Projects/Colgate/RegistrationForm";
import Zhermack from "./Pages/Projects/Zhermack/Zhermack";
import Home from "./Pages/Home/Home";

import Internal from "./Pages/Committees/Internal Affairs/Internal";

import { Routes, Route, Link } from "react-router-dom";
import SCORE from "./Pages/Committees/SCORE/SCORE";
import Training from "./Pages/Committees/Training/Training";
import Exchange from "./Pages/Committees/Exchange Board/Exchange";
import Voluntary from "./Pages/Committees/Voluntary/Voluntary";
import Editorial from "./Pages/Committees/Editorial/Editorial";
import Prophylaxis from "./Pages/Committees/Prophylaxis/Prophylaxis";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects">
          <Route path="/projects/zhermack" element={<Zhermack />} />
          <Route path="/projects/colgate" element={<Colgate />} />
          <Route
            path="/projects/colgate/registration"
            element={<ColgateForm />}
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
          {/* <Route path="/committees/colgate" element={<Colgate />} />
          <Route path="/committees/colgate" element={<Colgate />} /> */}
          {/* <Route path="/committees/colgate" element={<Colgate />} />
          <Route path="/committees/colgate" element={<Colgate />} />
          <Route path="/committees/colgate" element={<Colgate />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
