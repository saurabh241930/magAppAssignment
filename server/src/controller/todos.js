import todosController from "../services/todos.js";
import uuid from "node-uuid";

const { CREATE, READ, UPDATE, DELETE } = todosController;

const createTask = async (req, res) => {
  try {
    const { taskText } = req.body;
    CREATE({
      TableName: "todos",
      data: { task: uuid.v4(), createdAt: Date.now(), taskText: taskText },
    });
    res.status(200).json({message:"task created"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const readTasks = async (req, res) => {
  try {
    const allTasks = await READ({ TableName: "todos" });
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { existingTaskId, updatedTaskText } = req.body;

    UPDATE({
      TableName: "todos",
      Key: { task: existingTaskId },
      UpdateExpression: "set taskText = :updatedTaskText",
      ExpressionAttributeValues: { ":updatedTaskText": updatedTaskText },
    });
    res.status(200).json({ message: "task updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
      DELETE({
        TableName: "todos",
        Key: { task: req.params.task },
      })
    
    res.status(200).json({ data: "task deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default { createTask, readTasks, updateTask, deleteTask };
