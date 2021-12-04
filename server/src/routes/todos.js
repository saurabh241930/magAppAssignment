import express from "express";
import todosController from "../controller/todos.js";

const router = express.Router();
const { createTask, readTasks, updateTask, deleteTask } = todosController;

router.post("/create", createTask);
router.get("/read", readTasks);
router.put("/update", updateTask);
router.delete("/delete/:task", deleteTask);

export default router;
