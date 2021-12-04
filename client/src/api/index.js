import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/todo" });

export const createTask = (formData) => API.post("/create", formData);
export const deleteTask = (formData) => API.delete(`/delete/${formData}`);
export const fetchTasks = () => API.get("/read");
export const updateTask = (formData) => API.put("/update", formData);
