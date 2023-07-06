import mongoose from "mongoose";
import config from "./../config/index.js";

const walletSchema = new mongoose.Schema({
    userId:{
        type:String,
        unique:true
    },
    address:{
        type:String,
        unique:true
    }
});

walletSchema.pre("save",function (next){
    //let wallet = this;
    next();
})

const Wallet = mongoose.model("wallet", walletSchema);;

export default Wallet;