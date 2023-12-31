import express from "express";
import dotenv from "dotenv";

dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;

import userRoutes from "./routes/user.route.js";

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res, next) => {
  res.send("server is ready");
});
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
