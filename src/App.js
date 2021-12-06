import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";

import React from "react";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    filterStatus: "all", // deleted, done
    filterValue: "",
    todoList: [],
    deletedTodo: [],
  };

  handleCreateTodo = (name) => {
    const id = uuidv4();
    this.setState({
      todoList: this.state.todoList.concat({ name, done: false, id: id }),
    });
    console.log(id)
  };

  render() {
    const { todoList } = this.state;

    return (
      <div className="container">
        <Header />
        <Filter />
        <List list={todoList}/>
        <Form onCreateTodo={this.handleCreateTodo}/>
      </div>
    );
  };
};

export default App;