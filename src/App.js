import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";



let listForLocalStorage = JSON.parse(localStorage.getItem("active-list") || "[]"); // список передаваемый в localStorage
// let listDeletedForLocalStorage = JSON.parse(localStorage.getItem("deleted-list") || "[]");

/*
  1. handleChangeFilterValue => <Filter onChangeFilterValue={handleChangeFilterValue}/>
  2. handleClick => <Filter onChangeFilterValue={handleChangeFilterValue} onClick={handleClick}/> // фильтрация по кнопкам
  3. handleDone => <List list={todoList} onDone={handleDone} />
  4. handleDelete => <List list={todoList} onDone={handleDone} onDelete={handleDelete} />
*/
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
    deletedTodoList: [],
  };

  handleCreateTodo = (name) => {
    const createId = uuidv4();

    this.setState({
      todoList: this.state.todoList.concat({
        name,
        done: false,
        id: createId,
      }),
    });

    // console.log(id);
    // console.log(this.state.todoList);

    // listForLocalStorage.push({ name, id: createId, done: false });
    // localStorage.setItem("active-list", JSON.stringify(listForLocalStorage));
  };

  handleDone = (id) => {
    console.log(`Pressed button Done on item with ID: ${id}`);

    this.setState((state) => ({
      todoList: state.todoList.map((todo) =>
        todo.id === id ? { ...todo, done: true } : todo
      ),
    }));
  };

  handleDelete = (id) => {
    console.log(`Pressed button Delete on item with ID: ${id}`);

    this.setState((state) => {
      const deletedTodoIndex = state.todoList.findIndex(
        (todo) => todo.id === id
      );

      const deletedTodo = state.todoList.splice(deletedTodoIndex, 1);

      return {
        todoList: [...state.todoList],
        deletedTodoList: state.deletedTodoList.concat(deletedTodo),
      };
    });
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