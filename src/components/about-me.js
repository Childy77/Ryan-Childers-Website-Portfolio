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
        <h3>-A social media site for people with family members with special needs.  This is still a work in progress.</h3>
            <li>
                <a href="https://github.com/Childy77/Takiwatanga">Site Github Page</a>
            </li>
            <li>Tech used: React, HTML, CSS, JavaScript, Bootstrap, MongoDB, and Express </li>
        
        <h1 className="work-title">Weather Tracker:</h1>
            <h3>-Class challenge where I had to build a weather tracker from scratch using API's.</h3>
            <li>
                <a href="https://github.com/Childy77/US-Weather-Tracker">Site Github Page</a>
            </li>
            <li>Tech used: HTML, CSS, JavaScript, Bootstrap, and API's </li>
        
        <h1 className="work-title">Password Generator:</h1>
            <h3>-Class challenge where I had to creat a random password generator including numbers, letters, and symbols.</h3>
            <li>
                <a href="https://github.com/Childy77/Ryan-Childers-Password-Generator">Site Github Page</a>

            </li>
            <li>Tech used: HTML, CSS, and JavaScript </li>
        
        <h1 className="work-title">Work Day Schedular:</h1>
        <h3>-Class challenge where I had to create a online day schedular for all purposes.</h3>
            <li>
                <a href="https://github.com/Childy77/Amazing-Work-Day-Scheduler">Site Github Page</a>

            </li>
            <li>Tech used: HTML, CSS, and JavaScript </li>
        


        </section>
    )
}

export default AboutMe