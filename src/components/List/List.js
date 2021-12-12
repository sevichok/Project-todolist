import ListItem from "../ListItem";
import "./ListStyle.css";
import React from "react";

const List = ({ list, onDone, onDelete }) => {
    const todoItems = list.map(({ id, name, done }) =>
        <ListItem
            key={id}
            id={id}
            name={name}
            done={done}
            onButtonDone={onDone}
            onButtonDelete={onDelete} />);

    // console.log();
    return (<ul className="listContainer">
        {todoItems}
    </ul>);
};

export default List;

