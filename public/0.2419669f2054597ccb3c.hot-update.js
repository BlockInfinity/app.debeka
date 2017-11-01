webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar io = __webpack_require__(170);\nvar socket = io(window.location.host);\n\n// gibt true zurück, wenn Account in MetaMask geladen ist\nmodule.exports.isAccountLoaded = function () {\n    if (typeof web3 !== 'undefined') {\n        window.web3 = new Web3(web3.currentProvider);\n        if (web3.eth.accounts.length > 0) {\n            return true;\n            return web3.eth.defaultAccount;\n        } else {\n            return false;\n        }\n    }\n};\n\n// gets default account that is used by metamask \nmodule.exports.getDefaultAccount = function () {\n    return web3.eth.defaultAccount;\n};\n\n// gibt Account Stand zurück\nmodule.exports.getEtherBalance = function () {\n    var _user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : web3.eth.defaultAccount;\n\n    return new Promise(function (resolve, reject) {\n        web3.eth.getBalance(_user, function (err, res) {\n            if (err) reject(err);else resolve(res.toNumber());\n        });\n    });\n};\n\n// initiales anlegen eines energysystemtoken contracts. Jener contract wird über eine contract factory erstellt. Auf server seite wird sicher gestellt, dass jene factory deployed ist. \nmodule.exports.createEnergySystemToken = function (_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price) {\n\n    return fetch('/EnergySystemTokenFactory').then(function (response) {\n        console.log(\"got reponse\");\n        if (response.status !== 200) {\n            var msg = 'Looks like there was a problem. Status Code: + ' + response.status;\n            return Promise.reject(msg);\n        }\n        return response.json().then(function (data) {\n            var abi = data.abi;\n            var address = data.address;\n            var contract = web3.eth.contract(abi);\n            var factory = contract.at(address);\n            return new Promise(function (resolve, reject) {\n                factory.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price, function (error, txhash) {\n                    if (error) {\n                        reject(error);\n                    }\n                    console.log(\"EnergySystemToken Creation txhash: \", txhash);\n                    socket.on('EnergySystemTokenCreationEvent', function (args) {\n                        resolve(JSON.parse(args));\n                    });\n                });\n            }).catch(function (err) {\n                console.log(err + ' createEnergySystemToken');\n            });\n        }).catch(function (err) {\n            console.log(err + ' in response.json');\n        });\n    }).catch(function (err) {\n        console.log('Fetch Error', err);\n    });\n};\n\n// gibt die adresse des zuletzt erstellten energysystemtoken contracts wieder \nmodule.exports.getLastEnergySystemTokenAddressForUser = function () {\n    var _user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : web3.eth.defaultAccount;\n\n    return fetch('/LastEnergySystemTokenAddressForUser?userAddress=' + web3.eth.defaultAccount).then(function (response) {\n        return response.json();\n    }).then(function (res) {\n        return res;\n    });\n};\n\n// gibt alle energy system token addresses für einen nutzer zurück \nmodule.exports.getAllEnergySystemTokenAddressesForUser = function () {\n    var _user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : web3.eth.defaultAccount;\n\n    return fetch('/AllEnergySystemTokenAddressesForUser?userAddress=' + web3.eth.defaultAccount).then(function (response) {\n        return response.json();\n    }).then(function (res) {\n        return res;\n    });\n};\n\n// gibt alle energy system token adressen zurück\nmodule.exports.getAllEnergySystemTokenAddresses = function () {\n    return fetch('/AllEnergySystemTokenAddresses').then(function (response) {\n        return response.json();\n    }).then(function (res) {\n        return res;\n    });\n};\n\nmodule.exports.getEnergySystemTokenBalance = function (_energySystemTokenAddress) {\n    var _user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : web3.eth.defaultAccount;\n\n    return getEnergySystemToken(_energySystemTokenAddress).then(function (estoken) {\n        console.log(\"in api.js getEnergySystemTokenBalance\", estoken);\n        console.log(\"_user\", _user);\n        window.estoken = estoken;\n        return new Promise(function (resolve, reject) {\n            estoken.balanceOf(_energySystemTokenAddress, { from: _user }, function (error, result) {\n                if (error) reject(error);\n                resolve(result.toNumber());\n            });\n        });\n    });\n};\n\n// test function for fetchWithAuth helper function \nmodule.exports.isAuthenticated = function () {\n    return fetchWithAuth(\"/Authenticated\").then(function (response) {\n        return response.text();\n    }).then(function (res) {\n        return res;\n    });\n};\n\nmodule.exports.getTotalNumberOfTokens = function (_energySystemTokenAddress) {\n    return getEnergySystemToken(_energySystemTokenAddress).then(function (estoken) {\n        return new Promise(function (resolve, reject) {\n            estoken.totalSupply(function (error, result) {\n                if (error) reject(error);\n                resolve(result.toNumber());\n            });\n        });\n    });\n};\n\nmodule.exports.setPrices = function (_energySystemTokenAddress, _newSellPrice, _newBuyPrice) {\n    return getEnergySystemToken(_energySystemTokenAddress).then(function (estoken) {\n        return fetch('/EventListener?energySystemTokenAddress=' + _energySystemTokenAddress + '&eventName=PricesSet').then(function (response) {\n            return new Promise(function (resolve, reject) {\n                console.log(\"address in setPrices function: \", estoken.address);\n                estoken.setPrices(_newSellPrice, _newBuyPrice, { from: web3.eth.defaultAccount }, function (error, txhash) {\n                    if (error) {\n                        reject(error);\n                    }\n                    console.log(\"setPrices() txhash: \", txhash);\n                    socket.on('PricesSet', function (args) {\n                        resolve(JSON.parse(args));\n                    });\n                });\n            });\n        });\n    });\n};\n\n// während der fundingphase\nmodule.exports.buy = function (_energySystemTokenAddress, _value) {\n    return getEnergySystemToken(_energySystemTokenAddress).then(function (estoken) {\n        return fetch('/EventListener?energySystemTokenAddress=' + _energySystemTokenAddress + '&eventName=Transfer&filter={ _to:' + web3.eth.defaultAccount + '}').then(function (response) {\n            return new Promise(function (resolve, reject) {\n                estoken.buy({ from: web3.eth.defaultAccount, value: _value }, function (error, txhash) {\n                    if (error) {\n                        reject(error);\n                    }\n                    socket.on('Transfer', function (args) {\n                        resolve(JSON.parse(args));\n                    });\n                });\n            });\n        });\n    });\n};\n\n// während der fundingphase\nmodule.exports.sell = function (_energySystemTokenAddress, _value) {\n    return getEnergySystemToken(_energySystemTokenAddress).then(function (estoken) {\n        return fetch('/EventListener?energySystemTokenAddress=' + _energySystemTokenAddress + '&eventName=Transfer&filter={ _from:' + web3.eth.defaultAccount + '}').then(function (response) {\n            return new Promise(function (resolve, reject) {\n                estoken.sell(_value, { from: web3.eth.defaultAccount, gas: 120000 }, function (error, txhash) {\n                    if (error) {\n                        reject(error);\n                    }\n                    socket.on('Transfer', function (args) {\n                        resolve(JSON.parse(args));\n                    });\n                });\n            });\n        });\n    });\n};\n\nmodule.exports.getFulfilledOrders = function (_energySystemTokenAddress) {\n    return fetch('/FulfilledOrders?energySystemTokenAddress=' + _energySystemTokenAddress).then(function (response) {\n        return response.json();\n    }).then(function (res) {\n        return res;\n    });\n};\n\nmodule.exports.getRaisedEther = function (_energySystemTokenAddress) {\n    return new Promise(function (resolve, reject) {\n        web3.eth.getBalance(_energySystemTokenAddress, function (err, res) {\n            if (err) reject(err);else resolve(res.toNumber());\n        });\n    });\n};\n\nmodule.exports.getPrice = function (_energySystemTokenAddress) {\n    // - sol function getMoneyBack() \n    return getEnergySystemToken(_energySystemTokenAddress).then(function (estoken) {\n        return new Promise(function (resolve, reject) {\n            estoken.sellPrice(function (error, sellPrice) {\n                if (error) reject(error);\n                estoken.buyPrice(function (error, buyPrice) {\n                    if (error) reject(error);\n                    resolve({\n                        buyPrice: result2.buyPrice(),\n                        sellPrice: result1.sellPrice()\n                    });\n                });\n            });\n        });\n    });\n};\n\nmodule.exports.getTimeLeftForFundingPhase = function (_energySystemTokenAddress) {};\n\n// erträge im energysystemtoken contract ausbezahlen lassen \nmodule.exports.withdraw = function (_energySystemTokenAddress) {};\n\n//  function for future trading enhancement\nmodule.exports.transferEther = function (_to, _value) {};\n\n//  function for future trading enhancement\nmodule.exports.transferEnergySystemShares = function (_to, _value) {};\n\n//  function for future trading enhancement\nmodule.exports.transferFromEnergySystemShares = function (_from, _to, _value) {};\n\n// ruft die enbw oder der besitzer auf um erträge an die shareholder auszuzahlen  \nmodule.exports.disburse = function (_energySystemTokenAddress) {};\n\n// merges properties of both objects, so that i can access the functions in browser via window. \nObject.assign(window, module.exports);\n\n// #################### helper function \n\nfunction getSignatureParameterString() {\n    return new Promise(function (resolve, reject) {\n        var message = web3.sha3(\"0x135a7de83802408321b74c322f8558db1679ac20\");\n        web3.eth.sign(web3.eth.defaultAccount, message, function (error, signature) {\n            if (error) {\n                reject(error);\n            } else {\n                var parameterString = 'userAddress=' + web3.eth.defaultAccount + '&signature=' + signature + '&message=' + message;\n                resolve(parameterString);\n            }\n        });\n    });\n}\n\nfunction getEnergySystemToken(_energySystemTokenAddress) {\n    var _user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : web3.eth.defaultAccount;\n\n    return new Promise(function (resolve, reject) {\n        return fetch('/EnergySystemTokenAbi').then(function (response) {\n            return response.json().then(function (data) {\n                console.log(\"/EnergySystemTokenAbi reponse abi\", data.abi);\n                var abi = data.abi;\n                var contract = web3.eth.contract(abi);\n                console.log(\"after web3.eth.contract\");\n                var estoken = contract.at(_energySystemTokenAddress);\n                resolve(estoken);\n            });\n        });\n    });\n}\n\n// use this instead of fetch when retrieving /user/ ressources\nfunction fetchWithAuth(_ressource) {\n    return getSignatureParameterString().then(function (res) {\n        return fetch(_ressource + '?' + res);\n    });\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(211); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"api.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/scripts/api.js\n// module id = 1\n// module chunks = 0 1\n//# sourceURL=webpack:///./app/scripts/api.js?");

/***/ })
])