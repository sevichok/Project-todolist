import styled from "styled-components";

const StyledButton = styled('button')`
    font-family:Verdana, Tahoma, sans-serif;
    border-radius: 6px;
    width: 150px;
    background-color: ${(props) => props.theme.button.backgroundColor};
    border: 1.6px solid ${(props) => props.theme.button.borderColor};
    color: ${(props) => props.theme.color.main};

    :hover {
    cursor: pointer;
    transform: scale(1.02);
    }
`;

const Button = ({ children, onClick }) => {
    return (
        <StyledButton
            onClick={onClick}
        >{children}</StyledButton>
    );
};

export default Button;