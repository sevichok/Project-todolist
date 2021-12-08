import ListItem from "../ListItem";
import "./ListStyle.css";
import React from "react";

const List = ({ list, onDone, onDelete }) => {
    const todoItems = list.map(({ id, name, done }) =>
        <ListItem
            key={id}
            name={name}
            done={done}
            pressedButtonDone={onDone}
            pressedButtonDelete={onDelete} />);

    // console.log();
    return (<ul className="listContainer">
        {todoItems}
    </ul>);
};

export default List;

