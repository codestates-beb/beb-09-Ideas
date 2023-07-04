import { Router } from "express";

import User from "./../../models/user.js";

const route = Router();

export default (app) => {
  app.use("/auth", route);

  /**
   * 회원가입
   */
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

  /**
   * 로그인
   */
  route.post("/login", (req, res) => {
    // userId 가 존재하는지 확인
    User.findOne({ userId: req.body.userId }).then((user) => {
      // userId가 존재하지 않을때
      if (!user) {
        return res.json({
          loginSuccess: false,
          message: "회원가입된 Id가 아닙니다.",
        });
      }

      // userId가 존재한다면 비밀번호가 일치하는지 확인
      return user.comparePassword(req.body.userPw).then((isMatch) => {
        // 비밀번호가 일치하지 않을 경우
        if (!isMatch) {
          return res.json({
            loginSuccess: false,
            message: "비밀번호가 일치하지 않습니다.",
          });
        }

        // 비밀번호가 일치한다면 토큰 생성 후 저장
        return res.generateToken();
      });
    });
  });

  /**
   * 로그아웃
   */
  route.get("/logout");
};
