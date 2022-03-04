import React from "react";
import HOT from "../images/HOT.png"
import bhumi from "../images/bhumi.jpg"
import miracle from "../images/miracle.png"
import paath from "../images/paathshala-trust-logo.png"
export default function Volunteer() {
  return(
    <section className="vol_div justify-content-center container" id="volunteer">
            <h1>Volunteering activities</h1>
            <h6>Giving back to the people. Not a favour but a responsibility.</h6>
            <div className="row gx-0 container justify-content-center volrow">
                <div className="col-6 col-lg-3" ><div class="experiment-number-mask"><span>01</span></div><div className="circlediv"><div class="vol_image" style={{backgroundImage:`url(${HOT})`}}></div></div><div class="title-area"><div class="title-label">Organisation</div><div class="title">OpenStreetMap</div></div><div class="number-area">&nbsp;</div></div>
                <div className="col-6 col-lg-3"><div class="experiment-number-mask"><span>02</span></div><div className="circlediv"><div class="vol_image" style={{backgroundImage:`url(${bhumi})`}}></div></div><div class="title-area"><div class="title-label">Organisation</div><div class="title">Bhumi</div></div><div class="number-area">&nbsp;</div></div>
                <div className="col-6 col-lg-3"><div class="experiment-number-mask"><span>03</span></div><div className="circlediv"><div class="vol_image" style={{backgroundImage:`url(${miracle})`}}></div></div><div class="title-area"><div class="title-label">Organisation</div><div class="title">Miracle</div></div><div class="number-area">&nbsp;</div></div>
                <div className="col-6 col-lg-3"><div class="experiment-number-mask"><span>04</span></div><div className="circlediv"><div class="vol_image" style={{backgroundImage:`url(${paath})`}}></div></div><div class="title-area"><div class="title-label">Organisation</div><div class="title">Paathshala</div></div><div class="number-area">&nbsp;</div></div>

            </div>
    </section>
  );
}