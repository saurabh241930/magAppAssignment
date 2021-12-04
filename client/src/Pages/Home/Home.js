import { getTasks, createTask } from "../../actions/todos";
import {
  Container,
  Grow,
  Grid,
  Paper,
  Stack,
  Divider,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import moment from 'moment';
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import useStyles from "./styles";
import { styled } from "@mui/material/styles";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../../components/Utils/CustomInput";

import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
import Task from "../../components/Task/Task";
import { useDispatch } from "react-redux";
import { updateTask } from "../../actions/todos";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = (props) => {
  const classes = useStyles();
  const [addNewTask, setAddNewTask] = useState(false);
  const [editNewTask, setEditTask] = useState(false);
  const [editTaskText, setEditTaskText] = useState("edit");
  
  const [createFormData, setCreateFormData] = React.useState({ taskText: "" });
  const [editFormData, setEditFormData] = React.useState({ updatedTaskText: "",existingTaskId:"" });


  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleAddNew = () => {
    setAddNewTask(addNewTask ? false : true);
  };

  const handleCreateChange = (e) => {
    setCreateFormData({ ...createFormData, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };


  const handleCreateSubmit = (e) => {
    e.preventDefault();
    console.log(createFormData);
    dispatch(createTask(createFormData));
    handleAddNew()
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(editFormData);
    dispatch(updateTask(editFormData))
    handleEdit()
  };


  const handleEdit = (task_id,taskText) =>{
    setEditTask(editNewTask ? false : true)
    setEditFormData({existingTaskId:task_id,updatedTaskText:taskText})
    setEditTaskText(taskText)
  }

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.adjustTop}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={2} sm={2}></Grid>
          <Grid item xs={8} sm={8}>
            <Typography variant="h2">TODO LIST</Typography>

            {todos == null ? (
              <Typography>Loading...</Typography>
            ) : (
              <>
                {todos?.todos?.map((todo) => (
                  <Task todo={todo} handleEdit={handleEdit} />
                ))}
              </>
            )}

            <div style={{ textAlign: "center" }}>

              {editNewTask&&
                <>
                <Button
                  size="large"
                  color="success"
                  style={{ marginTop: "10px" }}
                  onClick={handleEdit}
                >
                  Cancel Editing task
                </Button>
                <form style={{ paddingTop: "20px" }} onSubmit={handleEditSubmit}>
                  <Input
                    name="updatedTaskText"
                    label={"Edit "+ editTaskText}
                    handleChange={handleEditChange}
                    type="text"
                  />
                  <br />
                  <Button variant="contained" type="submit">Save Edit</Button>
                </form>
                </>

              }

              {addNewTask&& 
                <>
                  <Button
                    size="large"
                    color="error"
                    style={{ marginTop: "10px" }}
                    onClick={handleAddNew}
                  >
                    Cancel Adding task
                  </Button>
                  <form style={{ paddingTop: "20px" }} onSubmit={handleCreateSubmit}>
                    <Input
                      name="taskText"
                      label="Task Text"
                      handleChange={handleCreateChange}
                      type="text"
                      placeholder="text"
                    />
                    <br />
                    <Button variant="contained" type="submit">Save new task</Button>
                  </form>
                </>

              }
               
               {!addNewTask & !editNewTask&&
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    style={{ marginTop: "10px" }}
                    onClick={handleAddNew}
                >
                  Add new task
                </Button>
               }
                
        
            </div>
          </Grid>
          <Grid item xs={2} sm={2}></Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
