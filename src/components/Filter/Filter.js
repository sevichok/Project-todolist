import "./FilterStyle.css";
import Button from "../Button";

const Filter = (done, onChangeFilterValue) => {
    const selectDoneFilter = () => {
        onChangeFilterValue(done)
    }

    return (<div className="filterContainer">
        <label htmlFor="search"><h4>Поиск по названию</h4></label>
        <div className="inputContainer">
            <input id="search" placeholder="Начни вводить" /></div>
        <div className="filterContainerButtons">
            <Button
                outlook="contained"
                size="large"
                type="button"
            >Все</Button>
            <Button outlook="contained"
                size="large"
                type="button"
                onClick={selectDoneFilter}
                >Выполненные</Button>
            <Button
                outlook="contained"
                size="large"
                type="button"
            >Удаленные</Button>
        </div>
    </div>);
};

export default Filter;