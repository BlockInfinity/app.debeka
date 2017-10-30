"use strict";

// gibt true zurück, wenn Account in MetaMask geladen ist
module.exports.isAccountLoaded = function() {
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
module.exports.getDefaultAccount = function() {
    return web3.eth.defaultAccount;
}


// gibt Account Stand zurück
module.exports.getEtherBalance = function(_user = web3.eth.defaultAccount) {
    return new Promise((resolve, reject) => {
        web3.eth.getBalance(_user, function(err, res) {
            if (err)
                reject(err);
            else
                resolve(res.toNumber());
        });
    })
}


// initiales anlegen eines energysystemtoken contracts. Jener contract wird über eine contract factory erstellt. Auf server seite wird sicher gestellt, dass jene factory deployed ist. 
module.exports.createEnergySystemToken = function(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price) {

    return fetch('/EnergySystemTokenFactory').then(response => {
        console.log("got reponse");
        if (response.status !== 200) {
            let msg = `Looks like there was a problem. Status Code: + ${response.status}`
            return Promise.reject(msg);
        }
        return response.json().then(function(data) {
            let abi = data.abi;
            let address = data.address;
            let contract = web3.eth.contract(abi);
            let factory = contract.at(address);
            return new Promise((resolve, reject) => {
                factory.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price, (error, txhash) => {
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

// gibt die adresse des zuletzt erstellten energysystemtoken contracts wieder 
module.exports.getLastEnergySystemTokenAddressForUser = function(_user = web3.eth.defaultAccount) {
    return fetch(`/LastEnergySystemTokenAddressForUser?userAddress=${web3.eth.defaultAccount}`).then(response => {
        return response.json();
    }).then(res => {
        return res;
    });
}


// gibt alle energy system token addresses für einen nutzer zurück 
module.exports.getAllEnergySystemTokenAddressesForUser = function(_user = web3.eth.defaultAccount) {
    return fetch(`/AllEnergySystemTokenAddressesForUser?userAddress=${web3.eth.defaultAccount}`).then(response => {
        return response.json();
    }).then(res => {
        return res;
    });
}


// gibt alle energy system token adressen zurück
module.exports.getAllEnergySystemTokenAddresses = function() {
    return fetch(`/AllEnergySystemTokenAddresses`).then(response => {
        return response.json();
    }).then(res => {
        return res;
    });
}


module.exports.getEnergySystemTokenBalance = function(_energySystemTokenAddress, _user = web3.eth.defaultAccount) {

    return getEnergySystemToken(_energySystemTokenAddress).then(estoken => {
        console.log("in api.js getEnergySystemTokenBalance", estoken)
        console.log("_user", _user)
        window.estoken = estoken;
        return new Promise((resolve, reject) => {
            estoken.balanceOf(_user, { from: _user }, function(error, result) {
                if (error) throw error;
                resolve(result.toNumber());
            });
        })
    })
}


function getSignatureParameterString() {
    return new Promise((resolve, reject) => {
        let message = web3.sha3("0x135a7de83802408321b74c322f8558db1679ac20");
        web3.eth.sign(web3.eth.defaultAccount, message, (error, signature) => {
            if (error) {
                reject(error);
            } else {
                let parameterString = `userAddress=${web3.eth.defaultAccount}&signature=${signature}&message=${message}`
                resolve(parameterString);
            }
        })
    });
}

// test function for fetchWithAuth helper function 
module.exports.isAuthenticated = function() {
    return fetchWithAuth("/Authenticated").then(response => {
        return response.text();
    }).then(res => {
        return res;
    });
}


module.exports.getTotalNumberOfTokens = function(_energySystemTokenAddress) {

}


// returns {price, orders[]} for a specific _energySystemTokenAddress
module.exports.getFulfilledOrders = function(_energySystemTokenAddress) {

}


module.exports.getRaisedEther = function(_energySystemTokenAddress) {

}


// Kauf von tokens während der funding phase 
module.exports.buyEnergySystemTokens = function(_energySystemTokenAddress, _value) {
    // - sol function buyEnergySystemTokens()  
}


// Zurücktauschen von tokens gegen ether während der funding phase 
module.exports.getMoneyBack = function(_energySystemTokenAddress) {
    // - sol function getMoneyBack() 
}


module.exports.getTimeLeftForFundingPhase = function(_energySystemTokenAddress) {

}


// erträge im energysystemtoken contract ausbezahlen lassen 
module.exports.withdraw = function(_energySystemTokenAddress) {

}


//  function for future trading enhancement
module.exports.transferEther = function(_to, _value) {

}


//  function for future trading enhancement
module.exports.transferEnergySystemShares = function(_to, _value) {

}


//  function for future trading enhancement
module.exports.transferFromEnergySystemShares = function(_from, _to, _value) {

}


// ruft die enbw oder der besitzer auf um erträge an die shareholder auszuzahlen  
module.exports.disburse = function(_energySystemTokenAddress) {

}

// merges properties of both objects, so that i can access the functions in browser via window. 
Object.assign(window, module.exports)


// helper function 
function getEnergySystemToken(_energySystemTokenAddress, _user = web3.eth.defaultAccount) {
    return new Promise((resolve, reject) => {
        return fetch('/EnergySystemTokenAbi').then(response => {
            return response.json().then(function(data) {
                console.log("/EnergySystemTokenAbi reponse abi", data.abi)
                let abi = data.abi;
                let contract = web3.eth.contract(abi);
                console.log("after web3.eth.contract")
                let estoken = contract.at(_energySystemTokenAddress);
                resolve(estoken);
            })
        })
    })
}

// use this instead of fetch when retrieving /use/ ressources
function fetchWithAuth(_ressource) {
    return getSignatureParameterString().then(res => {
        return fetch(`${_ressource}?${res}`);
    })
}

