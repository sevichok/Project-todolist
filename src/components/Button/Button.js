import "./ButtonStyle.css";
// import cn from "classnames";

const Button = ({children,variant}) => {
    return (
        <button type="button contained" className="button">{children}</button>
    );
};

export default Button;