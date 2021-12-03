import "./FormStyle.css";
import Button from "../Button";

const Form = () => {
    return (
        <div className="formContainer">
            <label htmlFor="search"><h4>Новое задание</h4></label>
            <div className="divFormSearch">
                <input id="search" placeholder="Название" />
            </div>
            <div className="divFormButtons">
                <Button outlook="contained" size="large" type="button" children='Создать'></Button>
            </div>
        </div>
    )
}

export default Form;