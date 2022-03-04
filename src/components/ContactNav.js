import React from "react";
// import {Link} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route,Routes, Redirect,} from "react-router-dom";
import {useNavigate} from "react-router-dom";
// import Contact from "./Contact";
export default function ContactNav(){
    // let navigate=useNavigate();
    return(
        <div className="contactNavdiv" id="contactnav">
            <div className="CTAbox">
                <div className="col-md-4 col-12"><h1>Start a project</h1></div>
                <div className="col-md-4 col-12"><p>Interested in working together? <br/>I would love to collaborate! Let me know.</p></div>
                <div className="col-md-4 col-12"><button><a href="/Contact" target="_blank" id="cta">Contact me</a></button></div>
            </div>
        </div>
    );
} 
// onClick={()=>{ navigate("/contact")}}