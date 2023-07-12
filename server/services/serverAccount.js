import User from "./../models/user.js";
<<<<<<< HEAD
import Wallet from "../models/wallet.js";
import {createServerAccount, createUserDistributedWallet} from "./wallet.js";
import {divideTokenToUDW} from "./contract.js";
export async function initServer(){
    let isServer =await  User.find({id:"ideas"});
=======
import { ethers } from "ethers";
import Wallet from "../models/wallet.js";
export async function initServer() {
  let isServer = await User.find({ id: "ideas" });
>>>>>>> 7856ed958955421960f6c3d19bf0d8e7060ce084

  if (isServer.length !== 0) {
    console.log("Exist server");
    return;
  }

<<<<<<< HEAD
    const userData = {
        "id": "ideas",
        "email": "ideas@gmail.com",
        "user_name": "server",
        "password": "goodideas",
        "phoneNum": "82 10-1234-0101",
        "role" : 1
    }

    const serverAccountForDB = new User(userData);

    console.log("서버생성");
    const serverWallet = await createServerAccount();
    const serverAddress = serverWallet.address;

    const serverData = {
        "userId":"ideas",
        "address": serverAddress,
        "pk":process.env.SERVER_PRIVATE_KEY
    }

    const serverWalletForDB = new Wallet(serverData);

    serverAccountForDB.save();
    serverWalletForDB.save();
    await divideTokenToUDW(await createUserDistributedWallet());
}
=======
  const userData = {
    id: "ideas",
    email: "ideas@gmail.com",
    user_name: "server",
    password: "goodideas",
    phoneNum: "82 10-1234-0101",
    role: 1,
  };

  const serverAccount = new User(userData);

  console.log("서버생성");
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
  const addressList = await provider.listAccounts();
  const serverAddress = addressList[0].address;
  const serverData = {
    userId: "ideas",
    address: serverAddress,
  };

  const serverWallet = new Wallet(serverData);

  serverAccount.save();
  serverWallet.save();
}
>>>>>>> 7856ed958955421960f6c3d19bf0d8e7060ce084
