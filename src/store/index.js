import { createStore, combineReducers } from "redux";

import { TodoListReducer } from "./TodoList";

const reducers = combineReducers({ todoList: TodoListReducer });
const store = createStore(reducers);

export default store;
