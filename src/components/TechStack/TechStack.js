import React from "react";
import "./TechStack.css";
import bootstrapIcon from "../../components/images/bootstrapIcon.png";
import CppIcon from "../../components/images/CppIcon.png";
import css3Icon from "../../components/images/css3Icon.png";
import firebaseIcon from "../../components/images/firebaseIcon.png";
import githubIcon from "../../components/images/githubIcon.png";
import html5Icon from "../../components/images/html5Icon.png";
import javaIcon from "../../components/images/javaIcon.png";
import javaScriptIcon from "../../components/images/javaScriptIcon.png";
import linkedinIcon from "../../components/images/linkedinIcon.png";
import reactIcon from "../../components/images/reactIcon.png";
import wordpressIcon from "../../components/images/wordpressIcon.png";
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";




function TechStack(){

    const techStackData = [
        {
            iconName: "React",
            iconImage: reactIcon,
            iconAltProperty: "reactImage",
        },
        {
            iconName: "HTML5",
            iconImage: html5Icon,
            iconAltProperty: "htmlImage",
        },
        {
            iconName: "CSS3",
            iconImage: css3Icon,
            iconAltProperty: "cssImage",
        },
        {
            iconName: "JavaScript",
            iconImage: javaScriptIcon,
            iconAltProperty: "jsImage",
        }   
        
    ];

    const techStackData2 = [
        {
            iconName: "Java",
            iconImage: javaIcon,
            iconAltProperty: "javaImage",
        },
        {
            iconName: "C++",
            iconImage: CppIcon,
            iconAltProperty: "CppImage",
        },
        {
            iconName: "Github",
            iconImage: githubIcon,
            iconAltProperty: "githubImage",
        },
        {
            iconName: "Wordpress",
            iconImage: wordpressIcon,
            iconAltProperty: "wordpressImage",
        }   
        
    ];

    return ( 
        <div className = "techstack_container">
            <p className = "techstack_title">Tech Stack</p>
            <div className = "techstack_icon_container">
                {techStackData.map((item, index) => {
                    return (
                    <TechStackIconContainer 
                            image = {item.iconImage}
                            altProprty = {item.iconAltProperty}
                            name = {item.iconName}
                    />
                    );
                })}
            </div>
            <div className = "techstack_icon_container">
                {techStackData2.map((item, index) => {
                    return (
                    <TechStackIconContainer 
                            image = {item.iconImage}
                            altProprty = {item.iconAltProperty}
                            name = {item.iconName}
                    />
                    );
                })}
            </div>
        </div>
    );
}

export default TechStack;