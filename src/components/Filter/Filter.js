import "./FilterStyle.css";
import Button from "../Button";
import Input from "../Input";

const Filter = ({ inputValue, onClick }) => {

    const onDoneStatus = () => {
        onClick('done')
    }
    const onAllStatus = () => {
        onClick('all')
    }
    const onDeletedStatus = () => {
        onClick('deleted')
    }

    return (<div className="filterContainer">
        <label htmlFor="search"><h4>Поиск по названию</h4></label>
        <div className="inputContainer">
            <Input
                placeholder="Начни вводить для фильтрации"
                name={inputValue}
            /></div>
        <div className="filterContainerButtons">
            <Button
                outlook="contained"
                size="large"
                type="button"
                onClick={onAllStatus}
            >Все</Button>
            <Button outlook="contained"
                size="large"
                type="button"
                onClick={onDoneStatus}
            >Выполненные</Button>
            <Button
                outlook="contained"
                size="large"
                type="button"
                onClick={onDeletedStatus}
            >Удаленные</Button>
        </div>
    </div>);
};

export default Filter;