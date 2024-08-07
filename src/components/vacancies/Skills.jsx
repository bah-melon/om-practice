import React from "react";
import "../../design/vacancies-design/Vacancies.scss";
import Pointer from "../../assets/vacancies/pointer-right.svg";

export default function Skills({jobtitle , requirements}){
   
    return(
        <div className="skills-container">
            <div className="job-title">
                <p>{jobtitle}</p>
                <p>{requirements}</p>
            </div>
            
            <div className="requirements">
                <div className="requirement">
                <img src={Pointer} alt="Pointer-Image" />
                <p> .NET (C#), ASP.Net Core</p>
                </div>
                <div className="requirement">
                <img src={Pointer} alt="Pointer-Image" />
                <p> Kennis van Azure</p>
                </div>
                <div className="requirement">
                <img src={Pointer} alt="Pointer-Image" />
                <p>  Relationele databases (zoals SQL)</p>
                </div>
                <div className="requirement">
                <img src={Pointer} alt="Pointer-Image" />
                <p> Frontend-technologieën begrijpen (JScript, HTML 5, CSS, enz.)</p>
                </div>
                <div className="requirement">
                <img src={Pointer} alt="Pointer-Image" />
                <p> Git</p>
                </div>
                <div className="requirement">
                <img src={Pointer} alt="Pointer-Image" />
                <p>Docker</p>
                </div>
            </div>
        </div>


    )
}