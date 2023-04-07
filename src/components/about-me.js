import React from "react";
import headshot from "../assets/Headshot1.jfif";

const AboutMe = () => {
    return(
        <section className="main-content" id="about-me">
        
        <img src={headshot} alt="A picture of Ryan" class="headshot"/>

        <p>
            I'm Ryan Childers. I am a recent graduate of the University of Washington Coding Bootcamp.  I spent 20 years as a professional actor and intructor of the arts, so I know that the look of any website matters greatly.  When we open any webpage, we want to be immediatley be pleased by what we see.  The look of any website should intall trust in whatever service that business is providing.  I love creating that perfect look.
        </p>

        </section>
    )
}

export default AboutMe