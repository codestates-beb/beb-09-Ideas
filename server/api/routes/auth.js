import { Router } from "express";
import User from "./../../models/user.js";
import Wallet from "./../../models/wallet.js";
import logoutAuth from "../../services/auth.js";
import { ethers } from "ethers";
import crypto from "crypto";
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

      //============
      const id = crypto.randomBytes(32).toString("hex");
      const privateKey = "0x" + id;
      console.log("SAVE BUT DO NOT SHARE THIS", privateKey);

      const newWallet = new ethers.Wallet(privateKey);
      console.log("Address : " + newWallet.address);
      const walletData = {
        userId: req.body.id,
        address: newWallet.address,
      };
      const wallet = new Wallet(walletData);
      await wallet.save();
      //============

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
    User.findOne({ id: req.body.id }).then((user) => {
      // userId가 존재하지 않을때
      if (!user) {
        return res.json({
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
            return res.json({
              loginSuccess: false,
              message: "비밀번호가 일치하지 않습니다.",
            });
          }

          // 비밀번호가 일치한다면 토큰 생성 후 저장
          return user.generateToken().then(() => {
            res.cookie("x_auth", user.token).status(200).json({
              loginSuccess: true,
              id: user._id, // user_id 반환
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
   * 로그아웃
   */
  route.get("/logout", logoutAuth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  });

  /**
   * 지갑 주소
   */
  route.get("/wallet", (req, res) => {});
};
