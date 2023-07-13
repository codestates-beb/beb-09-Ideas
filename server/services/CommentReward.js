import User from "../models/user.js";
import {getERC20, sendTokenServerToUser} from "./contract.js";
import Wallet from "../models/wallet.js";
import {createUserDistributedWallet} from "./wallet.js";
import {formatEther} from "ethers";

// 댓글 보상 알고리즘

export async function CommentReward(){
    let CommentRewardedUser = await User.find({isCommentVoted: true, isCommentRewarded:true});
    let UDW = await createUserDistributedWallet();
    let UDWBalance = Number(formatEther(await getERC20(UDW)));
    let UDWCommentDistribution = UDWBalance /30;
    let UDWBoardDistribution = UDWBalance-UDWCommentDistribution;
    const CommentAmount = (UDWCommentDistribution/365) / CommentRewardedUser.length;

    if(CommentRewardedUser ===0){
        return;
    }
    CommentRewardedUser.map(async (x) => {
        let addressWithUserId = await Wallet.find({userId: x.id});
        addressWithUserId.map(async (wallet)=>{
            await sendTokenServerToUser(CommentAmount.toString(), wallet.address);
        })
    })
}