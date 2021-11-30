import "./ButtonStyle.css";

const Button = (props) => {
    return (
        <button type="button" className="button">{props.value}</button>
    );
};

export default Button;