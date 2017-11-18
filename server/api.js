'use strict;'

const DEBUG = true;

const Web3 = require('web3');

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

/* ############## execute */

connect();
setInterval(reset, PERIOD_LENGTH);


/* ############## exposed function */


module.exports.set_User_Account = function(_account = web3.eth.accounts[1]) {
    state.user_Account = _account;
}


module.exports.sende_Bewegungsdaten = function(_data) {

    if (!web3) {
        throw new Error("Please connect first to Blockchain Node via connect() function.")
    }

    if (!state.user_Account) {
        throw new Error("Please set User Account first via set_User_Account function.")
    }

    /* ################## hier die distance in der current period berechnen */
    /* ##################                  ...                              */
    /* ##################                  ...                              */
    // distance_In_Current_Period = ...


    if (state.distance_In_Current_Period > DISTANCE_PER_PERIOD || DEBUG) {
        let txhash = send_Ether(REWARD_IN_ETHER_PER_PERIOD);
        state.txhistory.push({ date: new Date(), reward: REWARD_IN_ETHER_PER_PERIOD, txhash: txhash })
        state.total_Rewards += REWARD_IN_ETHER_PER_PERIOD;
        return txhash;
    } else {
        return false;
    }
}


module.exports.get_State = function() {
    return state;
}


/* ############## internal functions */

function reset() {
    state.distance_In_Current_Period = 0;
}


function send_Ether(_value) {
    let _value_in_wei = web3.toWei(_value);
    return web3.eth.sendTransaction({ from: state.watch_Account, to: state.user_Account, value: _value_in_wei });
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