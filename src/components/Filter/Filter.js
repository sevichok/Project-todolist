import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";
import { useLocales } from "../providers/LocalesProvider/LocalesProvider";

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

const Filter = ({ onFilterChange, inputValue, onClick }) => {
    const { trans } = useLocales();

    const onDoneStatus = () => {
        onClick('done')
    }
    const onAllStatus = () => {
        onClick('all')
    }
    const onDeletedStatus = () => {
        onClick('deleted')
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