import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";
import { useLocales } from "../providers/LocalesProvider/LocalesProvider";

import { validateForm } from "./validationHelper/validateForm";
import React, { useState, useCallback } from "react";

import { createTodo } from "../../store/TodoList";
import { useDispatch } from "react-redux";
import store from "../../store";

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

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handleCreate = (e) => {
        e.preventDefault();

        dispatch(createTodo(value));
        console.log(createTodo(value));
        setValue('');
        console.log(store.getState());
    };

    return (
        <FormContainer>
            <Input
                value={value}
                label={trans.newEditName}
                onChange={handleChange}
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

