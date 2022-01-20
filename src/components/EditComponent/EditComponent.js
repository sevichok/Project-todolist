import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { useLocales } from "../providers/LocalesProvider/LocalesProvider";

const EditComponent = ({ initialValue, onEditRollback, onEditUpdate, onClosePanel }) => {

    const [value, setValue] = useState(initialValue);
    const { trans } = useLocales();

    const handleChange = (e) => {
        setValue(
            e.target.value
        );
    }

    const handleUpdateToDo = () => {
        onEditUpdate(value);
        onClosePanel();
    }

    return (
        <div>
            <Input
                value={value}
                placeholder={trans.newEditName}
                onChange={handleChange} />
            <Button
                onClick={handleUpdateToDo}
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
