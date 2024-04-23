import express from 'express';
import userController from '../controllers/userController.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const userRouter = express.Router();

userRouter.post("/", userController.register);
userRouter.get("/", userController.getUsers);
userRouter.get("/:_id", verifyToken, userController.getUser);
userRouter.put("/:userId", verifyToken, userController.editUser);



export default userRouter;