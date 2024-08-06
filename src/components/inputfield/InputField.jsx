import React from "react";

export default function InputField({id  , type , htmlFor , title ,className }) {
    return(
        <div className={className}>
        <label htmlFor={htmlFor}>{title}</label>
        <input type={type} id={id} placeholder={title}></input>
        </div>
    )
}