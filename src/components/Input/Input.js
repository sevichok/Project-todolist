import "./InputStyle.css";
import React from "react";

const Input = ({error,description,...inputProps }) => {
    return (
        <div className="divFormSearch" error={error}>
        <input {...inputProps} className = {error ? "forErrorBorder" : " "}
         />
         <div className="divForDescription">
         {description && <h6 className = {error ? "forErrorDescription" : " "}>{description}</h6>}
         </div>
    </div>
    );
};

export default Input;