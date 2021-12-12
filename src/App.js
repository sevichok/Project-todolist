import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";



// let listForLocalStorage = JSON.parse(localStorage.getItem("active-list") || "[]"); // список передаваемый в localStorage
// let listDeletedForLocalStorage = JSON.parse(localStorage.getItem("deleted-list") || "[]");

/*
  1. handleChangeFilterValue => <Filter onChangeFilterValue={handleChangeFilterValue}/>
  2. handleClick => <Filter onChangeFilterValue={handleChangeFilterValue} onClick={handleClick}/> // фильтрация по кнопкам

*/
const defaultTodo = {
  id: uuidv4(),
  name: "default todo",
  done: false,
};

class App extends React.Component {
  state = {
    filterStatus: "all", // deleted, done
    filterValue: "",
    todoList: [defaultTodo],
    deletedTodoList: [],
    changeState: []
  };

  handleCreateTodo = (name) => {
    const createId = uuidv4();

    this.setState({
      todoList: this.state.todoList.concat({
        name,
        done: false,
        id: createId,
      }),
    },
      () => { localStorage.setItem("active-list", JSON.stringify(this.state.todoList)); });
  };

  handleDone = (id) => {
    console.log(`Pressed button Done on item with ID: ${id}`);

    this.setState((state) => ({
      todoList: state.todoList.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, done: true } : todoItem
      ),
    }),
      () => { localStorage.setItem("active-list", JSON.stringify(this.state.todoList)); });
  };

  handleDelete = (id) => {
    console.log(`Pressed button Delete on item with ID: ${id}`);

    this.setState((state) => {
      const deletedTodoIndex = state.todoList.findIndex(
        (todoItem) => todoItem.id === id
      );

      const deletedTodoItem = state.todoList.splice(deletedTodoIndex, 1);

      // listDeletedForLocalStorage.push(deletedTodoItem);
      // localStorage.setItem("deleted-list", JSON.stringify(listDeletedForLocalStorage));

      return {
        todoList: [...state.todoList],
        deletedTodoList: state.deletedTodoList.concat(deletedTodoItem),
      };
    },
      () => { localStorage.setItem("active-list", JSON.stringify(this.state.todoList)); });
  };

  render() {
    const { todoList } = this.state;
    console.log(this.state.todoList);

    return (
      <div className="container">
        <Header listCount={todoList.length} />
        <Filter />
        <List
          onDone={this.handleDone}
          list={todoList}
          onDelete={this.handleDelete} />
        <Form onCreateTodo={this.handleCreateTodo} />
      </div>
    );
  };
};

export default App;