import ListItem from "../ListItem";
import React from "react";
import styled from "styled-components";

const UlContainer = styled('ul')`
    background-color: white;
    border: black 2px solid;
    border-radius: 6px;
    padding-inline-start: 0px;
    margin-block-start: 10px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    list-style-type: none;
    padding: 0 10px 10px;
`;

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
    return (<UlContainer>
        {todoItems}
    </UlContainer>);
};

export default List;

