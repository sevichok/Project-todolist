import Button from "../Button";
import React, { useState } from "react";
import EditComponent from "../EditComponent";
import styled from "styled-components";

const ListItemContainer = styled('li')`
    background-color: white;
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



const ListItem = ({ hideDeleteTodoBtn, name, id, onButtonDone, onButtonDelete, onButtonEdit }) => {

    const [showEditInput, setShowEditInput] = useState(false);

    const handleDelete = () => {
        onButtonDelete(id);
    };

    const handleDone = () => {
        onButtonDone(id);
    };

    const handleEdit = (newName) => {
        onButtonEdit(id, newName);

    }

    const handleOpenUpdate = () => {
        setShowEditInput(true);
    }

    const handleEditBack = () => {
        setShowEditInput(false);
    }


    return (<ListItemContainer>
        <div className="listItemText">
            <h4>{name}</h4>
        </div>
        <ListItemButtonsContainer>
            <ForEditStateContainer>
                {showEditInput && <>
                    <EditComponent
                        onEditRollback={handleEditBack}
                        onEditUpdate={handleEdit}
                        initialValue={name}
                        onClosePanel={handleEditBack} />
                </>}</ForEditStateContainer>
            {!showEditInput && (<>
                {!hideDeleteTodoBtn && (
                    <Button
                        onClick={handleOpenUpdate}
                    >Изменить
                    </Button>)}
                {!hideDeleteTodoBtn && (
                    <Button
                        onClick={handleDone}
                    >Выполнено
                    </Button>)}
                {!hideDeleteTodoBtn && (
                    <Button
                        onClick={handleDelete}
                    >Удалить
                    </Button>)}</>)}
        </ListItemButtonsContainer>
    </ListItemContainer>)
}

export default ListItem;