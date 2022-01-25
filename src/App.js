import React from "react";
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactNav from "./components/ContactNav";
import Sidesocial from "./components/Sidesocial";
import Email from "./components/Email";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";

import Volunteer from "./components/volunteer";
import Footer from "./components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Sidesocial/>
      <Email/>
      <Projects />
      <Volunteer/>
      <ContactNav/>
      <Footer/>
      {/* 
      
      <Skills />
      <Testimonials />
      <Contact /> */}
    </main>
  );
}