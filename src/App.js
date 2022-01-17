import React, { useState, useCallback, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";

let listForLocalStorage = JSON.parse(localStorage.getItem("active-list") || "[]");
let listDeletedForLocalStorage = JSON.parse(localStorage.getItem("deleted-list") || "[]");

// const [filterStatus, setFilterStatus] = useState("all");
// const [filterValue, setFilterValue] = useState("");
// const [todoList, setTodoList] = useState(listForLocalStorage);
// const [deletedTodoList, setDeletedTodoList] = useState(listDeletedForLocalStorage);

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

    if (filterStatus === 'done') {
      console.log('Pressed filter done');
      return todoList.filter((todoItem) => todoItem.done === true);
    }
    if (filterStatus === 'all') {
      console.log('Pressed filter all');
      return todoList;
    }
    if (filterStatus === 'deleted') {
      console.log('Pressed filter deleted');
      return deletedTodoList
    }
    if (filterValue) {
      return todoList.filter((todoItem) => todoItem.name.toLowerCase().includes(filterValue.toLowerCase()))
    }
    return todoList
  };

  getFilteredToDo();

  const handleClick = (newFilterStatus) => {
    setFilterStatus(newFilterStatus)
  };

  return (
    <div className="container">
      <Header
        listCount={todoList.length}
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
        list={todoList}
        hideDeleteTodoBtn={filterStatus === 'deleted'}
        onDelete={handleDelete}
      />
      <Form onCreateTodo={handleCreateTodo} />
    </div>
  );
};

export default App;