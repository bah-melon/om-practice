import React from "react";

export default function InputField({ id, type, htmlFor, title, className, value, onChange }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor || id}>{title}</label>
      <input 
        type={type}
        id={id}
        value={value}
        placeholder={title}
        onChange={onChange}
      />
      <p className="paragraph"></p>
    </div>
  );
}
