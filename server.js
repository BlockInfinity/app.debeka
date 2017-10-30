const path = require("path");
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const BlockchainApi = require('./server/blockchain.js');
const blockchainApi = new BlockchainApi(io);
const authentification = require('./server/authentification.js');



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

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.get('/EnergySystemTokenFactory', (req, res) => {
    blockchainApi.getEnergySystemTokenFactory(req, res);
})


app.get('/EnergySystemTokenAbi', (req, res) => {
    blockchainApi.getEnergySystemTokenAbi(req, res);
})


app.get('/Authenticated', (req, res) => {
    if (authentification.isAuthenticated(req, res))
        res.send("Authentification succeeded!")
    else
        res.status(401).send("Authentication Required. Please use metamask.")
})


app.get('/transactionReceipt', (req, res) => {
    blockchainApi.getTransactionReceipt(req, res);
})


app.get('/LastEnergySystemTokenAddressForUser', (req, res) => {
    blockchainApi.getLastEnergySystemTokenAddressForUser(req, res);
})


app.get('/AllEnergySystemTokenAddressesForUser', (req, res) => {
    blockchainApi.getAllEnergySystemTokenAddressesForUser(req, res);
})


app.get('/AllEnergySystemTokenAddresses', (req, res) => {
    blockchainApi.getAllEnergySystemTokenAddresses(req, res);
})


server.listen(8000, function() {
    console.log('App listening on port 8000!');
});


