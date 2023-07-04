import { Router } from "express";
import bodyParser from "body-parser";
import User from "./../../models/user.js";

const route = Router();

export default (app) => {
  app.use("/auth", route);

  // 회원가입
  route.post("/signup", async (req, res) => {
    console.log(req.body);
  });

  // 로그인
  route.post("/login");

  // 로그아웃
  route.get("/logout");
};
