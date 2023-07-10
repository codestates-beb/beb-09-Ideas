import { Router } from "express";

import {
  createServerAccount,
  sendToken,
  getERC20,
  getERC20Test,
  sendTokenTest,
} from "../../services/wallet.js";

const route = Router();

export default (app) => {
  app.use("/wallet", route);

  route.get("/init", createServerAccount, (req, res) => {
    console.log(req.server);
    try {
      return res.status(200).send({ success: true });
    } catch (err) {
      console.log(err);
      return res.json({ success: false, err });
    }
  });

  route.get("/send", sendTokenTest, (req, res) => {
    //console.log(req.body);
    try {
      return res.status(200).send({ success: true });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });

  route.get("/token", getERC20Test, (req, res) => {
    try {
      return res.status(200).send({ success: true });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });
};
