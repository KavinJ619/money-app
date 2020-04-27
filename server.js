const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const path = require("path")

const transactions = require("./routes/api/transactions")

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log('[Error]: ' + err));


if (process.env.NODE_ENV==='production'){
    const root = require('path').join(__dirname, 'client', 'build')
    app.use(express.static(root));
    app.get("*", (req, res) => {
        res.sendFile('index.html', { root });
    })
}


app.use("/api/transactions", transactions)

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on Port: ${port}`))