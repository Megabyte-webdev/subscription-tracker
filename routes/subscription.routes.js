import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.get("/:id", authorize, getUserSubscriptions);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

export default subscriptionRouter;
