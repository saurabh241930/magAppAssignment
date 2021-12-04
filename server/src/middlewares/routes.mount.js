import todos from '../routes/todos.js'


const mountRoutesMiddleware = (app) => {
    app.use("/api/todo",todos)
    return app;
  };
  
export default mountRoutesMiddleware;