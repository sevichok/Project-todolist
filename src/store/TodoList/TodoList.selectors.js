export const getSlice = (state) => state.todo;

export const getFilteredTodoList = (state) => {
    let initialList;
    if (state.todo.filterStatus === 'done') {
        console.log('Pressed filter done');
        initialList = state.todo.todoList.filter((todoItem) => todoItem.completed === true);
    }
    if (state.todo.filterStatus === 'all') {
        console.log('Pressed filter all');
        initialList = state.todo.todoList;
    }
    if (state.todo.filterStatus === 'deleted') {
        console.log('Pressed filter deleted');
        initialList = state.todo.deletedTodoList
    }
    if (state.todo.filterValue) {
        initialList = initialList.filter((todoItem) => todoItem.title.toLowerCase().includes(state.todo.filterValue.toLowerCase()))
    }
    return initialList
}