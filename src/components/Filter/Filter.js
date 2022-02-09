import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";
import { useLocales } from "../providers/LocalesProvider/LocalesProvider";
// import { useState } from "react";
import store from "../../store";
import { useDispatch } from "react-redux";
import { filterAll, filterDone, filterDeleted } from "../../store/TodoList";

const FilterContainer = styled('div')`
    gap: 5px;
    background-color: ${(props) => props.theme.backgroundColor.item};
    border: black 2px solid;
    border-radius: 6px;
    margin-top: 10px;
    text-align: center;
    padding: 10px 10px;
`;
const FilterContainerButtons = styled('div')`
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
`;
const InputContainer = styled('div')`
    padding: 5px 10px 10px;
    justify-content: center;
`;

const Filter = ({ inputValue, onFilterChange }) => {
    const { trans } = useLocales();
    const dispatch = useDispatch();
    
    const onDoneStatus = (id) => {
        dispatch(filterDone(id));
        console.log(filterDone(id))
        console.log(store.getState());
    }
    const onAllStatus = (id) => {
        dispatch(filterAll(id));
        console.log(filterAll(id))
        console.log(store.getState());
    }
    const onDeletedStatus = (id) => {
        dispatch(filterDeleted(id));
        console.log(filterDeleted(id))
        console.log(store.getState());
    }

    return (<FilterContainer>
        <label htmlFor="search"><h4>{trans.searchTitle}</h4></label>
        <InputContainer>
            <Input
                name='name'
                placeholder={trans.inputPlaceholder}
                value={inputValue}
                onChange={onFilterChange}
            /></InputContainer>
        <FilterContainerButtons>
            <Button
                onClick={onAllStatus}
            >{trans.allButtonFilter}</Button>
            <Button
                onClick={onDoneStatus}
            >{trans.doneButtonFilter}</Button>
            <Button
                onClick={onDeletedStatus}
            >{trans.deletedButtonFilter}</Button>
        </FilterContainerButtons>
    </FilterContainer>);
};

export default Filter;

    // const [filterStatus, setFilterStatus] = useState("all");
    // const onDoneStatus = () => {
    //     setFilterStatus('done')
    // }
    // const onAllStatus = () => {
    //     setFilterStatus('all')
    // }
    // const onDeletedStatus = () => {
    //     setFilterStatus('deleted')
    // }