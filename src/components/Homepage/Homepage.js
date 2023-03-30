import React from "react";
import "./Homepage.css";
import githubIcon from "../images/githubIcon.png";
import linkedinIcon from "../images/linkedinIcon.png";

function Homepage()
{
    return (
        <div className = "homepage_container">
            <div className = "homepage_left">
                <p className = "homepage_left_h1">
                    <span className = "red_color"> Hi,</span> &nbsp; my name is
                </p>
                <p className = "homepage_left_h2">Utkarsh Mishra</p>
                <p className = "homepage_left_h3">Developer at <span className = "red_color">Somewhere</span>
                </p>
                <p className = "homepage_left_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas sed dui non augue rhoncus fermentum nec semper ligula.</p>
                <div>
                    <a href = "https://github.com/Utkarsh-Mishra-2306" target = "_blank">
                        <img 
                        className = "homepage_left_logo"
                        src = {githubIcon}
                        alt = "githubIconimage"
                         />
                    </a>
                    <a href = "https://www.linkedin.com/in/utkarsh-mishra-2306/" target = "_blank">
                        <img
                        className = "homepage_left_logo" 
                        src = {linkedinIcon} 
                        alt = "linkedinIconimage" 
                         />
                    </a>
                </div>
                <div>
                    <a href = "mailto:utkarsh4u.mishra@gmail.com" target = "_blank">
                        <button className = "homepage_left_button">Get in Touch</button>
                    </a>
                </div>
            </div>
            <div className = "homepage_right">
                <img src = "https://media.giphy.com/media/IpeYSEZshTefe/giphy.gif"
                alt = "GIF" />
            </div>
        </div>
    );
}

export default Homepage;
