import "./FilterStyle.css";
import Button from "../Button";

const Filter = () => {
    return (<div className="filterContainer">
        <label htmlFor="search">Поиск по названию</label>
        <input id="search" placeholder="Начни вводить" />
        <Button>Все</Button>
        <Button>Выполненные</Button>
        <Button>Удаленные</Button>
    </div>);
};

export default Filter;