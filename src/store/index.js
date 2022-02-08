import { createStore, combineReducers, compose } from "redux";
import { TodoListReducer } from "./TodoList";

const reducers = combineReducers({
    todo: TodoListReducer,
});
const store = createStore(reducers, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
