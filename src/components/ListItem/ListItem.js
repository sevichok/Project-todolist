import Button from "../Button";
import "./ListItemStyle.css";

const ListItem = (name) => {
    return (<li className="listItem">
        <div className="listItemText">
        <h4>{name}</h4></div>
        <div className="listItemButtons">
            <Button outlook="outlined" size="small" type="button" children="Выполнено"></Button>
            <Button outlook="outlined" size="small" type="button" children="Удалить"></Button>
        </div>
    </li>)
}

export default ListItem;