import React from "react";
import IconLinkedin from "./icons/linkedin";
import IconTwitter from "./icons/twitter";
import IconGithub from "./icons/github";
import IconInsta from "./icons/instagram";
import IconMail from "./icons/mail";
export default function footer(){
    return(
      <div id="footer">
      <div className="footer">Designed and built by &copy;2022 Shubhangi Garg.</div>
      <ul className="socialList" style={{flexDirection:"row"}}>
                    <li style={{padding:"1rem"}}><a href="https://www.linkedin.com/in/shubhangi-garg-ba0b09197/" aria-label="Linkedin" target="_blank" rel="noreferrer"><IconLinkedin/></a></li>
                    <li style={{padding:"1rem"}}><a href="https://twitter.com/shugargg" aria-label="Twitter" target="_blank" rel="noreferrer"><IconTwitter/></a></li>
                    <li style={{padding:"1rem"}}><a href="https://github.com/ShubhangiMG" aria-label="GitHub" target="_blank" rel="noreferrer"><IconGithub/></a></li>
                    <li style={{padding:"1rem"}}><a href="https://github.com/ShubhangiMG" aria-label="Instagram" target="_blank" rel="noreferrer"><IconInsta/></a></li>
                    <li style={{padding:"1rem"}}><a href="https://github.com/ShubhangiMG" aria-label="Mail" target="_blank" rel="noreferrer"><IconMail/></a></li>
                    
                </ul>
      </div>
    );
}