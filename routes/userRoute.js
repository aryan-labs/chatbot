import express from "express";
import { getAllUser, SignUp } from "../controller/usercontroller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.post("/sign-up", SignUp);

export default userRouter;
