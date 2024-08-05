import React from "react";

export default function InputField({id  , type , htmlFor , title}) {
    return(
        <div>
        <label htmlFor={htmlFor}>{title}</label>
        <input type={type} id={id}></input>
        </div>
    )
}