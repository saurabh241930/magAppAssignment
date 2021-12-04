import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes";

export default (state = { todos: null }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, todos: action.payload, errors: null };
    case CREATE:
      return {
        ...state,
        todos: [...state.todos, action.payload.taskText],
        errors: null,
      };
    case DELETE:
      const updatedTodos = state.todos.filter(
        (todo) => todo.task !== action.payload.task_id
      );
      return {
        ...state,
        todos: updatedTodos,
      };

    case UPDATE:
      const updatedData = state.todos.map(todo => (todo.task === action.payload.task_id ? { ...todo, taskText: action.payload.taskText } : todo));

      console.log(updatedData);

      return {
        ...state,
        todos: updatedData,
      };


    default:
      return state;
  }
};
