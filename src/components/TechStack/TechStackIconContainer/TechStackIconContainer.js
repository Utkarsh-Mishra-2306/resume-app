import React from "react";
import "./TechStackIconContainer.css";

export default function TechStackIconContainer({image, altProperty, name}){
    return (
    <div className = "techstack_icons">
        <img src= {image} alt={altProperty} />
        <p>{name}</p>
    </div>
    );
}


 
