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


// gets default account that is used by metamask 
window.getDefaultAccount = function() {
    return web3.eth.defaultAccount;
}


// gibt Account Stand zurück
window.getEtherBalance = function(_user = web3.eth.defaultAccount) {
    return web3.eth.getBalance(_user);
}


// initiales anlegen eines energysystemtoken contracts. Jener contract wird über eine contract factory erstellt. Auf server seite wird sicher gestellt, dass jene factory deployed ist. 
window.createEnergySystemToken = function(_anzahlTokens, _name, _beschreibung) {

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


// retrieves all EnergySystemTokenCreationEvents for logged in user.  
window.getEnergySystemTokenCreationEvents = function(_user = web3.eth.defaultAccount) {
    return fetch(`./EnergySystemTokens?userAddress=${web3.eth.defaultAccount}`).then(response => {
        return response.json();
    }).then(res => {
        return res;
    });
}


// gibt die adresse des zuletzt erstellten energysystemtoken contracts wieder 
window.getLastEnergySystemTokenAddressForUser = function(_user = web3.eth.defaultAccount) {

}


// gibt alle energy system token addresses für einen nutzer zurück 
window.getAllEnergySystemTokenAddressesForUser = function(_user = web3.eth.defaultAccount) {

}


// gibt alle energy system token adressen zurück
window.getAllEnergySystemTokenAddresses = function() {

}


window.getTokenBalance = function(_energySystemTokenAddress, _user = web3.eth.defaultAccount) {

}


window.getTotalNumberOfTokens = function(_energySystemTokenAddress) {

}

// returns {price, orders[]} for a specific _energySystemTokenAddress
window.getFulfilledOrders = function(_energySystemTokenAddress) {

}


window.getRaisedEther = function(_energySystemTokenAddress) {

}


// Kauf von tokens während der funding phase 
window.buyEnergySystemTokens = function(_energySystemTokenAddress, _value) {
    // - sol function buyEnergySystemTokens()  
}


// Zurücktauschen von tokens gegen ether während der funding phase 
window.getMoneyBack = function(_energySystemTokenAddress) {
    // - sol function getMoneyBack() 
}


window.getTimeLeftForFundingPhase = function(_energySystemTokenAddress) {

}


// erträge im energysystemtoken contract ausbezahlen lassen 
window.withdraw = function(_energySystemTokenAddress) {

}


//  function for future trading enhancement
window.transferEther = function(_to, _value) {

}


//  function for future trading enhancement
window.transferEnergySystemShares = function(_to, _value) {

}


//  function for future trading enhancement
window.transferFromEnergySystemShares = function(_from, _to, _value) {

}


// ruft die enbw oder der besitzer auf um erträge an die shareholder auszuzahlen  
window.disburse = function(_energySystemTokenAddress) {

}