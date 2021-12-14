import Button from "../Button";
import "./ListItemStyle.css";
import React from "react";
import Input from "../Input";

const ListItem = ({ name, id, onButtonDone, onButtonDelete, onButtonEdit }) => {
    const handleDelete = () => {
        onButtonDelete(id);
    };

    const handleDone = () => {
        onButtonDone(id);
    };

    const handleEdit = () => {
        onButtonEdit(name);
    }

    return (<li className="listItem">
        <div className="listItemText">
            <h4>{name}</h4>
        </div>
        <div className="listItemButtons">
            {Button.onClick={handleEdit} && (
                <Input/>
            )}
            <Button
                outlook="outlined"
                size="small"
                type="button"
                onClick={handleEdit}
            >Изменить
            </Button>
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