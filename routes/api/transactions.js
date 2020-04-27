const express=require("express");
const router=express.Router();

//Transaction Model init
const Transaction = require("../../models/Transaction");

//Route GET api/transactions (GET all transactions)
router.get("/", (req,res) => {
    Transaction.find()
        .sort({ date: -1 })
        .then(transactions => res.json(transactions))
        .catch(err => console.log(err));
});


//Route POST api/transactions (POST a transaction)
router.post("/", (req,res) => {
    const newTransaction = new Transaction({
        title: req.body.title,
        amount: req.body.amount,
        debit:  req.body.debit,
        remainder: req.body.remainder
    });

    newTransaction.save()
        .then(transaction => res.json(transaction))
        .catch(err => console.log(err));
});

//Route DELETE api/transactions (DELETE a transaction)
router.delete('/:id', (req,res) => {
    Transaction.findById(req.params.id)
        .then(transaction => transaction.remove().then(() => res.json({deleted:true})))
        .catch(err => res.status(404).json({deleted:false}))
});





module.exports = router;