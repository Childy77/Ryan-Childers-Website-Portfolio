import React from "react";
import headshot from "../assets/Headshot1.jfif";

const AboutMe = () => {
    return(
        <section class="main-content" id="about-me">
        
        <img src={headshot} alt="A picture of Ryan" class="headshot"/>

        <p>
            Ryan Childers is an aspiring coder.  He spent 20 years as a professional actor and intructor, but now wants to pursue a life with a better pay schedule to fit his family needs.
        </p>

        </section>
    )
}

export default AboutMe