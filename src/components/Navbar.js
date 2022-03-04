import React, { useState, Fragment } from 'react'

import { Link, Route } from 'react-router-dom'
import logoimg from "../ShuGARG-removebg-preview.png"
import logoimg2 from "../ShuGARG-removebg-preview-removebg-preview-removebg-preview (2).png"


import { navLinks } from '../config';
export default function Navbar() {

  const [colorChange, setColorchange] = useState(false);
  const [imgchange,setImgchange]=useState(false);
  const [isActive, setActive] = useState(false);
  
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
 
  const changeLogoImg = () =>{
    if(window.scrollY >= 850 && window.scrollY <= 2233){
      setImgchange(true);
    }
    else{
      setImgchange(false);
    }

 };
//  const changeHighlight=()=>{
//   if(window.scrollY>=80 && window.scrollY<=800){
//     setActive(true);
//   }
//   else{
//     setActive(false);
//   }
// };
// window.addEventListener('scroll',changeHighlight);
 window.addEventListener('scroll', changeLogoImg);
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <nav className={colorChange ? 'colorChange navbar navbar-expand-lg navbar-light' : 'navbar navbar-expand-lg navbar-light'} style={{zIndex:"100"}}>
  <div className="container">
    <a className="navbar-brand" href="#">{imgchange?<img src={logoimg} className='logo'/>:<img src={logoimg} className='logo'/>}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className='navbar-nav'>
        {navLinks.map(({url,name},i)=>(
          <li key={i} className='nav-item'>
            <a href={url} className={isActive==1?'nav-link highlightclass':'nav-link'}>{name}</a>
          </li>
        ))}
      </ul>

      {/* <ul className="navbar-nav">
        <li className="nav-item">
          <a className={isActive ? "active nav-link" : "nav-link"} onClick={handleToggle} aria-current="page" href="#about">About me</a>
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
      </ul> */}
    </div>
  </div>
</nav>
  );
}