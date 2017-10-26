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

// initiales anlegen eines energysystemtoken contracts. 
// Jener contract wird über eine contract factory erstellt. Auf server seite wird sicher gestellt, dass jene factory deployed ist. 
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
                factory.createEnergySystemToken((error, txhash) => {
                    if (error) {
                        reject(error);
                    }
                    console.log("EnergySystemToken Creation txhash: ", txhash)
                    resolve(txhash);
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

// retrieves all EnergySystemTokenCreationEvents for logged in user. Important for getting the estoken contract addresses for the user. 
window.getEnergySystemTokens = function() {
    return fetch(`./EnergySystemTokens?userAddress=${web3.eth.defaultAccount}`).then(response => {
        return response.json();
    }).then(res => {
        return res;
    });
}

// // verkaufen von shares
// function sellEnergySystemShares(_address, _anzahlTokens, _price) {

// }

// // list of anzahlToken/price pairs
// function getSellEnergySystemShares(_address) {

// }

// function buyEnergySystemShares(_address, _anzahlTokens, _price) {

// }

// // list of anzahlToken/price pairs
// function getBuyEnergySystemShares(_address) {

// }

