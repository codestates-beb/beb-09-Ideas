import cron from "node-cron";
import {ethers,formatEther} from "ethers";
import fs from "fs";
import Transaction from "./txModels.js";
import mongoose from "mongoose";
import config from "./config/config.js";

const GANACHE_SERVER = "http://localhost:7545";
const provider = new ethers.JsonRpcProvider(GANACHE_SERVER);
const __dirname = '../contract/build/contracts';
const abi = JSON.parse(fs.readFileSync(__dirname+"/MyERC20.json",'utf8'));


mongoose.connect(config.databaseURL).then(()=>{
    console.log("db connect");
})
    .catch((err)=>{
        console.error('db connect error : ', err);
    })


const getLastBlock = async () =>{
    return await provider.getBlockNumber();
}

const getDBData = async ()=>{
    const lastBlock = await getLastBlock()
    let isBlock=await Transaction.find({blockNum:lastBlock});
    return isBlock;
}
const getBlocks = async () => {
    let data ;
    const lastBlock = await getLastBlock();
    const block = await provider.getBlock(lastBlock);

    for(const txHash of block.transactions){
        const tx = await provider.getTransaction(txHash);
        const receipt = await provider.getTransactionReceipt(txHash);

        receipt.logs.forEach((log)=>{
            const iface = new ethers.Interface(abi.abi);
            const parsedLog = iface.parseLog(log);

            data ={
                blockNum:lastBlock.toString(),
                from:parsedLog.args[0],
                to:parsedLog.args[1],
                amount:formatEther(parsedLog.args[2])
            }
        })
    }

    return await data;

};

const insertBlock = async () => {
    let isBlock = await getDBData();
    if(isBlock.length ===0){
        let data = await getBlocks();

        const txData = new Transaction(data);
        txData.save().then((res)=>{
            try{
                console.log("Add Transaction Data")
            }catch (err){
                console.log(err);
            }
        });
    }else{
        console.log("no data");
        return;
    }

}


const task = cron.schedule(
    "*/5 * * * * *", // 5초에 한번씩 실행
    async () => {
        await insertBlock();
    },
    {
        scheduled: false,
    }
);

task.start();
