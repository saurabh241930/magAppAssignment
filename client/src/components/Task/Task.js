import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import moment from "moment";
import AppsIcon from "@mui/icons-material/Apps";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";

import { deleteTask ,updateTask} from "../../actions/todos";

const Task = (props) => {
  const dispatch = useDispatch();

  const handleDelete = (task) => {
    console.log(task);
    dispatch(deleteTask(task));
  };


  return (
    <Card
      key={props.task}
      style={{ marginTop: "10px", backgroundColor: "rgba(0,0,0,0.1)" }}
    >
      <Typography variant="h5" style={{ padding: "10px" }}>
        {props.todo.taskText}
      </Typography>
      <Typography variant="h6" style={{color:'rgba(0,0,0,0.5)',fontSize:'15px',paddingLeft:'10px'}}>
        {moment(props.todo.createdAt).fromNow()}
      </Typography>
      <IconButton
        style={{ float: "right" }}
        onClick={() => handleDelete(props.todo.task)}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton style={{ float: "right" }} onClick={() => props.handleEdit(props.todo.task,props.todo.taskText)}>
        <EditIcon />
      </IconButton>
    </Card>
  );
};

export default Task;
