import React from "react";
import headshot from "../assets/Headshot1.jfif";

const AboutMe = () => {
    return(
        <section className="main-content" id="about-me">
        
        <img src={headshot} alt="A picture of Ryan" class="headshot"/>

        <p>
            I'm Ryan Childers. I am a recent graduate of the University of Washington Coding Bootcamp.  I spent 20 years as a professional actor and intructor of the arts, so I know that the look of any website matters greatly.  When we open any webpage, we want to be immediatley be pleased by what we see.  The look of any website should intall trust in whatever service that business is providing.  I love creating that perfect look.
        </p>
        <br></br>
        <h1 className="works-below">My Works Below:</h1>
        <br></br>
        <h1 className="work-title">Takiwatanga:</h1>  
        <h3>-A social media site for people with family member dealing with special needs</h3>
            <li>Github: https://github.com/Childy77/Takiwatanga </li>
            <li>Tech used: React, HTML, CSS, JavaScript </li>
        
        <h1 className="work-title">Weather Tracker:</h1>
            <h3>-Class challenge where I had to build a weather tracker from scratch</h3>
            <li>Github: https://github.com/Childy77/US-Weather-Tracker </li>
            <li>Tech used: HTML, CSS, JavaScript, API's </li>
        
        <h1 className="work-title">Password Generator:</h1>
            <h3>-Class challenge where I had to creat a random password generator including numbers, letters, and symbols</h3>
            <li>Github: https://github.com/Childy77/Ryan-Childers-Password-Generator </li>
            <li>Tech used: HTML, CSS, JavaScript </li>
        
        <h1 className="work-title">Work Day Schedular:</h1>
        <h3>-Class challenge where I had to create a online day schedular for all purposes</h3>
            <li>Github: https://github.com/Childy77/Amazing-Work-Day-Scheduler </li>
            <li>Tech used: HTML, CSS, JavaScript </li>
        


        </section>
    )
}

export default AboutMe