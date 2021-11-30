
const Form = () => {
    return (<div>
        <label htmlFor="search">Поиск по названию</label>
        <input id="search" placeholder="Начни вводить" />
        <button type="button">Все</button>
        <button type="button">Выполненные</button>
        <button type="button">Удалённые</button>
    </div>);
};

export default Form;