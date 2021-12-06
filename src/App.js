import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";

import React from "react";
import { v4 as uuidv4 } from "uuid";

let listForLocalStorage = JSON.parse(localStorage.getItem("active-list") || "[]"); // список передаваемый в localStorage
// let listDeletedForLocalStorage = JSON.parse(localStorage.getItem("deleted-list") || "[]");

class App extends React.Component {
  state = {
    filterStatus: "all", // deleted, done
    filterValue: "",
    todoList: listForLocalStorage,
    deletedTodo: [],
  };

  handleCreateTodo = (name) => {
    const id = uuidv4();

    this.setState({
      todoList: this.state.todoList.concat([{ name, done: false, id: id }]),
    });

    console.log(id);
    console.log(this.state.todoList);

    listForLocalStorage.push({ name, id, done: false });
    localStorage.setItem("active-list", JSON.stringify(listForLocalStorage));
  };

  render() {
    const { todoList } = this.state;


    return (
      <div className="container">
        <Header children={todoList.length} />
        <Filter />
        <List list={todoList} />
        <Form onCreateTodo={this.handleCreateTodo} />
      </div>
    );
  };
};

export default App;