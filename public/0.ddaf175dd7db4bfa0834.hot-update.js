webpackHotUpdate(0,{

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(65); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\n// gibt true zurück, wenn Account in MetaMask geladen ist\n\nwindow.isAccountLoaded = function (_address) {\n    if (typeof web3 !== 'undefined') {\n        window.web3 = new Web3(web3.currentProvider);\n        if (web3.eth.accounts.length > 0) {\n            return true;\n            return web3.eth.defaultAccount;\n        } else {\n            return false;\n        }\n    }\n};\n\nwindow.getAccount = function () {\n    return web3.eth.defaultAccount;\n};\n\n// gibt Account Stand zurück\nwindow.accountStatus = function (_address) {\n    return web3.eth.getBalance(_address);\n};\n\n// initiales anlegen eines energysystemtoken contracts. \n// Jener contract wird über eine contract factory erstellt. Auf server seite wird sicher gestellt, dass jene factory deployed ist. \nwindow.createEnergySystem = function (_anzahlTokens, _name, _beschreibung) {\n\n    return fetch('./EnergySystemTokenFactory').then(function (response) {\n        console.log(\"got reponse\");\n        if (response.status !== 200) {\n            var msg = 'Looks like there was a problem. Status Code: + ' + response.status;\n            reject(msg);\n        }\n        return response.json().then(function (data) {\n            var abi = data.abi;\n            var address = data.address;\n            var contract = web3.eth.contract(abi);\n            window.contract = contract;\n            window.factory = contract.at(address);\n            return new Promise(function (resolve, reject) {\n                factory.createEnergySystemToken(function (error, txhash) {\n                    if (error) {\n                        reject(error);\n                    }\n                    console.log(\"EnergySystemToken Creation txhash: \", txhash);\n                    resolve(txhash);\n                });\n            }).catch(function (err) {\n                console.log(err + ' createEnergySystemToken');\n            });\n        }).catch(function (err) {\n            console.log(err + ' in response.json');\n        });\n    }).catch(function (err) {\n        console.log('Fetch Error', err);\n    });\n};\n\n// retrieves all EnergySystemTokenCreationEvents for logged in user. Important for getting the estoken contract addresses for the user. \nwindow.getEnergySystemTokens = function () {\n    return fetch('./EnergySystemTokens?userAddress=' + web3.eth.defaultAccount).then(function (response) {\n        return response.json();\n    }).then(function (res) {\n        return res;\n    });\n};\n\n// // verkaufen von shares\n// function sellEnergySystemShares(_address, _anzahlTokens, _price) {\n\n// }\n\n// // list of anzahlToken/price pairs\n// function getSellEnergySystemShares(_address) {\n\n// }\n\n// function buyEnergySystemShares(_address, _anzahlTokens, _price) {\n\n// }\n\n// // list of anzahlToken/price pairs\n// function getBuyEnergySystemShares(_address) {\n\n// }\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(238); if (makeExportsHot(module, __webpack_require__(65))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"api.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/scripts/api.js\n// module id = 561\n// module chunks = 0\n//# sourceURL=webpack:///./app/scripts/api.js?");

/***/ })

})