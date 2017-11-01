webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("let assert = chai.assert;\nlet api = __webpack_require__(1)\nlet io = __webpack_require__(173);\n\nconst socket = io(window.location.host);\n\n\n\n\ndescribe('api.js', function() {\n\n    let socketPromise;\n\n    before((done) => {\n        while (!api.isAccountLoaded()) {\n            setTimeout(() => {}, 3000);\n        }\n        socketPromise = new Promise((resolve, reject) => socket.on('EnergySystemTokenCreationEvent', (data) => {\n            resolve(data);\n        }))\n        done();\n    });\n\n    let _initialAmount = 100\n    let _decimalUnits = 100\n    let _fundingGoal = web3.toWei(100)\n    let _fundingPeriod = 100\n    let _price = 100\n\n    it.skip('createEnergySystemToken', function(done) {\n        this.timeout(60000)\n        api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price).then(res => {\n            assert(res);\n            done();\n        });\n    });\n\n    it.skip('EnergySystemTokenCreationEvent', (done) => {\n        this.timeout(60000)\n        socketPromise.then(data => {\n            console.log(`Client Side: Received EnergySystemTokenCreationEvent with data ${data}`)\n            done();\n        })\n    })\n\n\n    let estoken;\n\n    it.skip('getLastEnergySystemTokenAddressForUser', function(done) {\n        this.timeout(30000)\n        api.getLastEnergySystemTokenAddressForUser().then(res => {\n            assert(res.from == web3.eth.defaultAccount);\n            estoken = res.contract;\n            done();\n        });\n    });\n\n\n    it.skip('getAllEnergySystemTokenAddressesForUser', function(done) {\n        this.timeout(30000)\n        api.getAllEnergySystemTokenAddressesForUser().then(res => {\n            console.log(res);\n            assert(res[0].from == web3.eth.defaultAccount);\n            done();\n        });\n    });\n\n    it.skip('getAllEnergySystemTokenAddresses', function(done) {\n        this.timeout(30000)\n        api.getAllEnergySystemTokenAddressesForUser().then(res => {\n            console.log(res);\n            assert(Array.isArray(res))\n            done();\n        });\n    });\n\n    it.skip('getEtherBalance', function(done) {\n        this.timeout(30000)\n        api.getEtherBalance().then(res => {\n            console.log(res);\n            assert(res > web3.toWei(1));\n            done();\n        });\n    });\n\n    it.skip('getDefaultAccount', function(done) {\n        this.timeout(30000)\n        let defaultaccount = api.getDefaultAccount();\n        assert(defaultaccount == web3.eth.accounts[0]);\n        done()\n    });\n\n\n    it.skip('getEnergySystemTokenBalance', function(done) {\n        api.getEnergySystemTokenBalance(estoken).then(balance => {\n            console.log(\"balance\", balance);\n            assert(balance == 100, `${balance} == 100`)\n            done()\n        })\n    });\n\n\n    it.skip('isAuthenticated', function(done) {\n        this.timeout(10000)\n        api.isAuthenticated().then(res => {\n            console.log(res);\n            done()\n        })\n    });\n\n    it.skip('getTotalNumberOfTokens', function(done) {\n        this.timeout(10000)\n        api.getTotalNumberOfTokens(estoken).then(res => {\n            console.log(\"totalsupply\", res);\n            assert(res == _initialAmount, `${res} == ${_initialAmount}`)\n            done()\n        })\n    });\n\n\n    it.skip('setPrices', function(done) {\n        this.timeout(60000)\n        api.setPrices(estoken, web3.toWei(1), web3.toWei(1)).then(res => {\n            assert(res, `${res}`)\n            done()\n        })\n    });\n\n    it.skip('buy', function(done) {\n        this.timeout(30000)\n        api.buy(estoken, web3.toWei(1)).then(res => {\n            assert(res, `${res}`)\n            done()\n        })\n    });\n\n    it.skip('sell', function(done) {\n        this.timeout(30000)\n        api.sell(estoken, 1).then(res => {\n            assert(res, `${res}`)\n            done()\n        })\n    });\n\n\n    it('getFulfilledOrders', function(done) {\n        this.timeout(60000)\n        api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price).then(res => {\n            api.getLastEnergySystemTokenAddressForUser().then(res => {\n                estoken = res.contract;\n                api.buy(estoken, web3.toWei(1)).then(res => {\n                    api.sell(estoken, 1).then(res => {\n                        api.getFulfilledOrders(estoken).then(res => {\n                            console.log(\"getFulfilledOrders \", res);\n                            assert(res, `${res}`);\n                            done();\n                        });\n                    });\n                });\n            });\n        });\n    });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/mochaTests/apiTest.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./app/mochaTests/apiTest.js?");

/***/ })
])