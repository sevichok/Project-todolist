import Button from '../Button';
import styled from "styled-components";

const HeaderContainer = styled('div')`
  background-color: white;
  border: black 2px solid;
  border-radius: 6px;
  text-align: center;
  padding: 10px 10px;
`;

const Header = ({listCount}) => {
  return (
    <HeaderContainer>
      <h1 className="title"> Todo list</h1>
      <h4> Количество записей : {listCount}</h4>
      <Button>Изменить язык</Button>
      <Button>Изменить тему</Button>
    </HeaderContainer>
  );
};

export default Header;
