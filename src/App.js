import React from "react";
// import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";
import Input from "./components/Input";



let listForLocalStorage = JSON.parse(localStorage.getItem("active-list") || "[]"); // список передаваемый в localStorage
let listDeletedForLocalStorage = JSON.parse(localStorage.getItem("deleted-list") || "[]");

// const defaultTodo = {
//   id: uuidv4(),
//   name: "default todo",
//   done: false,
// };

class App extends React.Component {
  state = {
    filterStatus: "all", // deleted, done
    filterValue: "",
    todoList: listForLocalStorage,
    deletedTodoList: listDeletedForLocalStorage,
  };

  handleCreateTodo = (name) => {
    const createId = Math.floor(Math.random() * 100000); //Math.floor(Math.random() * 10000), uuidv4()

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

  handleEdit = (id, name, newTitleValue) => {
    console.log(`Pressed button Edit on item with name: ${name}`);

    this.setState((state) => ({
      todoList: state.todoList.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, name: name } : todoItem
      ),
    }),
    )
  };

  handleDelete = (id) => {
    console.log(`Pressed button Delete on item with ID: ${id}`);

    this.setState((state) => {
      const deletedTodoIndex = state.todoList.findIndex(
        (todoItem) => todoItem.id === id
      );

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
      console.log('Pressed filter done')
      todoList = this.state.todoList.filter((todoItem) => todoItem.done === true)
    }
    if (this.state.filterStatus === 'all') {
      console.log('Pressed filter all')
      todoList = this.state.todoList
    }
    if (this.state.filterStatus === 'deleted') {
      console.log('Pressed filter deleted')
      todoList = this.state.deletedTodoList
    }
    if (this.state.filterValue) {
      todoList = todoList.filter((todoItem) => todoItem.name.toLowerCase().includes(this.state.filterValue.toLowerCase()))
    }
    return todoList
  }

  handleFilterChange = (e) => {
    this.setState({
      filterValue : e.target.value,
    });
  };


  handleClick = (newFilterStatus) => {
    this.setState({ filterStatus: newFilterStatus })
  }

  render() {
    const todoList = this.getFilteredToDo();
    console.log(this.getFilteredToDo());

    return (
      <div className="container">
        <Header listCount={todoList.length} />
        <Filter
          onClick={this.handleClick}
          inputValue={this.state.filterValue}
          onFilterChange={this.handleFilterChange} />
        <List
          onEdit={this.handleEdit}
          onDone={this.handleDone}
          list={todoList}
          onDelete={this.handleDelete} />
        <Form onCreateTodo={this.handleCreateTodo} />
      </div>
    );
  };
};

export default App;