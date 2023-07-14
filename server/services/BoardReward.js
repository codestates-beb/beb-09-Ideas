import User from "../models/user.js";
import Board from "../models/board.js";
import {getERC20, sendTokenServerToUser} from "./contract.js";
import Wallet from "../models/wallet.js";
import {createUserDistributedWallet} from "./wallet.js";
import {formatEther} from "ethers";


// 게시글
// 보상 알고리즘

export async function BoardReward(){
    let BoardData = await Board.find();
    let boardCount=0;
    if(BoardData ===0){
        return;
    }
    const thisMonth = new Date().getMonth() +1;

    BoardData.map(async (board) => {
        if (board.created_at.getMonth() + 1 == thisMonth) {
            boardCount++;
        }
    })

    let UDW = await createUserDistributedWallet();
    let UDWBalance = Number(formatEther(await getERC20(UDW)));
    let UDWCommentDistribution = UDWBalance /30;
    let UDWBoardDistribution = UDWBalance-UDWCommentDistribution;
    const BoardAmount = (UDWBoardDistribution/12) /boardCount;

    console.log(BoardAmount);
    BoardData.map(async (board) => {
        if (board.created_at.getMonth() + 1 == thisMonth) {

            let UserIdWithBoard = await User.findById(board.user_id);
            let addressWithUserId = await Wallet.find({userId:UserIdWithBoard.id});
            addressWithUserId.map(async (wallet) => {
                await sendTokenServerToUser(BoardAmount.toString(), wallet.address);
            })
        }
    })

}