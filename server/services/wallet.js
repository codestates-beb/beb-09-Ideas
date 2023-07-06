import {ethers}  from "ethers";
import fs from "fs"
import crypto from "crypto";
import dotenv from "dotenv";
// 로그아웃 인증 처리
let createServerAccount = async (req, res, next) => {
    const provider = new ethers.JsonRpcProvider("http://localhost:7545");
    const serverAccount = await provider.listAccounts()
    req.server = serverAccount[0];
    next();
};


let sendToken = async (req,res,next) =>{
    const provider = new ethers.JsonRpcProvider("http://localhost:7545");


    const privateKey = "0x119dc30ef65ad4617345190dccb34f43219fc714f608792c001598222bbadae5";

    const newWallet = new ethers.Wallet(privateKey);
    newWallet.connect(provider);

    const sendAccount = '0x5e8F84ee4093132Aa3135e487124fF6D1a7aA892';
    const signer = await provider.getSigner(sendAccount);

    const tx = {
        //from: sendAccount,
        to: newWallet.getAddress(),
        value: "1",
        gasLimit: "0x100000",
    }
    await signer.sendTransaction(tx)
        .then((transaction)=>{
            console.dir(transaction)
            console.log("success!");
        })
        .catch((err)=>{
            console.log(err);
        })

    console.log(await provider.getBalance(newWallet.getAddress()));
    next();
}

let getERC20 = async (req,res,next) =>{
    //const abi = JSON.parse(fs.readFileSync("./MyERC20.json",'utf8'));
    //  console.log(JSON.stringify(abi));
    const json = fs.readFileSync('./MyERC20.json','utf8');
    const data = JSON.parse(json);
    console.log(data);
    next();
}
export {
    createServerAccount,
    sendToken,
    getERC20
};
