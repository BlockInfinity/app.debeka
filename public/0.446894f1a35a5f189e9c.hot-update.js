webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("let assert = chai.assert;\nlet api = __webpack_require__(1)\n\n\ndescribe('api.js', function() {\n\n    before((done) => {\n        while (!api.isAccountLoaded()) {\n            setTimeout(() => {}, 3000);\n        }\n        done();\n    });\n\n    let _initialAmount = 100\n    let _decimalUnits = 100\n    let _fundingGoal = web3.toWei(100)\n    let _fundingPeriod = 100\n    let _price = 100\n    let estoken;\n\n    it.skip('createEnergySystemToken', function(done) {\n        this.timeout(60000)\n        api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price).then(res => {\n            console.log(1, res);\n            assert(res._contract, `res._contract`);\n            estoken = res._contract;\n            done();\n        });\n    });\n\n    it.skip('getLastEnergySystemTokenAddressForUser', function(done) {\n        this.timeout(30000)\n        api.getLastEnergySystemTokenAddressForUser().then(res => {\n            assert(res.from == web3.eth.defaultAccount);\n            estoken = res.contract;\n            done();\n        });\n    });\n\n\n    it.skip('getAllEnergySystemTokenAddressesForUser', function(done) {\n        this.timeout(30000)\n        api.getAllEnergySystemTokenAddressesForUser().then(res => {\n            console.log(res);\n            assert(res[0].from == web3.eth.defaultAccount);\n            done();\n        });\n    });\n\n    it.skip('getAllEnergySystemTokenAddresses', function(done) {\n        this.timeout(30000)\n        api.getAllEnergySystemTokenAddressesForUser().then(res => {\n            console.log(res);\n            assert(Array.isArray(res))\n            done();\n        });\n    });\n\n    it.skip('getEtherBalance', function(done) {\n        this.timeout(30000)\n        api.getEtherBalance().then(res => {\n            console.log(res);\n            assert(res > web3.toWei(1));\n            done();\n        });\n    });\n\n    it.skip('getDefaultAccount', function(done) {\n        this.timeout(30000)\n        let defaultaccount = api.getDefaultAccount();\n        assert(defaultaccount == web3.eth.accounts[0]);\n        done()\n    });\n\n\n    it.skip('getEnergySystemTokenBalance', function(done) {\n        api.getEnergySystemTokenBalance(estoken).then(balance => {\n            console.log(\"balance\", balance);\n            assert(balance == 100, `${balance} == 100`)\n            done()\n        })\n    });\n\n\n    it.skip('isAuthenticated', function(done) {\n        this.timeout(10000)\n        api.isAuthenticated().then(res => {\n            console.log(res);\n            done()\n        })\n    });\n\n    it.skip('getTotalNumberOfTokens', function(done) {\n        this.timeout(10000)\n        api.getTotalNumberOfTokens(estoken).then(res => {\n            console.log(\"totalsupply\", res);\n            assert(res == _initialAmount, `${res} == ${_initialAmount}`)\n            done()\n        })\n    });\n\n    let pricesSet = false;\n\n    it.skip('setPrices', function(done) {\n        this.timeout(50000)\n\n        let p1;\n        if (!estoken) {\n            p1 = api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price)\n        } else {\n            p1 = Promise.resolve({ _contract: estoken })\n        }\n\n        p1.then(res1 => {\n            estoken = res1._contract;\n            api.setPrices(estoken, web3.toWei(1), web3.toWei(1)).then(event => {\n                console.log(11, event)\n                assert(event._SellPrice == web3.toWei(1), `${event._SellPrice} == ${web3.toWei(1)}`)\n                pricesSet = true;\n                done()\n            })\n        })\n    });\n\n\n    it('buy', function(done) {\n        this.timeout(50000)\n\n        let p1;\n        if (!estoken) {\n            p1 = api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price)\n        } else {\n            p1 = Promise.resolve({ _contract: estoken })\n        }\n\n        p1.then(res1 => {\n            estoken = res1._contract;\n\n            let p2;\n            if (!pricesSet) {\n                console.log(1);\n                p2 = api.setPrices(estoken, web3.toWei(1), web3.toWei(1))\n            } else {\n                console.log(2);\n                p2 = Promise.resolve();\n            }\n\n            p2.then(() => {\n                api.buy(estoken, web3.toWei(1)).then(res2 => {\n                    assert(res2, `${res2}`)\n                    done()\n                })\n            })\n\n        })\n    });\n\n    it.skip('sell', function(done) {\n        this.timeout(50000)\n\n        let p1;\n        if (!estoken) {\n            p1 = api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price)\n        } else {\n            p1 = Promise.resolve({ _contract: estoken })\n        }\n\n        p1.then(res1 => {\n            estoken = res1._contract;\n\n            let p2;\n            if (!pricesSet) {\n                console.log(1);\n                p2 = api.setPrices(estoken, web3.toWei(1), web3.toWei(1))\n            } else {\n                console.log(2);\n                p2 = Promise.resolve();\n            }\n\n            p2.then(() => {\n                api.buy(estoken, web3.toWei(1)).then(res2 => {\n                    api.sell(estoken, 1).then(res2 => {\n                        assert(res2, `${res2}`)\n                        done()\n                    })\n                })\n            })\n\n        })\n    });\n\n\n\n    it.skip('getFulfilledOrders', function(done) {\n        this.timeout(60000)\n        api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price).then(res => {\n            api.getLastEnergySystemTokenAddressForUser().then(res => {\n                estoken = res.contract;\n                api.buy(estoken, web3.toWei(1)).then(res => {\n                    api.sell(estoken, 1).then(res => {\n                        api.getFulfilledOrders(estoken).then(res => {\n                            console.log(\"getFulfilledOrders \", res);\n                            assert(res, `${res}`);\n                            done();\n                        });\n                    });\n                });\n            });\n        });\n    });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/mochaTests/apiTest.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./app/mochaTests/apiTest.js?");

/***/ })
])