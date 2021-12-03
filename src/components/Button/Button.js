import "./ButtonStyle.css";
import cn from "classnames";

const Button = ({children, outlook, size}) => {
    return (
        <button className={cn("button", outlook, size)}>{children}</button>
    );
};

export default Button;