import { Router } from "express";

import User from "./../../models/user.js";

const route = Router();

export default (app) => {
  app.use("/auth", route);

  // 회원가입
  route.post("/signup", async (req, res) => {
    // console.log(req.body);

    const user = new User(req.body);
    try {
      await user.save();
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });

  // 로그인
  route.post("/login");

  // 로그아웃
  route.get("/logout");
};
