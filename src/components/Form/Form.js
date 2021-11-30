import "./FormStyle.css";

const Form = () => {
    return (
        <div className="formContainer">
            <label htmlFor="search">Новое задание</label>
            <input id="search" placeholder="Название" />
            <button type="button">Создать</button>
        </div>
    )
}

export default Form;