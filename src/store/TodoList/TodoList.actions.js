export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DONE_TODO = "DONE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const FILTER_ALL = "FILTER_ALL";
export const FILTER_DONE = "FILTER_DONE";
export const FILTER_DELETED = "FILTER_DELETED";


export const createTodo = (title) => ({
  type: CREATE_TODO,
  payload: title,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const doneTodo = (id) => ({
  type: DONE_TODO,
  payload: id,
});

export const updateTodo = (title) => ({
  type: UPDATE_TODO,
  payload: title,
});

export const filterAll = (id) => ({
  type: FILTER_ALL,
  payload: id,
});

export const filterDone = (id) => ({
  type: FILTER_DONE,
  payload: id,
});

export const filterDeleted = (id) => ({
  type: FILTER_DELETED,
  payload: id,
});