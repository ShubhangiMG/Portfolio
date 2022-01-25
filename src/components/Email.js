import React from "react";
import { email } from "../config";
export default function Email() {
        return(
            <div aria-orientation="right" className="rightMailhead">
                <div className="rightMail">
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        );
    }