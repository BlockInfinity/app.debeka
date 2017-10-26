"use strict";

// gibt true zurück, wenn Account in MetaMask geladen ist
window.isAccountLoaded = function(_address) {
    if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
        if (web3.eth.accounts.length > 0) {
            return true;
            return web3.eth.defaultAccount;
        } else {
            return false;
        }
    }
}

window.getAccount = function() {
    return web3.eth.defaultAccount;
}

// gibt Account Stand zurück
window.accountStatus = function(_address) {
    return web3.eth.getBalance(_address);
}

// initiales anlegen eines energy system
window.createEnergySystem = function(_anzahlTokens, _name, _beschreibung) {

    return fetch('./EnergySystemTokenFactory').then(response => {
        console.log("got reponse");
        if (response.status !== 200) {
            let msg = `Looks like there was a problem. Status Code: + ${response.status}`
            reject(msg);
        }
        return response.json().then(function(data) {
            let abi = data.abi;
            let address = data.address;
            let contract = web3.eth.contract(abi);
            window.contract = contract;
            window.factory = contract.at(address);
            return new Promise((resolve, reject) => {
                factory.createEnergySystemToken((error, result) => {
                    if (error) {
                        reject(error);
                    }
                    console.log("executed", result)
                    resolve("executed");

                    // todo: hier muss jetzt noch auf das creation event gelauscht werden  
                })
            }).catch(err => {
                console.log(`${err} createEnergySystemToken`)
            });
        }).catch(err => {
            console.log(`${err} in response.json`)
        })
    }).catch(function(err) {
        console.log('Fetch Error', err);
    })
}


function getEnergySystemData(_address) {

}

// verkaufen von shares
function sellEnergySystemShares(_address, _anzahlTokens, _price) {

}

// list of anzahlToken/price pairs
function getSellEnergySystemShares(_address) {

}

function buyEnergySystemShares(_address, _anzahlTokens, _price) {

}

// list of anzahlToken/price pairs
function getBuyEnergySystemShares(_address) {

}

module.exports = {

}