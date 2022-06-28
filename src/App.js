import "./App.scss";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Colgate from "./Pages/Projects/Colgate/Colgate";
import Zhermack from "./Pages/Projects/Zhermack/Zhermack";
import Home from "./Pages/Home/Home";

import { Routes, Route, Link } from "react-router-dom";

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
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
