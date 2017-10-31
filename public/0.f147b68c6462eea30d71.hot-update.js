webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("let assert = chai.assert;\nlet api = __webpack_require__(1)\n\ndescribe('api.js', function() {\n\n\n    before((done) => {\n        while (!api.isAccountLoaded()) {\n            setTimeout(() => {}, 3000);\n        }\n        done();\n    });\n\n    it('createEnergySystemToken', function(done) {\n        this.timeout(30000)\n\n        let _initialAmount = 100\n        let _decimalUnits = 100\n        let _fundingGoal = web3.toWei(100)\n        let _fundingPeriod = 100\n        let _price = 100\n\n        api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price).then(res => {\n            assert(res);\n            done();\n        });\n    });\n\n    let estoken;\n\n    it('getLastEnergySystemTokenAddressForUser', function(done) {\n        this.timeout(30000)\n        api.getLastEnergySystemTokenAddressForUser().then(res => {\n            assert(res.from == web3.eth.defaultAccount);\n            estoken = res.contract;\n            done();\n        });\n    });\n\n\n    it('getAllEnergySystemTokenAddressesForUser', function(done) {\n        this.timeout(30000)\n        api.getAllEnergySystemTokenAddressesForUser().then(res => {\n            console.log(res);\n            assert(res[0].from == web3.eth.defaultAccount);\n            done();\n        });\n    });\n\n    it('getAllEnergySystemTokenAddresses', function(done) {\n        this.timeout(30000)\n        api.getAllEnergySystemTokenAddressesForUser().then(res => {\n            console.log(res);\n            assert(Array.isArray(res))\n            done();\n        });\n    });\n\n    it('getEtherBalance', function(done) {\n        this.timeout(30000)\n        api.getEtherBalance().then(res => {\n            console.log(res);\n            assert(res > web3.toWei(1));\n            done();\n        });\n    });\n\n    it('getDefaultAccount', function(done) {\n        this.timeout(30000)\n        let defaultaccount = api.getDefaultAccount();\n        assert(defaultaccount == web3.eth.accounts[0]);\n        done()\n    });\n\n\n    it('getEnergySystemTokenBalance', function(done) {\n        this.timeout(10000)\n        api.getEnergySystemTokenBalance(estoken).then(balance => {\n            console.log(\"balance\", balance);\n            assert(balance == 100, `${balance} == 100`)\n            done()\n        })\n    });\n\n\n    it('getEnergySystemTokenBalance', function(done) {\n        this.timeout(10000)\n        api.isAuthenticated().then(signature => {\n            console.log(\"signature\", signature);\n            done()\n        })\n    });\n\n\n\n\n\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/mochaTests/apiTest.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./app/mochaTests/apiTest.js?");

/***/ })
])