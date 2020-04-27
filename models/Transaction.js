const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//Schema init
const TransactionSchema = new Schema ({
    title: {
        type:String,
        required:true
    },
    amount: {
        type:Number,
        required: true
    },
    date: {
        type:Date,
        default:Date.now()
    }

});

module.exports=Transaction=mongoose.model("transaction", TransactionSchema);    