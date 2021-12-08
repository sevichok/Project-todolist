import Button from "../Button";
import "./ListItemStyle.css";
import React from "react";

const ListItem = ({ name, id, pressedButtonDone, pressedButtonDelete }) => {
    const handleDelete = () => {
        pressedButtonDelete(id);
    };

    const handleDone = () => {
        pressedButtonDone(id);
    };

    return (<li className="listItem">
        <div className="listItemText">
            <h4>{name}</h4>
        </div>
        <div className="listItemButtons">
            <Button
                outlook="outlined"
                size="small"
                type="button"
                onClick={handleDone}
            >Выполнено
            </Button>
            <Button
                outlook="outlined"
                size="small"
                type="button"
                onClick={handleDelete}
            >Удалить
            </Button>
        </div>
    </li>)
}

export default ListItem;