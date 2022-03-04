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
import Volunteer from "./components/volunteer";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route,Routes, Redirect,} from "react-router-dom";
import Merge from "./components/merge";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* I have merged all the components that are on single page. Kepping these above router makes them appear on every routed page. I dont want all of them on the contact me page */}
      {/* <Navbar/>
      <About/>
      <Sidesocial/>
      <Email/>
      <Projects />
      <Volunteer/>
      <ContactNav/>
      <Footer/> */}
      {/* <Merge/> */}
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Merge/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      {/* 
      
      <Skills />
      <Testimonials />
      <Contact /> */}
    </main>
  );
}