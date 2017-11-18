'use strict;'

const DEBUG = true;

const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

if (!process.env.NODE_URL) {
    throw new Error("process.env.NODE_URL not set")
}

if (!process.env.PW) {
    throw new Error("process.env.PW not set")
}

const PERIOD_LENGTH = 120000;
const DISTANCE_PER_PERIOD = 10;
const REWARD_IN_ETHER_PER_PERIOD = 0.001;
let web3;

let state = {
    distance_In_Current_Period: 0,
    user_Account: 0,
    txhistory: [],
    total_Rewards: 0,
    watch_Account: 0
}

const STATIC_PUB_KEY_WATCH = "0x290CEE9385cE6DdcC4FFfb59C607D4B2E740b951";
const STATIC_PRIVATE_KEY_WATCH = "cf1e1d95cd862418b2138a6b018e5a5129693ca3c3e17332e1ccd0503a7c5ab8";
const STATIC_PUB_KEY_USER = '0xf0433Ad2cddA1179D764a1d2410aB90cFB124B35';

/* ############## execute */

connect();
setInterval(reset, PERIOD_LENGTH);


/* ############## exposed function */


module.exports.set_User_Account = function(request, response) {
    let _account = request.body.account || STATIC_PUB_KEY_USER;
    state.user_Account = _account;
    response.json({ succeeded: true });
}


module.exports.sende_Bewegungsdaten = function(request, response) {
    let _data = request.body.data;

    if (!web3) {
        throw new Error("Please connect first to Blockchain Node via connect() function.")
    }

    if (!state.user_Account) {
        throw new Error("Please set User Account first via set_User_Account function.")
    }

    /* ################## hier die distance in der current period berechnen */
    /* ##################                  ...                              */
    /* ##################                  ...                              */
    // todo: diff bilden
    // todo: diff mit factor multiplizieren und aufaddieren
    state.distance_In_Current_Period += _data.distance;

    if (state.distance_In_Current_Period > DISTANCE_PER_PERIOD || DEBUG) {
        let txhash = send_Ether(REWARD_IN_ETHER_PER_PERIOD);
        state.txhistory.push({ date: new Date(), reward: REWARD_IN_ETHER_PER_PERIOD, txhash: txhash })
        state.total_Rewards += REWARD_IN_ETHER_PER_PERIOD;
        response.json({ state });

    } else {
        response.json({ message: "Distance successfully increased." });
    }
}


module.exports.zahle_Aus = function(request, response) {
    let _data = request.body.data;

    if (!web3) {
        throw new Error("Please connect first to Blockchain Node via connect() function.")
    }

    if (!state.user_Account) {
        throw new Error("Please set User Account first via set_User_Account function.")
    }

    /* ################## hier die distance in der current period berechnen */
    /* ##################                  ...                              */
    /* ##################                  ...                              */
    // todo: diff bilden
    // todo: diff mit factor multiplizieren und aufaddieren
    _data._value;

    if (state.distance_In_Current_Period > DISTANCE_PER_PERIOD || DEBUG) {
        let txhash = send_Ether(_data._valuelue);
        state.txhistory.push({ date: new Date(), reward: REWARD_IN_ETHER_PER_PERIOD, txhash: txhash })
        state.total_Rewards += REWARD_IN_ETHER_PER_PERIOD;
        response.json({ state });

    } else {
        response.json({ message: "Distance successfully increased." });
    }
}

module.exports.get_State = function(request, response) {
    response.json({ state });
}


/* ############## internal functions */

function reset() {
    state.distance_In_Current_Period = 0;
}


function send_Ether(_value) {
  
    var number = web3.eth.getTransactionCount(STATIC_PUB_KEY_WATCH);
    var privateKey = new Buffer(STATIC_PRIVATE_KEY_WATCH, 'hex')

    var rawTx = {
        nonce: number,
        gasPrice: '0x09184e72a000',
        gasLimit: '0x10710',
        to: state.user_Account,
        value: web3.toHex(web3.toWei(_value, 'ether')),
        data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
    }

    var tx = new Tx(rawTx);
    tx.sign(privateKey);

    var serializedTx = tx.serialize();

    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
        if (!err)
            console.log(hash); 
        else
            console.log(err)
    });

}

function connect(_node_Url = process.env.NODE_URL, _pw = process.env.PW) {
    web3 = new Web3(new Web3.providers.HttpProvider(process.env.NODE_URL));
    if (web3 && !web3.isConnected()) {
        throw new Error("web3 is not connected. Please execute connect function if not already done. ")
    } else {
        web3.eth.defaultAccount = web3.eth.accounts[1];
        state.watch_Account = web3.eth.accounts[1];
        web3.personal.unlockAccount(state.watch_Account, _pw, 0);
        console.log(`Connected to Node at ${process.env.NODE_URL}`)
    }
}