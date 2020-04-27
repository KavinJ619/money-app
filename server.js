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





let root = path.join(__dirname, 'client', 'build/')
app.use(express.static(root))
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})

app.use("/api/transactions", transactions)

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on Port: ${port}`))