import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox.js";

function Projects(){

    const projectData = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uF1_VbQ8m0PNmvySGDf2N8svq6ZZNUCd8Q&usqp=CAU",
            title: "Calculator",
            sentences: [
                "This is a simple calculator with memory functions similar to a small handheld calculator.",
                " Use this basic calculator online for math with addition, subtraction, division and multiplication.",
                "The calculator includes functions for square root, percentage, pi, exponents, powers and rounding.",
                "Use AC to clear out the current calculation. Use CE to clear out the most recent entry. Note that if the AC key is not visible, hit CE and then AC to clear out your calculation."
            ],
            link: "https://www.calculator.net/"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uF1_VbQ8m0PNmvySGDf2N8svq6ZZNUCd8Q&usqp=CAU",
            title: "Calculator",
            sentences: [
                "This is a simple calculator with memory functions similar to a small handheld calculator.",
                " Use this basic calculator online for math with addition, subtraction, division and multiplication.",
                "The calculator includes functions for square root, percentage, pi, exponents, powers and rounding.",
                "Use AC to clear out the current calculation. Use CE to clear out the most recent entry. Note that if the AC key is not visible, hit CE and then AC to clear out your calculation."
            ],
            link: "https://www.calculator.net/"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uF1_VbQ8m0PNmvySGDf2N8svq6ZZNUCd8Q&usqp=CAU",
            title: "Calculator",
            sentences: [
                "This is a simple calculator with memory functions similar to a small handheld calculator.",
                " Use this basic calculator online for math with addition, subtraction, division and multiplication.",
                "The calculator includes functions for square root, percentage, pi, exponents, powers and rounding.",
                "Use AC to clear out the current calculation. Use CE to clear out the most recent entry. Note that if the AC key is not visible, hit CE and then AC to clear out your calculation."
            ],
            link: "https://www.calculator.net/"
        }
    ];

    return (
        <div>
            <p className = "projects_title">Projects</p>
            <div className = "projects_box_container">
                {projectData.map((value, index) => (
                    <ProjectBox
                        image = {value.image}
                        title = {value.title}
                        sentences = {value.sentences}
                        link = {value.link}
                    />
                ))}
            </div>
        </div>

    );
}

export default Projects;