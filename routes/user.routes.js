import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", authorize, getAllUsers);
userRouter.get("/:id", authorize, getUserById);
userRouter.post("/", (req, res) => res.send({ title: "Create new user" }));

export default userRouter;
