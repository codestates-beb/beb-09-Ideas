import { Router } from "express";
import User from "./../../models/user.js";

const route = Router();

export default (app) => {
  app.use("/user", route);

  /**
   * 특정 유저 정보 조회
   */
  route.get("/profile", (req, res) => {
    // 유저 정보
    // 해당 유저가 작성한 게시글 정보도 같이 보내야함
    // 작성일시 현재를 기준으로 계산해서 반환
  });
};
