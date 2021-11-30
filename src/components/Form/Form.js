import "./FormStyle.css";
import Button from "../Button";

const Form = () => {
    return (
        <div className="formContainer">
            <label htmlFor="search">Новое задание</label>
            <input id="search" placeholder="Название" />
            <Button value='Создать'></Button>
        </div>
    )
}

export default Form;