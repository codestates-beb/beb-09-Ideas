import User from "./../models/user.js";
import {ethers}  from "ethers";
import Wallet from "../models/wallet.js";
export async function initServer(){
    let isServer =await  User.find({id:"ideas"});

    if(isServer.length !==0){
        console.log("Exist server")
        return;
    }

    const userData = {
        "id": "ideas",
        "email": "ideas@gmail.com",
        "user_name": "server",
        "password": "goodideas",
        "phoneNum": "82 10-1234-0101"
    }

    const serverAccount = new User(userData);

    console.log("서버생성");
    const provider = new ethers.JsonRpcProvider("http://localhost:7545");
    const addressList = await provider.listAccounts();
    const serverAddress = addressList[0].address;
    const serverData = {
        "userId":"ideas",
        "address": serverAddress
    }

    const serverWallet = new Wallet(serverData);



    serverAccount.save();
    serverWallet.save();




}