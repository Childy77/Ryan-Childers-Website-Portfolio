import React from "react";
import Works from "../works.json";
import WorksCard from "./works-card";

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