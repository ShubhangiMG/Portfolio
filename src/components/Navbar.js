import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import logoimg from "../ShuGARG-removebg-preview.png"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{zIndex:"100"}}>
  <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={logoimg} alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Volunteering</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}