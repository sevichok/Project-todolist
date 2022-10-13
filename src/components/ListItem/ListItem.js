import Button from "../Button";
import React, { useState } from "react";
import EditComponent from "../EditComponent";
import styled from "styled-components";
import { useLocales } from "../providers/LocalesProvider/LocalesProvider";
import { useDispatch } from "react-redux";
import { doneTodo, deleteTodo } from "../../store/TodoList";
import store from "../../store"

const ListItemContainer = styled('li')`
    background-color: ${({ completed }) => (completed ? "#5aff57" : "transparent")};
    border: black 1px solid;
    border-radius: 6px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
`;
const ForEditStateContainer = styled('div')`
    padding: 5px 0px;

    > button {
        width: 50%;
    }
`;
const ListItemButtonsContainer = styled('div')`
    align-self: center;
`;

console.log("INITIAL STATE", store.getState());

const ListItem = ({ title, id, completed }) => {

    const [showEditInput, setShowEditInput] = useState(false);
    
    const { trans } = useLocales();
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(id));
    };

    const handleDone = () => {
        dispatch(doneTodo(id));
    };

    const handleEditOpen = () => {
        setShowEditInput(true);
    }

    const handleEditBack = () => {
        setShowEditInput(false);
    }

    return (<ListItemContainer completed={completed}>
        <h4>{title}</h4>
        {<ListItemButtonsContainer>
            <ForEditStateContainer>
                {showEditInput && <>
                    <EditComponent
                        onEditRollback={handleEditBack}
                        initialValue={title}
                        editingId={id}
                    />
                </>}
            </ForEditStateContainer>
            {!showEditInput && <>
                <Button
                    onClick={handleEditOpen}
                >{trans.renameButton}
                </Button></>}
            {!showEditInput && <>
                <Button
                    onClick={handleDone}
                >{trans.doneButton}
                </Button></>}
            {!showEditInput && <>
                <Button
                    onClick={handleDelete}
                >{trans.deleteButton}
                </Button></>}
        </ListItemButtonsContainer>}
    </ListItemContainer>)
}

export default ListItem;