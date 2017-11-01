webpackHotUpdate(1,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\n// gibt true zurück, wenn Account in MetaMask geladen ist\n\nmodule.exports.isAccountLoaded = function () {\n    if (typeof web3 !== 'undefined') {\n        window.web3 = new Web3(web3.currentProvider);\n        if (web3.eth.accounts.length > 0) {\n            return true;\n            return web3.eth.defaultAccount;\n        } else {\n            return false;\n        }\n    }\n};\n\n// gets default account that is used by metamask \nmodule.exports.getDefaultAccount = function () {\n    return web3.eth.defaultAccount;\n};\n\n// gibt Account Stand zurück\nmodule.exports.getEtherBalance = function () {\n    var _user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : web3.eth.defaultAccount;\n\n    return new Promise(function (resolve, reject) {\n        web3.eth.getBalance(_user, function (err, res) {\n            if (err) reject(err);else resolve(res.toNumber());\n        });\n    });\n};\n\n// initiales anlegen eines energysystemtoken contracts. Jener contract wird über eine contract factory erstellt. Auf server seite wird sicher gestellt, dass jene factory deployed ist. \nmodule.exports.createEnergySystemToken = function (_anzahlTokens, _name, _beschreibung) {\n\n    return fetch('/EnergySystemTokenFactory').then(function (response) {\n        console.log(\"got reponse\");\n        if (response.status !== 200) {\n            var msg = 'Looks like there was a problem. Status Code: + ' + response.status;\n            return Promise.reject(msg);\n        }\n        return response.json().then(function (data) {\n            var abi = data.abi;\n            var address = data.address;\n            var contract = web3.eth.contract(abi);\n            var factory = contract.at(address);\n            return new Promise(function (resolve, reject) {\n                factory.createEnergySystemToken(function (error, txhash) {\n                    if (error) {\n                        reject(error);\n                    }\n                    console.log(\"EnergySystemToken Creation txhash: \", txhash);\n                    resolve(txhash);\n                });\n            }).catch(function (err) {\n                console.log(err + ' createEnergySystemToken');\n            });\n        }).catch(function (err) {\n            console.log(err + ' in response.json');\n        });\n    }).catch(function (err) {\n        console.log('Fetch Error', err);\n    });\n};\n\n// gibt die adresse des zuletzt erstellten energysystemtoken contracts wieder \nmodule.exports.getLastEnergySystemTokenAddressForUser = function () {\n    var _user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : web3.eth.defaultAccount;\n\n    return fetch('/LastEnergySystemTokenAddressForUser?userAddress=' + web3.eth.defaultAccount).then(function (response) {\n        return response.json();\n    }).then(function (res) {\n        return res;\n    });\n};\n\n// gibt alle energy system token addresses für einen nutzer zurück \nmodule.exports.getAllEnergySystemTokenAddressesForUser = function () {\n    var _user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : web3.eth.defaultAccount;\n\n    return fetch('/AllEnergySystemTokenAddressesForUser?userAddress=' + web3.eth.defaultAccount).then(function (response) {\n        return response.json();\n    }).then(function (res) {\n        return res;\n    });\n};\n\n// gibt alle energy system token adressen zurück\nmodule.exports.getAllEnergySystemTokenAddresses = function () {\n    return fetch('/AllEnergySystemTokenAddresses').then(function (response) {\n        return response.json();\n    }).then(function (res) {\n        return res;\n    });\n};\n\nmodule.exports.getEnergySystemTokenBalance = function (_energySystemTokenAddress) {\n    var _user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : web3.eth.defaultAccount;\n\n    return getEnergySystemToken(_energySystemTokenAddress).then(function (estoken) {\n        console.log(\"in api.js getEnergySystemTokenBalance\", estoken);\n        console.log(\"_user\", _user);\n        window.estoken = estoken;\n        estoken.balanceOf(_user, { from: _user }, function (error, result) {\n            if (error) throw error;\n            return result;\n        });\n    });\n};\n\nmodule.exports.getTotalNumberOfTokens = function (_energySystemTokenAddress) {};\n\n// returns {price, orders[]} for a specific _energySystemTokenAddress\nmodule.exports.getFulfilledOrders = function (_energySystemTokenAddress) {};\n\nmodule.exports.getRaisedEther = function (_energySystemTokenAddress) {};\n\n// Kauf von tokens während der funding phase \nmodule.exports.buyEnergySystemTokens = function (_energySystemTokenAddress, _value) {}\n// - sol function buyEnergySystemTokens()  \n\n\n// Zurücktauschen von tokens gegen ether während der funding phase \n;module.exports.getMoneyBack = function (_energySystemTokenAddress) {\n    // - sol function getMoneyBack() \n};\n\nmodule.exports.getTimeLeftForFundingPhase = function (_energySystemTokenAddress) {};\n\n// erträge im energysystemtoken contract ausbezahlen lassen \nmodule.exports.withdraw = function (_energySystemTokenAddress) {};\n\n//  function for future trading enhancement\nmodule.exports.transferEther = function (_to, _value) {};\n\n//  function for future trading enhancement\nmodule.exports.transferEnergySystemShares = function (_to, _value) {};\n\n//  function for future trading enhancement\nmodule.exports.transferFromEnergySystemShares = function (_from, _to, _value) {};\n\n// ruft die enbw oder der besitzer auf um erträge an die shareholder auszuzahlen  \nmodule.exports.disburse = function (_energySystemTokenAddress) {};\n\n// merges properties of both objects, so that i can access the functions in browser via window. \nObject.assign(window, module.exports);\n\n// helper function \nfunction getEnergySystemToken(_energySystemTokenAddress) {\n    var _user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : web3.eth.defaultAccount;\n\n    return new Promise(function (resolve, reject) {\n        return fetch('/EnergySystemTokenAbi').then(function (response) {\n            return response.json().then(function (data) {\n                console.log(\"/EnergySystemTokenAbi reponse abi\", data.abi);\n                var abi = data.abi;\n                var contract = web3.eth.contract(abi);\n                console.log(\"after web3.eth.contract\");\n                var estoken = contract.at(_energySystemTokenAddress);\n                resolve(estoken);\n            });\n        });\n    });\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(170); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"api.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/scripts/api.js\n// module id = 1\n// module chunks = 0 1\n//# sourceURL=webpack:///./app/scripts/api.js?");

/***/ })
])