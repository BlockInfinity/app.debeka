"use strict";

const Web3 = require("web3");
const util = require("ethereumjs-util");

// here comes in the logic to authentificate users 

module.exports.isAuthenticated = (request, response) => {

    let userAddress;
    if (request.query.userAddress) {
        userAddress = request.query.userAddress;
    } else {
        response.send("userAddress as query parameter is missing.");
        return;
    }

    let signature;
    if (request.query.signature) {
        signature = request.query.signature;
    } else {
        response.send("signature as query parameter is missing.");
        return;
    }

    let message;
    if (request.query.message) {
        message = request.query.message;
    } else {
        response.send("message as query parameter is missing.");
        return;
    }

    const { v, r, s } = util.fromRpcSig(signature);
    const pubKey = util.ecrecover(util.toBuffer(message), v, r, s);
    const addrBuf = util.pubToAddress(pubKey);
    const addr = util.bufferToHex(addrBuf);

    if (request.query.userAddress == addr)
        return true;
    else
        return false;
}