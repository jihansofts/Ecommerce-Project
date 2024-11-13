import express from "express";
import router from "./src/Router/api.js";
const app = new express();
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

// Security Middleware
import Sanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import Helmet from "helmet";
import xss from "xss-clean";
import Hpp from "hpp";
import cors from "cors";

// Database
import mongoose from "mongoose";

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

let URL = process.env.DATABASEURL;

const connectDB = async () => {
  try {
    await mongoose.connect(URL).then(() => {
      console.log("Database Connction Successfull");
    });
  } catch (err) {
    console.log("Database Connection Fail", err);
  }
};
connectDB();

// Security Middleware Implement
app.use(Sanitize());
app.use(Helmet());
app.use(Hpp());
app.use(xss());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const Limit = rateLimit({ windowMs: 15 * 60 * 100, max: 1000 });
app.use(Limit);
app.use("/api/v1", router);

export default app;
