import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";

let listForLocalStorage = JSON.parse(localStorage.getItem("active-list") || "[]");
let listDeletedForLocalStorage = JSON.parse(localStorage.getItem("deleted-list") || "[]");

class App extends React.Component {
  state = {
    filterStatus: "all",
    filterValue: "",
    todoList: listForLocalStorage,
    deletedTodoList: listDeletedForLocalStorage,
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
      () => { localStorage.setItem("active-list", JSON.stringify(this.state.todoList)); }
    );
  };

  handleDone = (id) => {

    this.setState((state) => ({
      todoList: state.todoList.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, done: true } : todoItem
      ),
    }),
      () => { localStorage.setItem("active-list", JSON.stringify(this.state.todoList)); });
  };

  handleEdit = (id, name) => {

    this.setState((state) => ({
      todoList: state.todoList.map((todoItem) => todoItem.id === id ? { ...todoItem, name } : todoItem),
    }),
    )
  };

  handleDelete = (id) => {

    this.setState((state) => {
      const deletedTodoIndex = state.todoList.findIndex(
        (todoItem) => todoItem.id === id
      );

      if (deletedTodoIndex < 0) { return state }

      const deletedTodoItem = state.todoList.splice(deletedTodoIndex, 1);

      return {
        todoList: [...state.todoList],
        deletedTodoList: state.deletedTodoList.concat(deletedTodoItem),
      };
    },
      () => {
        localStorage.setItem("active-list", JSON.stringify(this.state.todoList));
        localStorage.setItem("deleted-list", JSON.stringify(this.state.deletedTodoList))
      });
  };

  getFilteredToDo = () => {

    let todoList = [];

    if (this.state.filterStatus === 'done') {
      todoList = this.state.todoList.filter((todoItem) => todoItem.done === true)
    }
    if (this.state.filterStatus === 'all') {
      todoList = this.state.todoList
    }
    if (this.state.filterStatus === 'deleted') {
      todoList = this.state.deletedTodoList
    }
    if (this.state.filterValue) {
      todoList = todoList.filter((todoItem) => todoItem.name.toLowerCase().includes(this.state.filterValue.toLowerCase()))
    }
    return todoList
  }

  handleFilterChange = (e) => {
    this.setState({
      filterValue: e.target.value,
    });
  };


  handleClick = (newFilterStatus) => {
    this.setState({ filterStatus: newFilterStatus })
  }

  render() {
    const todoList = this.getFilteredToDo();

    return (
      <div className="container">
        <Header listCount={todoList.length} />
        <Filter
          onClick={this.handleClick}
          inputValue={this.state.filterValue}
          onFilterChange={this.handleFilterChange} />
        <List
          onEdit={this.handleEdit}
          initialValue={this.state.name}
          onDone={this.handleDone}
          list={todoList}
          hideDeleteTodoBtn={this.state.filterStatus === 'deleted'}
          onDelete={this.handleDelete} />
        <Form onCreateTodo={this.handleCreateTodo} />
      </div>
    );
  };
};

export default App;