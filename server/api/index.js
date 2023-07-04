import { Router } from "express";
import auth from "./routes/auth.js";

// guaranteed to get dependencies
export default () => {
  const app = Router();

  /**
   *@swagger
   * tags:
   *  name: Auth
   *  description: 회원가입, 로그인, 로그아웃
   */
  auth(app);

  return app;
};
