import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Navigation from "../src/Components/Navbar/Navigation";
import Home from "../src/Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Pricing from "./Components/pricing/pricing";

function App() {
  return (
    <BrowserRouter>
      <Navigation fixed="top" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
