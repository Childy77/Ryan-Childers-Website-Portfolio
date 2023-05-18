import React from "react";
// import Works from "../works.json";
import WorksCard from "./works-card";
import Schedular from "../images/Schedular.jpg"
import Password from "../images/Password.jpg"
import Barometer from "../images/Barometer.jpg"
import Workout from "../images/new-project-2023-02-06t080712.245-1.jpg"
const Works = [

    // Add URL Links
    {
        worksHeader: "Takiwatanga:",
        workslink: "https://intense-cove-24151.herokuapp.com/",
        image: Workout,
        description: "A man running"
    },
    {
        worksHeader: "Weather Tracker",
        workslink: "https://childy77.github.io/US-Weather-Tracker/",
        image: Barometer,
        description: "A picture of a Barometer"
    },
    {
        worksHeader: "Password Generator",
        workslink: "https://childy77.github.io/Ryan-Childers-Password-Generator/",
        image: Password,
        description: "description goes here"
    },
    {
        worksHeader: "Work Day Schedular",
        workslink: "https://childy77.github.io/Amazing-Work-Day-Scheduler/",
        image: Schedular,
        description: "description goes here"
    }
]
const Work = () => {
    return (
        <div class="products" id="portfolio">
        {Works.map( element => (
        
                    <WorksCard worksHeader={element.worksHeader} worksLink={element.workslink} image={element.image} description={element.description}/>
                ))}


        
           
    </div>
    )
}
export default Work