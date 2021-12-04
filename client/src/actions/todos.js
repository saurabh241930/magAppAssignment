import { FETCH_ALL, CREATE, DELETE,UPDATE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();
    console.log(data);

    const sortedData = data.sort(function(x, y){return x.createdAt - y.createdAt;})

    dispatch({ type: FETCH_ALL, payload: sortedData });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTask = (taskText) => async (dispatch) => {
  try {
    const { data } = await api.createTask(taskText);
    dispatch({ type: CREATE, payload: { data, taskText } });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = (task_id) => async (dispatch) => {
  try {
    const data = await api.deleteTask(task_id);
    dispatch({ type: DELETE, payload: { data, task_id } });
  } catch (error) {
    console.log(error.message);
  }
};


export const updateTask = ({existingTaskId,updatedTaskText}) => async(dispatch) => {
  try {
    const data = await api.updateTask({existingTaskId:existingTaskId,updatedTaskText:updatedTaskText})
    dispatch({ type: UPDATE, payload: { task_id:existingTaskId,taskText:updatedTaskText } });
  } catch (error) {
    console.log(error);
  }
}
