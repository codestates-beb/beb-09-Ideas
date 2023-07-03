import { Router, Request, Response, NextFunction } from "express";

const route = Router();

export default (app) => {
  app.use("/auth", route);

  route.post("/signup", (req, res) => {
    console.log(req.body);
  });
  route.post("/signin");
};
