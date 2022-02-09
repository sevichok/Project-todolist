import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { useLocales } from "../providers/LocalesProvider/LocalesProvider";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../store/TodoList";
import store from "../../store"

const EditComponent = ({ initialValue, onEditRollback, editingId }) => {

    const [value, setValue] = useState(initialValue);
    const { trans } = useLocales();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(
            e.target.value
        );
    }
    const handleEdit = () => {
        dispatch(updateTodo(value, editingId));
        console.log(updateTodo(value, editingId));
        console.log(store.getState());
        onEditRollback();
    }

    return (
        <div>
            <Input
                value={value}
                placeholder={trans.newEditName}
                onChange={handleChange} />
            <Button
                onClick={handleEdit}
            >{trans.editButton}
            </Button>
            <Button
                onClick={onEditRollback}
            >{trans.backButton}
            </Button>
        </div>
    )
}

export default EditComponent;
