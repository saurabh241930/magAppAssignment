import dotenv from "dotenv";
import morgan from 'morgan';
import cors from 'cors';
import express from 'express';
import mountRoute from './src/middlewares/routes.mount.js'
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("combined"));

app.use(express.json());

mountRoute(app)

// const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`running server on:${5000}`));

