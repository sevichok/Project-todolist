export const getSlice = (state) => state.todo;

export const getFilteredTodoList = (state) => {
    let initialList;
    if (state.todo.filterStatus === 'done') {
        initialList = state.todo.todoList.filter((todoItem) => todoItem.completed === true);
    }
    if (state.todo.filterStatus === 'all') {
        initialList = state.todo.todoList;
    }
    if (state.todo.filterStatus === 'deleted') {
        initialList = state.todo.deletedTodoList
    }
    if (state.todo.filterValue) {
        initialList = initialList.filter((todoItem) => todoItem.title.toLowerCase().includes(state.todo.filterValue.toLowerCase()))
    }
    return initialList
}