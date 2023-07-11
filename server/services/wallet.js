import { ethers } from "ethers";
import fs from "fs";
import jwt from "jsonwebtoken";
import config from "./../config/index.js";
const accessString = config.bcryptConfig.accessToken;
const __dirname = "../contract/build/contracts";
const abi = JSON.parse(fs.readFileSync(__dirname + "/MyERC20.json", "utf8"));

// 로그아웃 인증 처리
let createServerAccount = async (req, res, next) => {
  const provider = new ethers.JsonRpcProvider("http://localhost:7545");
  const serverAccount = await provider.listAccounts();
  req.server = serverAccount[0];
  next();
};

let sendToken = async (req, res, next) => {
  let token = req.cookies.x_auth; // 클라이언트에서 쿠키를 받아옴
  const provider = new ethers.JsonRpcProvider("http://localhost:7545");
  const account = await provider.listAccounts();
  const sendAccount = account[0].address;
  const signer = await provider.getSigner(sendAccount);

  const walletAddress = jwt.verify(token, accessString).address;
  const deployedNet = abi.networks["5777"];
  const contractAddress = deployedNet.address;

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);

  const amount = ethers.parseUnits("1.0", 18);

  const contractSigner = contract.connect(signer);
  const tx = await contractSigner.transfer(walletAddress, amount);
  await tx.wait();

  next();
};

let getERC20 = async (req, res, next) => {
  let token = req.cookies.x_auth; // 클라이언트에서 쿠키를 받아옴
  const provider = new ethers.JsonRpcProvider("http://localhost:7545");
  const account = await provider.listAccounts();

  const walletAddress = jwt.verify(token, accessString).address;

  const deployedNet = abi.networks["5777"];
  const contractAddress = deployedNet.address;

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);

  const serverBalance = await contract.balanceOf(account[0].address);
  const walletBalance = await contract.balanceOf(walletAddress);

  console.log("from ", serverBalance);
  console.log("to ", walletBalance);

  next();
};

let sendTokenTest = async (req, res, next) => {
  const provider = new ethers.JsonRpcProvider("http://localhost:7545");
  const account = await provider.listAccounts();
  const sendAccount = account[0].address;
  const signer = await provider.getSigner(sendAccount);

  const privateKey =
    "0x119dc30ef65ad4617345190dccb34f43219fc714f608792c001598222bbadae5";
  const newWallet = new ethers.Wallet(privateKey);

  const deployedNet = abi.networks["5777"];
  const contractAddress = deployedNet.address;

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);

  const amount = ethers.parseUnits("1.0", 18);

  const contractSigner = contract.connect(signer);
  const tx = await contractSigner.transfer(
    await newWallet.getAddress(),
    amount
  );
  await tx.wait();

  next();
};

let getERC20Test = async (req, res, next) => {
  const provider = new ethers.JsonRpcProvider("http://localhost:7545");
  const account = await provider.listAccounts();
  const privateKey =
    "0x119dc30ef65ad4617345190dccb34f43219fc714f608792c001598222bbadae5";

  const newWallet = new ethers.Wallet(privateKey);

  const deployedNet = abi.networks["5777"];
  const contractAddress = deployedNet.address;

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);
  const serverBalance = await contract.balanceOf(account[0].address);
  const walletBalance = await contract.balanceOf(await newWallet.getAddress());

  console.log("from ", serverBalance);
  console.log("to ", walletBalance);

  next();
};
export {
  createServerAccount,
  sendToken,
  sendTokenTest,
  getERC20,
  getERC20Test,
};
