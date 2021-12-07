import "./InputStyle.css";
import React from "react";

const Input = ({error,label,description,...inputProps }) => {
    return (<>
        <label htmlFor="search"><h5>{label}</h5></label>
        <div className="divFormSearch" error={error}>
        <input {...inputProps} className = {error ? "forErrorBorder" : " "}
         />
         {description && <h6 className = {error ? "forErrorDescription" : " "}>{description}</h6>}
    </div></>
    );
};

export default Input;