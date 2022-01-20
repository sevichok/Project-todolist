import Button from '../Button';
import styled from "styled-components";
import { useTheme } from '../providers/ThemeProvider';
import { useLocales } from '../providers/LocalesProvider/LocalesProvider';

const HeaderContainer = styled('div')`
  background-color: ${(props) => props.theme.backgroundColor.item};
  border: black 2px solid;
  border-radius: 6px;
  text-align: center;
  padding: 10px 10px;
`;

const Header = ({ listCount }) => {
  const { toggleTheme } = useTheme();
  const { trans, toggleLang } = useLocales();

  return (
    <HeaderContainer>
      <h1> {trans.mainTitle}</h1>
      <h4>{trans.listCount} : {listCount}</h4>
      <Button onClick={toggleLang}>{trans.changeLang}</Button>
      <Button onClick={toggleTheme}>{trans.changeTheme}</Button>
    </HeaderContainer>
  );
};

export default Header;
