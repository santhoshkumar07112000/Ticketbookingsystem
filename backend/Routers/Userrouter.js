const express = require("express");
const { register , login , checktoken } = require("../Controllers/Usercontroller");

const userRouter = express.Router();



userRouter.post("/register",register);
userRouter.post("/login",login);
userRouter.post("/checkToken",checktoken);



module.exports = userRouter