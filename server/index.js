import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// mongoose setup

// https://www.youtube.com/watch?v=uoJ0Tv-BFcQ&t=1474s
// 1:46:00
// https://cloud.mongodb.com/v2/67c7ff4300405762d9f840a4#/setup/personalization
