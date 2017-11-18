const Web3 = require('web3');


let web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
if (web3 && !web3.isConnected()) {
    throw new Error("web3 is not connected. Please execute connect function if not already done. ")
} else {
    console.log(`Connected to Node at ${"https://ropsten.infura.io/"}`)
}

console.log(web3.eth.blockNumber);



var number = web3.eth.getTransactionCount("0x290CEE9385cE6DdcC4FFfb59C607D4B2E740b951");
var Tx = require('ethereumjs-tx');
var privateKey = new Buffer('cf1e1d95cd862418b2138a6b018e5a5129693ca3c3e17332e1ccd0503a7c5ab8', 'hex')

var rawTx = {
    nonce: number,
    gasPrice: '0x09184e72a000',
    gasLimit: '0x10710',
    to: '0xf0433Ad2cddA1179D764a1d2410aB90cFB124B35',
    value: web3.toHex(web3.toWei(1, 'ether')),
    data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
}

var tx = new Tx(rawTx);
tx.sign(privateKey);

var serializedTx = tx.serialize();

web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
    if (!err)
        console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
    else
        console.log(err)
});