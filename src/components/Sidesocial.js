import React from "react";

import { socialMedia } from "../config";
import IconLinkedin from "./icons/linkedin";
import IconTwitter from "./icons/twitter";
import IconGithub from "./icons/github";
import IconInsta from "./icons/instagram";

// import {Icon} from "./icons";
export default function Sidesocial() {
        return(
            <div aria-orientation="left" className="leftSocial">
                <ul className="socialList">
                    <li><a href="https://www.linkedin.com/in/shubhangi-garg-ba0b09197/" aria-label="GitHub" target="_blank" rel="noreferrer"><IconLinkedin/></a></li>
                    <li><a href="https://twitter.com/shugargg" aria-label="GitHub" target="_blank" rel="noreferrer"><IconTwitter/></a></li>
                    <li><a href="https://github.com/ShubhangiMG" aria-label="GitHub" target="_blank" rel="noreferrer"><IconGithub/></a></li>
                    <li><a href="https://github.com/ShubhangiMG" aria-label="GitHub" target="_blank" rel="noreferrer"><IconInsta/></a></li>
                    
                </ul>
                {/* {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />

            </a>
          </li>
        ))} */}
            </div>
        );
    }