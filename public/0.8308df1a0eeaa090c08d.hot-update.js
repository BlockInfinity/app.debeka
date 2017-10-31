webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("let assert = chai.assert;\nlet api = __webpack_require__(1)\n\ndescribe('api.js', function() {\n\n\n    // before((done) => {\n    //     while (!api.isAccountLoaded()) {\n    //         setTimeout(() => {}, 3000);\n    //     }\n\n    // });\n\n    it('createEnergySystemToken', function(done) {\n        this.timeout(30000)\n        api.createEnergySystemToken().then(res => {\n            assert(res);\n            done();\n        });\n    });\n\n    it('getLastEnergySystemTokenAddressForUser', function(done) {\n        this.timeout(30000)\n        api.getLastEnergySystemTokenAddressForUser().then(res => {\n            assert(res.from == web3.eth.defaultAccount);\n            done();\n        });\n    });\n\n     it('getAllEnergySystemTokenAddressesForUser', function(done) {\n        this.timeout(30000)\n        api.getAllEnergySystemTokenAddressesForUser().then(res => {\n        \tconsole.log(res);\n            assert(res[0].from == web3.eth.defaultAccount);\n            done();\n        });\n    });\n\n\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/mochaTests/apiTest.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./app/mochaTests/apiTest.js?");

/***/ })
])