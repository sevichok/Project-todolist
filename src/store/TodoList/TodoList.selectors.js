export const getSlice = (state) => state.todo;

export const getFilteredTodoList = (state) => {
    let initialList;
    if (state.filterStatus === 'done') {
        console.log('Pressed filter done');
        initialList = state.todoList.filter((todoItem) => todoItem.done === true);
    }
    if (state.filterStatus === 'all') {
        console.log('Pressed filter all');
        initialList = state.todoList;
    }
    if (state.filterStatus === 'deleted') {
        console.log('Pressed filter deleted');
        initialList = state.deletedTodoList
    }
    if (state.filterValue) {
        initialList = initialList.filter((todoItem) => todoItem.title.toLowerCase().includes(state.todo.filterValue.toLowerCase()))
    }
    return initialList
}
// const filteredList = useSelector(getFilteredTodoList);


// const getFilteredToDo = () => {
//     let initialList;
//     if (filterStatus === 'done') {
//       console.log('Pressed filter done');
//       initialList = todoList.filter((todoItem) => todoItem.done === true);
//     }
//     if (filterStatus === 'all') {
//       console.log('Pressed filter all');
//       initialList = todoList;
//     }
//     if (filterStatus === 'deleted') {
//       console.log('Pressed filter deleted');
//       initialList = deletedTodoList
//     }
//     if (filterValue) {
//       initialList = initialList.filter((todoItem) => todoItem.name.toLowerCase().includes(filterValue.toLowerCase()))
//     }
//     return initialList
//   };

//   const filteredList = getFilteredToDo();