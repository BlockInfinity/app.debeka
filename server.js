const path = require("path");
const server = require('./server/blockchain.js');
const express = require('express');
const app = express();


// app.use('/abi', express.static(path.join(__dirname, 'bc.ico.contractdeployer', 'truffle', 'build', 'contracts')));

app.use('/', express.static('public'))

app.get('/EnergySystemTokenFactory', (req, res) => {
	server.getEnergySystemTokenFactory(req,res); 
})

app.get('/EnergySystemTokens', (req, res) => {
	server.getEnergySystemTokens(req, res);
})

app.get('/transactionReceipt', (req, res) => {
	server.getTransactionReceipt(req, res);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(8000, function() {
    console.log('Example app listening on port 8000!');
});