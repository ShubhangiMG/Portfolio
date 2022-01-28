import React, { useState, Fragment } from 'react'
import logoimg from "../ShuGARG-removebg-preview.png"
export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <nav className={colorChange ? 'colorChange navbar navbar-expand-lg navbar-light' : 'navbar navbar-expand-lg navbar-light'} style={{zIndex:"100"}}>
  <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={logoimg} alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#volunteer">Volunteering</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contactnav">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}