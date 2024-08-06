import React, { useState, useEffect, useRef } from "react";

export default function InputField({ id, type, htmlFor, title, className }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const handleClick = () => {
    if (value === "") {
      setError("Please complete this required field.");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setError("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={className} ref={inputRef}>
      <label htmlFor={htmlFor}>{title}</label>
      <input type={type} id={id} placeholder={title} value={value} onChange={(e) => setValue(e.target.value)} onClick={handleClick}/>
      {error && <p className="paragraph">{error}</p>}
    </div>
  );
}
