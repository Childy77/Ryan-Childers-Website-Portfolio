import React from "react";
// import Works from "../works.json";
import WorksCard from "./works-card";
import Nature from "../images/nature.jpg"
import Office from "../images/virtual-office.jpg"
import Seas from "../images/High-Seas-AdobeStock_520103947-700x400.jpeg"
import Workout from "../images/new-project-2023-02-06t080712.245-1.jpg"
const Works = [

    // Add URL Links
    {
        worksHeader: "Workout App",
        workslink: "https://workout.app",
        image: Workout,
        description: "A man running"
    },
    {
        worksHeader: "Works",
        workslink: "https://.app",
        image: Seas,
        description: "description goes here"
    },
    {
        worksHeader: "Works",
        workslink: "https://.app",
        image: Office,
        description: "description goes here"
    },
    {
        worksHeader: "Works",
        workslink: "https://.app",
        image: Nature,
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