const path = require("path");
const blockchain = require('./server/blockchain.js');
const authentification = require('./server/authentification.js');
const express = require('express');
const app = express();



app.use('/', express.static('public'))


app.use('/user/', function(req, res, next) {
    if (authentification.isAuthenticated(req, res))
        next();
    else
        res.status(401).send("Authentication Required. Please use metamask.")
});


if (process.env.PRODUCTION != "PRODUCTION") {
    app.use('/test', express.static(path.join(__dirname, 'app', 'mochaTests')))
    app.use('/node_modules/mocha', express.static(path.join(__dirname, 'node_modules', 'mocha')))
    app.use('/node_modules/chai', express.static(path.join(__dirname, 'node_modules', 'chai')))
}


app.get('/EnergySystemTokenFactory', (req, res) => {
    blockchain.getEnergySystemTokenFactory(req, res);
})


app.get('/EnergySystemTokenAbi', (req, res) => {
    blockchain.getEnergySystemTokenAbi(req, res);
})


app.get('/Authenticated', (req, res) => {
    if (authentification.isAuthenticated(req, res))
        res.send("Authentification succeeded!")
    else
        res.status(401).send("Authentication Required. Please use metamask.")
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