import ListItem from "../ListItem";
import "./ListStyle.css";
import React from "react";

const List = ({ hideDeleteTodoBtn,list, onDone, onDelete, onEdit }) => {
    const todoItems = list.map(({ id, name, done }) =>
        <ListItem
            key={id}
            id={id}
            hideDeleteTodoBtn={hideDeleteTodoBtn}
            name={name}
            done={done}
            onButtonEdit={onEdit}
            onButtonDone={onDone}
            onButtonDelete={onDelete} />);
    return (<ul className="listContainer">
        {todoItems}
    </ul>);
};

export default List;

