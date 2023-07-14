import { ethers } from "ethers";
import { formatEther } from "ethers";
import {createServerAccount, createUserDistributedWallet, createUserWallet} from "./wallet.js";
import fs from "fs";
const __dirname = "../contract/build/contracts";

const providerUrl = "http://127.0.0.1:7545";
const abi = JSON.parse(fs.readFileSync(__dirname + "/MyERC20.json", "utf8"));
const deployedNet = abi.networks["5777"];
const contractAddress = deployedNet.address;

let initUserWallet = async (userWallet) => {
  const serverWallet = await createServerAccount();
  const userWalletAddress = userWallet;
  const testEtherAmount = ethers.parseEther("2");
  //테스트 이더 전송
  await serverWallet.sendTransaction({
    to: userWalletAddress,
    value: testEtherAmount,
  });

  console.log(userWalletAddress);
};

//userDistributedWallet
let divideTokenToUDW = async (UDW) => {
  const serverWallet = await createServerAccount();
  const serverWalletAddress = serverWallet.address;

  const provider = new ethers.JsonRpcProvider(providerUrl);
  const signer = await provider.getSigner(serverWalletAddress);

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);
  const contractSigner = contract.connect(signer);

  const amount = ethers.parseUnits("70000000", 18);

  const tx = await contractSigner.transfer(UDW, amount);
  await tx.wait();
};

let sendTokenServerToUser = async (amount, address) =>{
  const provider = new ethers.JsonRpcProvider(providerUrl);
  let sendAmount = amount;
  let userWalletAddress = address;

  const serverWallet = await createUserDistributedWallet();
  const serverWalletAddress = serverWallet.address;
  const signer = await provider.getSigner(serverWalletAddress);

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);

  const tokenAmount = ethers.parseUnits(sendAmount, 18);

  const contractSigner = contract.connect(signer);
  const tx = await contractSigner.transfer(userWalletAddress, tokenAmount);
  await tx.wait();
}

let sendTokenServerToUserForRouter = async (req, res, next) => {

  await sendTokenServerToUser(req.body.amount, req.body.address);

  next();
};

let getERC20 = async (address) => {
  const provider = new ethers.JsonRpcProvider(providerUrl);

  const walletAddress = address;

  const contract = await new ethers.Contract(contractAddress, abi.abi, provider);

  const walletBalance = await contract.balanceOf(walletAddress);

  return walletBalance;
};

let getERC20ForRouter = async (req, res, next) => {

  const walletBalance= await getERC20(req.body.address);
  req.quantity = formatEther(walletBalance);

  next();
};

let sendTokenUserToUser = async (req, res, next) => {
  const provider = new ethers.JsonRpcProvider(providerUrl);
  let sendAmount = req.body.amount;
  const privateKey1 = req.body.from;
  const wallet1 = new ethers.Wallet(privateKey1, provider);

  const wallet2Address = req.body.to;

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);
  const amount = ethers.parseUnits(sendAmount, 18);
  const gasPrice = await provider.getFeeData().gasPrice;
  const transferTx = await contract
    .connect(wallet1)
    .transfer(wallet2Address, amount, {
      gasPrice,
      gasLimit: 100000,
    });
  await transferTx.wait();
  next();
};

//test code
let sendTokenTest = async (req, res, next) => {
  const provider = new ethers.JsonRpcProvider(providerUrl);
  const account = await provider.listAccounts();
  const useDistributedWallet = account[0].address;
  const signer = await provider.getSigner(useDistributedWallet);

  const privateKey =
    "0x119dc30ef65ad4617345190dccb34f43219fc714f608792c001598222bbadae5";
  const newWallet = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);

  const amount = ethers.parseUnits("100000.0", 18);

  const contractSigner = contract.connect(signer);
  const tx = await contractSigner.transfer(
    await newWallet.getAddress(),
    amount
  );
  await tx.wait();

  next();
};

let getERC20Test = async (req, res, next) => {
  const provider = new ethers.JsonRpcProvider(providerUrl);
  const serverWallet = await createServerAccount();
  const serverWalletAddress = serverWallet.address;

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);

  const serverBalance = await contract.balanceOf(serverWalletAddress);
  const user = await createUserWallet();
  console.log(user);
  console.log("server ", formatEther(serverBalance));
  next();
};

export {
  initUserWallet,
  sendTokenServerToUser,
  sendTokenTest,
  getERC20,
  getERC20ForRouter,
  getERC20Test,
  divideTokenToUDW,
  sendTokenUserToUser,
  sendTokenServerToUserForRouter
};
