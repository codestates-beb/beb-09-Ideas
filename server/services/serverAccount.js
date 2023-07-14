import User from "./../models/user.js";
import { createServerAccount, createUserDistributedWallet } from "./wallet.js";
import { divideTokenToUDW } from "./contract.js";
import Wallet from "./../models/wallet.js";

export async function initServer() {
  let isServer = await User.find({ id: "Bideas" });

  if (isServer.length !== 0) {
    console.log("Exist server");
    return;
  }
  const userData = {
    id: "ideas",
    email: "ideas@gmail.com",
    user_name: "server",
    password: "goodideas",
    phoneNum: "82 10-1234-0101",
    role: 1,
  };

  const serverAccountForDB = new User(userData);

  console.log("서버생성");
  const serverWallet = await createServerAccount();
  const serverAddress = serverWallet.address;

  const serverData = {
    userId: "ideas",
    address: serverAddress,
    pk: process.env.SERVER_PRIVATE_KEY,
  };

  const serverWalletForDB = new Wallet(serverData);

  serverAccountForDB.save();
  serverWalletForDB.save();
  await divideTokenToUDW(await createUserDistributedWallet());
}
