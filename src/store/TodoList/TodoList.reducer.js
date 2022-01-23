import { CREATE_TODO } from "./TodoList.actions";
import { DELETE_TODO } from "./TodoList.actions";
import { DONE_TODO } from "./TodoList.actions";
import { v4 as uuidv4 } from "uuid";

let listForLocalStorage = JSON.parse(localStorage.getItem("active-list") || "[]");
let listDeletedForLocalStorage = JSON.parse(localStorage.getItem("deleted-list") || "[]");

export const initialState = {
    todoList: listForLocalStorage,
    deletedTodoList: listDeletedForLocalStorage,
};

export const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO:
            const createId = uuidv4();
            return {
                ...state,
                todoList: state.todoList.concat({
                    id: createId,
                    title: action.payload,
                    completed: false,
                    status: "active",
                }),
            };
        case DELETE_TODO:
            const deletedTodoIndex = state.todoList.findIndex(
                (todoItem) => todoItem.id === action.payload
            );
            if (deletedTodoIndex < 0) { return state }
            const deletedTodo = state.todoList.splice(deletedTodoIndex, 1);
            return {
                ...state,
                todoList: state.todoList.slice(),
                deletedTodoList: state.deletedTodoList.concat({
                    ...deletedTodo,
                })
            };
        case DONE_TODO:
            return {
                ...state,
                todoList: state.todoList.map((todoItem) =>
                    todoItem.id === action.payload ? { ...todoItem, completed: true } : todoItem
                ),
            };
        default:
            return state;
    };
};

