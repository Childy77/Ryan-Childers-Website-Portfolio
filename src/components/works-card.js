import React from "react";

const WorksCard = (props) => {
    return(
        <section className="cards">
        <header className="top-work">{props.worksHeader}</header>
        <a href={props.worksLink} target="blank"> 
            <img src={props.image} alt={props.description}/>
        </a>
       
    </section>

    )
}
export default WorksCard