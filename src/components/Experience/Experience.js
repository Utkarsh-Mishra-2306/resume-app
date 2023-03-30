import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard.js";
import javaIcon from "../images/javaIcon.png";
import linkedinIcon from "../../components/images/linkedinIcon.png";
import githubIcon from "../../components/images/githubIcon.png";


export default function Experience(){

    const statements = [
        "1. lLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa sapien, feugiat at viverra non, semper ut nulla ",
        "2. Praesent nulla felis, rutrum maximus egestas eu, tincidunt vitae velit.",
        "3. Donec eu luctus magna, ac tempor ex. Curabitur a lacus luctus, varius risus id, aliquet magna.",
        "4. Phasellus magna elit, lobortis ut eleifend eget, tincidunt et dolor. Donec eget augue est. Fusce sollicitudin viverra sapien id sodales.",
        "5. Pellentesque elit orci, maximus eget eros eget, dapibus dignissim velit. Ut hendrerit rutrum suscipit."
    ];

    const iconImages = [javaIcon, linkedinIcon, githubIcon];


    return (
        <div className="experience_container">
            <p className = "experience_title">Experience</p>
            <div className = "experience_cards_container">
                <ExperienceCard
                    companyName = "Coding Ninjas"
                    designation = "SDE"
                    statements = {statements}
                    iconImages = {iconImages}
                />
                <ExperienceCard
                    companyName = "Coding Ninjas"
                    designation = "SDE"
                    statements = {statements}
                    iconImages = {iconImages}
                />
                <ExperienceCard
                    companyName = "Coding Ninjas"
                    designation = "SDE"
                    statements = {statements}
                    iconImages = {iconImages}
                />
            </div>
        </div> 
    );
}