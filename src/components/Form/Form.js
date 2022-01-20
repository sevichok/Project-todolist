import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";
import { useLocales } from "../providers/LocalesProvider/LocalesProvider";

import { validateForm } from "./validationHelper/validateForm";
import React, { useState } from "react";

const FormContainer = styled("div")`
    background-color: ${(props) => props.theme.backgroundColor.item};
    border: black 2px solid;
    border-radius: 6px;
    margin-top: 10px;
    gap: 5px;
    font-size: 24px;
    padding: 10px 10px;
    text-align: center;
`;
const FormButtonsContainer = styled("div")`
    display: flex;
    justify-content: center;
`;

function Form({ onCreateTodo }) {

    const [name, setName] = useState(' ');
    const [error, setError] = useState(validateForm(" "));
    const [touched, setTouched] = useState(false);
    const { trans }= useLocales();

    const handleBlur = () => { setTouched(true) };

    const handleChange = (e) => {
        setName(e.target.value);
        setError(validateForm(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error && !touched) {
            setTouched(true);
            return;
        }
        if (!error) {
            onCreateTodo(name);
            setTouched(false);
            setName(" ");
            setError(validateForm(""));
        }
    };

    return (
        <FormContainer>
            <Input
                name="name"
                id="create"
                value={name}
                label={trans.newEditName}
                error={Boolean((touched && error))}
                description={(touched && error)}
                placeholder={trans.newEditName}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <FormButtonsContainer>
                <Button
                    onClick={handleSubmit}
                    type="submit"
                >{trans.createButton}
                </Button>
            </FormButtonsContainer>
        </FormContainer>
    )
}

export default Form;

