import { Router } from "express";
import {
  sendTokenServerToUserForRouter,
  getERC20ForRouter,
  getERC20Test,
  sendTokenTest,
  divideTokenToUDW,
  sendTokenUserToUser,
  initUserWallet,
    sendTokenWithComment
} from "../../services/contract.js";

const route = Router();

export default (app) => {
  app.use("/contract", route);

  route.post("/quantity", getERC20ForRouter, (req, res) => {
    const quantity = req.quantity;
    console.log(quantity);
    const responseData = {
      success: true,
      quantity: quantity,
    };
    try {
      return res.status(200).json({
        data: responseData,
      });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });

  route.post("/send/server", sendTokenServerToUserForRouter, (req, res) => {
    // address, ammount
    //console.log(req.body);
    try {
      return res.status(200).send({ success: true });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });

  route.post("/send/user", sendTokenUserToUser, (req, res) => {
    //console.log(req.body);
    try {
      return res.status(200).send({ success: true });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });

  route.post("/send/comment", sendTokenWithComment, (req, res) => {
    try {
      return res.status(200).send({ success: true });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });

  // TEST HERE
  route.post("/init", async (req, res) => {
    //console.log(req.body);
    try {
      await initUserWallet(req.body.address);
      return res.status(200).send({ success: true });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });

  route.get("/sendTest", sendTokenTest, (req, res) => {
    //console.log(req.body);
    try {
      return res.status(200).send({ success: true });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });

  route.get("/tokenTest", getERC20Test, (req, res) => {
    try {
      return res.status(200).send({ success: true });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });

  route.get("/divide", divideTokenToUDW, (req, res) => {
    try {
      return res.status(200).send({ success: true });
    } catch (err) {
      return res.json({ success: false, err });
    }
  });
};
