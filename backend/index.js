const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./connectDB');
const userRouter = require('./Routers/Userrouter');
const cors = require("cors")

app.use(express.json())
// app.use(cors)

app.use("/auth",userRouter)

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
});