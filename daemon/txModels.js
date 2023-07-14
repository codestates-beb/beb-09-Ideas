import mongoose from "mongoose"

const txSchema = new mongoose.Schema({
    blockNum:{
        type:String,
    },
    to:{
        type:String,
    },
    from:{
        type:String,
    },
    amount:{
        type: String,
    }
})

txSchema.pre("save",function (next){

    next();
})

const Transaction = mongoose.model("transaction",txSchema);

export default Transaction;
