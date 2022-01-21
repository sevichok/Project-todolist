import ListItem from "../ListItem";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getSlice } from "../../store/TodoList";

const UlContainer = styled('ul')`
    background-color: ${(props) => props.theme.backgroundColor.item};
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

const List = () => {
    const { todoList } = useSelector(getSlice);

    const todoItems = todoList.map((TodoItem) =>
        <ListItem
            key={TodoItem.id}
            {...TodoItem}
        />);

    return (<UlContainer>
        {todoItems}
    </UlContainer>);
};

export default List;

