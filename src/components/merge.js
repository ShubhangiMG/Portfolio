import React from "react";
import About from "./About";
import Contact from "./Contact";
import ContactNav from "./ContactNav";
import Sidesocial from "./Sidesocial";
import Email from "./Email";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Volunteer from "./volunteer";
import Footer from "./footer";
export default function Merge() {
    return(
        <div>
            <Navbar/>
      <About/>
      <Sidesocial/>
      <Email/>
      <Projects />
      <Volunteer/>
      <ContactNav/>
      <Footer/>
        </div>
    );
}