import React, { useState, useCallback } from "react";
import styled from "styled-components";

import Button from "../Button";
import Input from "../Input";

import { useLocales } from "../providers/LocalesProvider/LocalesProvider";
import { validateForm } from "./validationHelper/validateForm";
import { createTodo } from "../../store/TodoList";
import { useDispatch } from "react-redux";

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

const Form = () => {
    const { trans } = useLocales();
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const [error, setError] = useState(validateForm(" "));
    const [touched, setTouched] = useState(false);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
        setError(validateForm(e.target.value));
    }, []);

    const handleCreate = (e) => {
        e.preventDefault();

        if (error && !touched) {
            setTouched(true);
            return;
        }
        if (!error) {
            dispatch(createTodo(value));
            setValue('');
            setTouched(false);
            setError(validateForm(""));
        }
    };

    return (
        <FormContainer>
            <Input
                value={value}
                label={trans.newEditName}
                onChange={handleChange}
                error={Boolean((touched && error))}
                description={(touched && error)}
            />
            <FormButtonsContainer>
                <Button
                    onClick={handleCreate}
                >{trans.createButton}
                </Button>
            </FormButtonsContainer>
        </FormContainer>
    )
}

export default Form;

