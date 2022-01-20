import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";

import styled from "styled-components";

const AppWrapper = styled('div')`
  margin: auto;
  font-family:'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: rgb(215, 215, 215);//////////
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

let listForLocalStorage = JSON.parse(localStorage.getItem("active-list") || "[]");
let listDeletedForLocalStorage = JSON.parse(localStorage.getItem("deleted-list") || "[]");

function App() {

  const [filterStatus, setFilterStatus] = useState("all");
  const [filterValue, setFilterValue] = useState("");
  const [todoList, setTodoList] = useState(listForLocalStorage);
  const [deletedTodoList, setDeletedTodoList] = useState(listDeletedForLocalStorage);

  useEffect(() => {
    localStorage.setItem("active-list", JSON.stringify(todoList));
    localStorage.setItem("deleted-list", JSON.stringify(deletedTodoList));
  }, [todoList, deletedTodoList]);

  const handleCreateTodo = (name) => {
    const createId = uuidv4(); //Math.floor(Math.random() * 10000), uuidv4()
    setTodoList(todoList.concat({
      name,
      done: false,
      id: createId,
    }));
  };

  const handleDone = (id) => {
    setTodoList(todoList.map((todoItem) =>
      todoItem.id === id ? { ...todoItem, done: true } : todoItem
    ));
  };

  const handleEdit = (id, name) => {
    setTodoList(todoList.map((todoItem) => todoItem.id === id ? { ...todoItem, name } : todoItem));
  };

  const handleDelete = (id) => {
    const deletedTodoIndex = todoList.findIndex(
      (todoItem) => todoItem.id === id
    );
    if (deletedTodoIndex < 0) { return todoList }
    const deletedTodoItem = (todoList.splice(deletedTodoIndex, 1));
    setTodoList([...todoList]);
    setDeletedTodoList(deletedTodoList.concat(deletedTodoItem));
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value)
  };

  const getFilteredToDo = () => {
    let initialList;

    if (filterStatus === 'done') {
      console.log('Pressed filter done');
      initialList = todoList.filter((todoItem) => todoItem.done === true);
    }
    if (filterStatus === 'all') {
      console.log('Pressed filter all');
      initialList = todoList;
    }
    if (filterStatus === 'deleted') {
      console.log('Pressed filter deleted');
      initialList = deletedTodoList
    }
    if (filterValue) {
      initialList = initialList.filter((todoItem) => todoItem.name.toLowerCase().includes(filterValue.toLowerCase()))
    }
    return initialList
  };

  const filteredList = getFilteredToDo();

  const handleClick = (newFilterStatus) => {
    setFilterStatus(newFilterStatus)
  };

  return (
    <AppWrapper>
      <Header
        listCount={filteredList.length}
      />
      <Filter
        onClick={handleClick}
        inputValue={filterValue}
        onFilterChange={handleFilterChange}
      />
      <List
        onEdit={handleEdit}
        initialValue={todoList.name}
        onDone={handleDone}
        list={filteredList}
        hideDeleteTodoBtn={filterStatus === 'deleted'}
        onDelete={handleDelete}
      />
      <Form onCreateTodo={handleCreateTodo} />
    </AppWrapper>
  );
};

export default App;