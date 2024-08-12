import React from "react";
import "../../design/vacancies-design/Vacancies.scss";
import Pointer from "../../assets/vacancies/pointer-right.svg";

export default function Skills({jobtitle , requirements , description}){
   
    return(
        <div className="skills-container">
            <div className="job-title">
                <p>{jobtitle}</p>
                <p>{requirements}</p>
            </div>
            
            <div className="requirements">
               
                <div className="requirement">
                <ul>{description}</ul>
                </div>   
                
            </div>
             <div className="border"><span></span></div>
        </div>


    )
}