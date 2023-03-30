import React from "react";
import "./ProjectBox.css";

function ProjectBox({image, title, sentences, link}){

    // assigning the sentences array to the listItems variable so that the latter code will be neat and clean.
    const listItems = sentences.map((value, index) => (
        <p>{value}</p>
    ));


    return (
        <div className = "project_box_container">
            <div className = "project_box_image_container">
                <img src = {image}/>
            </div>
            <div className = "project_box_description_container">
                <p className = "project_box_title">{title}</p>
                <div className = "project_box_sentences_container">{listItems}</div>
                <p className = "project_box_link">
                    <span>Link </span>
                    <a href = {link} target ="_blank"> {link}</a>
                </p>
            </div>
        </div>
    );
}

export default ProjectBox;