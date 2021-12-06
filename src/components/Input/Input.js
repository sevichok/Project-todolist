import "./InputStyle.css";
import React from "react";

const Input = ({...inputProps }) => {
    return (
        <div className="divFormSearch">
        <input {...inputProps}
         />
    </div>

    );
};

export default Input;