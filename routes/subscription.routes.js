import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.post("/", (req, res) =>
  res.send({ title: "Create a new subscription" })
);
subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all subscriptions" })
);

export default subscriptionRouter;
