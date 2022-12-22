import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import OurWork from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from './Project';
import { useNavigate, useLocation } from "react-router-dom";


function Index() {
  const history = useNavigate();
  const location = useLocation();
  return (
    <div>
      <Header/>
      {location.pathname == "/Home" || location.pathname == "/" || location.pathname == ""?
        <Home />
      : null}
      {location.pathname == "/About" ?
        <About />
      : null}
      {location.pathname == "/Portfolio" ?
        <OurWork />
      : null}
      {location.pathname == "/Project" ?
        <Project />
      : null}
      {location.pathname == "/Contact" ?
        <Contact />
      : null}
      <Footer />
    </div>
  );
}

export default Index;
