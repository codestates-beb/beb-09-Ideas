import { Router } from "express";
import User from "./../../models/user.js";
import Wallet from "./../../models/wallet.js";
import Auth from "../../services/auth.js";
import Score from "../../models/score.js";
import {createUserWallet} from "../../services/wallet.js";

const route = Router();

export default (app) => {
  app.use("/auth", route);

  /**
   * @swagger
   * tags:
   *   name: Auth
   * /auth/signup:
   *   post:
   *     summary: 회원가입
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/components/schemas/Signup_User"
   *     responses:
   *       '200':
   *         description: 회원가입 성공
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: true
   *       default:
   *         description: 회원 가입 실패
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: false
   *                error:
   *                  type: object
   */

  /**
   * @swagger
   * components:
   *   schemas:
   *     Signup_User:
   *       type: object
   *       properties:
   *         id:
   *           type: string
   *           description: 사용자 아이디 (유니크 값)
   *         password:
   *           type: string
   *           description: 사용자 비밀번호
   *         user_name:
   *           type: string
   *           description: 사용자 이름
   *         phone_number:
   *           type: string
   *           description: 사용자 핸드폰 번호 (유니크 값)
   */
  route.post("/signup", async (req, res) => {
    // console.log(req.body);

    // profile 더미 데이터 추가
    const image_url = "https://newsimg.sedaily.com/2023/04/11/29O9FX10T6_1.jpg";
    req.body.profile = {
      image_url: image_url,
      title: "춘식이",
      description: "test",
    };
    const user = new User(req.body);
    const score = new Score();

    try {
      // 사용자 점수 데이터 생성
      const scoreData = await score.save();
      user.score_id = scoreData._id;

      // 사용자 데이터 저장
      await user.save();

      // 유저 지갑 생성
      await createUserWallet(req.body.id);

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.json({ success: false, err });
    }
  });

  /**
   * @swagger
   * tags:
   *   name: Auth
   * /auth/login:
   *   post:
   *     summary: 로그인
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/components/schemas/Login_User"
   *     responses:
   *       '200':
   *         description: 로그인 성공 (쿠키에 토큰 값 저장)
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                loginSuccess:
   *                  type: boolean
   *                  example: true
   *                id:
   *                  type: string
   *                  example: 사용자 mongoDB ID
   *       '404':
   *         description: 사용자의 아이디가 존재하지 않을 때
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                loginSuccess:
   *                  type: boolean
   *                  example: false
   *                message:
   *                  type: string
   *                  example: 회원가입된 Id가 아닙니다.
   *       '401':
   *         description: 비밀번호가 일치하지 않을 때
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                loginSuccess:
   *                  type: boolean
   *                  example: false
   *                message:
   *                  type: string
   *                  example: 비밀번호가 일치하지 않습니다.
   */

  /**
   * @swagger
   * components:
   *   schemas:
   *     Login_User:
   *       type: object
   *       properties:
   *         id:
   *           type: string
   *           description: 사용자 아이디 (유니크 값)
   *         password:
   *           type: string
   *           description: 사용자 비밀번호
   */
  route.post("/login", (req, res) => {
    // userId 가 존재하는지 확인
    User.findOne({ id: req.body.id }).then((user) => {
      // userId가 존재하지 않을때
      if (!user) {
        return res.status(404).json({
          loginSuccess: false,
          message: "회원가입된 Id가 아닙니다.",
        });
      }

      // userId가 존재한다면 비밀번호가 일치하는지 확인
      return user
        .comparePassword(req.body.password)
        .then((isMatch) => {
          // 비밀번호가 일치하지 않을 경우
          if (!isMatch) {
            return res.status(401).json({
              loginSuccess: false,
              message: "비밀번호가 일치하지 않습니다.",
            });
          }

          // 비밀번호가 일치한다면 토큰 생성 후 쿠키에 저장
          return user.generateToken().then(() => {
            Wallet.findOne({ userId: req.body.id }).then((wallet) => {
              res.cookie("x_auth", user.token).status(200).json({
                loginSuccess: true,
                id: user._id,
                address: wallet.address,
              });
            });
          });
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).send(err);
        });
    });
  });

  /**
   * @swagger
   * tags:
   *   name: Auth
   * /auth/logout:
   *   get:
   *     summary: 로그아웃
   *     tags: [Auth]
   *     responses:
   *       '200':
   *         description: 로그아웃 성공 (DB에 저장된 토큰값 삭제)
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: true
   *       default:
   *         description: 로그아웃 실패
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: false
   *                error:
   *                  type: object
   */
  route.get("/logout", Auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" })
      .then(() => {
        return res.status(200).send({ success: true });
      })
      .catch((err) => {
        return res.json({ success: false, err });
      });
  });
};
