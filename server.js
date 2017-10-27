const path = require("path");
const blockchain = require('./server/blockchain.js');
const express = require('express');
const app = express();




app.use('/', express.static('public'))


if (process.env.PRODUCTION != "PRODUCTION") {

    app.use('/test', express.static(path.join(__dirname, 'app', 'mochaTests')))

    app.use('/node_modules/mocha', express.static(path.join(__dirname, 'node_modules', 'mocha')))

    app.use('/node_modules/chai', express.static(path.join(__dirname, 'node_modules', 'chai')))
}


app.get('/EnergySystemTokenFactory', (req, res) => {
    blockchain.getEnergySystemTokenFactory(req, res);
})



app.get('/transactionReceipt', (req, res) => {
    blockchain.getTransactionReceipt(req, res);
})

app.get('/LastEnergySystemTokenAddressForUser', (req, res) => {
    blockchain.getLastEnergySystemTokenAddressForUser(req, res);
})

app.get('/AllEnergySystemTokenAddressesForUser', (req, res) => {
    blockchain.getAllEnergySystemTokenAddressesForUser(req, res);
})

app.get('/AllEnergySystemTokenAddresses', (req, res) => {
    blockchain.getAllEnergySystemTokenAddresses(req, res);
})



app.listen(8000, function() {
    console.log('Example app listening on port 8000!');
});