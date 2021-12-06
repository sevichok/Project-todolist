import ListItem from "../ListItem";
import "./ListStyle.css";
import React from "react";

const List = ({ list }) => {
    const todoItems = list.map(({ id, name, done }) => <ListItem key={id} name={name} done={done} />);

    // console.log();
    return (<ul className="listContainer">
        {todoItems}
    </ul>);
};

export default List;

