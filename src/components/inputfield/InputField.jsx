import React from "react";

export default function InputField({ id, type, htmlFor, title, className ,onChange}) {
  return (
    <div className={className} >
      <label htmlFor={htmlFor}>{title}</label>
      <input type={type}  id={id}  placeholder={title} onChange={onChange}/>
       <p className="paragraph"></p>
    </div>
  );
}
