import "./FilterStyle.css";
import Button from "../Button";

const Filter = () => {
    return (<div className="filterContainer">
        <label htmlFor="search">Поиск по названию</label>
        <input id="search" placeholder="Начни вводить" />
        <Button value='Все'></Button>
        <Button value='Выполненные'></Button>
        <Button value='Удаленные'></Button>
    </div>);
};

export default Filter;