import "./FormStyle.css";
import Button from "../Button";
import Input from "../Input";

const Form = () => {
    return (
        <div className="formContainer">
            <label htmlFor="search"><h4>Новое задание</h4></label>
            <Input
                name="name"
                id="create"
                placeholder="Название"
            />
            <div className="divFormButtons">
                <Button outlook="contained" size="large" type="button" children='Создать'></Button>
            </div>
        </div>
    )
}

export default Form;

//                 onChange={this.handleChange}