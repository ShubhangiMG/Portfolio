import React from "react";

export default function ContactNav(){
    return(
        <div className="contactNavdiv">
            <div className="CTAbox">
                <div className="col-md-4 col-12"><h1>Start a project</h1></div>
                <div className="col-md-4 col-12"><p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p></div>
                <div className="col-md-4 col-12"><button type="submit"><a href="#" id="cta">Contact me</a></button></div>
            </div>
        </div>
    );
}