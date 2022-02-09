import React from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";

import ThemeProvider from "./components/providers/ThemeProvider/ThemeProvider";
import LocalesProvider from "./components/providers/LocalesProvider/LocalesProvider";
import styled from "styled-components";

const AppWrapper = styled('div')`
  margin: auto;
  font-family:'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: ${(props) => props.theme.backgroundColor.main};
  padding: 0px 200px;
  border: black 2px solid;
  border-radius: 6px;
  margin-top: 10px;
  padding: 10px 20px;
  max-width: 800px;

  > h6 , h5 {
  padding-top: 5px;
  margin: 0px;
  }
`;

const App = () => {

  return (
    <ThemeProvider>
      <LocalesProvider>
        <AppWrapper>
          <Header />
          <Filter />
          <List />
          <Form />
        </AppWrapper>
      </LocalesProvider>
    </ThemeProvider>
  );
};

export default App;