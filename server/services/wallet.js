import {ethers}  from "ethers";
import crypto from "crypto";
import Wallet from "../models/wallet.js";
import {initUserWallet} from "./contract.js";
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");

// 서버 계정 생성
const createServerAccount = async () => {

  const serverPrivateKey = process.env.SERVER_PRIVATE_KEY;
  const serverWallet = new ethers.Wallet(serverPrivateKey,provider);

  return serverWallet;
};

const createUserDistributedWallet = async () =>{
  const UDWPrivateKey = process.env.UDW_PRIVATE_KEY;
  const UDWPWallet = new ethers.Wallet(UDWPrivateKey,provider);

  return UDWPWallet;
}

let createUserWallet = async (userId) =>{
  const id = crypto.randomBytes(32).toString("hex");
  const privateKey = "0x" + id;
  console.log("DO NOT SHARE THIS", privateKey);

  const newWallet = new ethers.Wallet(privateKey,provider);

  const walletData = {
    userId: userId,
    address: newWallet.address,
    pk: privateKey
  };
  const wallet = new Wallet(walletData);
  await wallet.save();
  await initUserWallet(newWallet);
  console.log("Create User Wallet");
}
export {
  createUserWallet,
  createServerAccount,
  createUserDistributedWallet
};
