import { ethers } from "ethers";
import { formatEther } from "ethers";
import { createServerAccount, createUserWallet } from "./wallet.js";
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

let sendTokenServerToUser = async (req, res, next) => {
  const provider = new ethers.JsonRpcProvider(providerUrl);
  let sendAmount = req.body.amount;
  let userWalletAddress = req.body.address;

  const serverWallet = await createServerAccount();
  const serverWalletAddress = serverWallet.address;
  const signer = await provider.getSigner(serverWalletAddress);

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);

  const amount = ethers.parseUnits(sendAmount, 18);

  const contractSigner = contract.connect(signer);
  const tx = await contractSigner.transfer(userWalletAddress, amount);
  await tx.wait();

  next();
};

let getERC20 = async (req, res, next) => {
  const provider = new ethers.JsonRpcProvider(providerUrl);

  const walletAddress = req.body.address;

  const contract = new ethers.Contract(contractAddress, abi.abi, provider);
  const walletBalance = await contract.balanceOf(walletAddress);
  req.quantity = formatEther(walletBalance);
  next();
};

let sendTokenUserToUser = async (req, res, next) => {
  const provider = new ethers.JsonRpcProvider(providerUrl);
  let sendAmount = req.body.amount;
  const privateKey1 = req.body.from;
  const privateKey2 = req.body.to;
  const wallet1 = new ethers.Wallet(privateKey1, provider);
  const wallet2 = new ethers.Wallet(privateKey2, provider);

  const wallet1Address = await wallet1.getAddress();
  const wallet2Address = await wallet2.getAddress();

  console.log(privateKey1);
  console.log(privateKey2);
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
  getERC20Test,
  divideTokenToUDW,
  sendTokenUserToUser,
};
