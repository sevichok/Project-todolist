import "./InputStyle.css";

const Input = ({...inputProps }) => {
    return (
        <div className="divFormSearch">
        <input {...inputProps}
         />
    </div>

    );
};

export default Input;