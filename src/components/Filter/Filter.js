import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";
import { useLocales } from "../providers/LocalesProvider/LocalesProvider";
import { useDispatch } from "react-redux";
import { filterAll, filterDone, filterDeleted, filterValue } from "../../store/TodoList";

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

const Filter = () => {
    const { trans } = useLocales();
    const dispatch = useDispatch();

    const onDoneStatus = (id) => {
        dispatch(filterDone(id));
    }
    const onAllStatus = (id) => {
        dispatch(filterAll(id));
    }
    const onDeletedStatus = (id) => {
        dispatch(filterDeleted(id));
    }

    const handleFilterChange = (e) => {
        dispatch(filterValue(e.target.value));
    };

    return (<FilterContainer>
        <label htmlFor="search"><h4>{trans.searchTitle}</h4></label>
        <InputContainer>
            <Input
                name='name'
                placeholder={trans.inputPlaceholder}
                onChange={handleFilterChange}
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
