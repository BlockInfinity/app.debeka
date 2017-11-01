let assert = chai.assert;
let api = require('../scripts/api.js')


describe('api.js', function() {

    before((done) => {
        while (!api.isAccountLoaded()) {
            setTimeout(() => {}, 3000);
        }
        done();
    });

    let _initialAmount = 100
    let _decimalUnits = 100
    let _fundingGoal = web3.toWei(100)
    let _fundingPeriod = 100
    let _price = 100
    let estoken;

    it('createEnergySystemToken', function(done) {
        this.timeout(60000)
        api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price).then(res => {
            console.log(1, res);
            assert(res._contract, `res._contract`);
            estoken = res._contract;
            done();
        });
    });

    it.skip('getLastEnergySystemTokenAddressForUser', function(done) {
        this.timeout(30000)
        api.getLastEnergySystemTokenAddressForUser().then(res => {
            assert(res.from == web3.eth.defaultAccount);
            estoken = res.contract;
            done();
        });
    });


    it.skip('getAllEnergySystemTokenAddressesForUser', function(done) {
        this.timeout(30000)
        api.getAllEnergySystemTokenAddressesForUser().then(res => {
            console.log(res);
            assert(res[0].from == web3.eth.defaultAccount);
            done();
        });
    });

    it.skip('getAllEnergySystemTokenAddresses', function(done) {
        this.timeout(30000)
        api.getAllEnergySystemTokenAddressesForUser().then(res => {
            console.log(res);
            assert(Array.isArray(res))
            done();
        });
    });

    it.skip('getEtherBalance', function(done) {
        this.timeout(30000)
        api.getEtherBalance().then(res => {
            console.log(res);
            assert(res > web3.toWei(1));
            done();
        });
    });

    it.skip('getDefaultAccount', function(done) {
        this.timeout(30000)
        let defaultaccount = api.getDefaultAccount();
        assert(defaultaccount == web3.eth.accounts[0]);
        done()
    });


    it.skip('getEnergySystemTokenBalance', function(done) {
        api.getEnergySystemTokenBalance(estoken).then(balance => {
            console.log("balance", balance);
            assert(balance == 100, `${balance} == 100`)
            done()
        })
    });


    it.skip('isAuthenticated', function(done) {
        this.timeout(10000)
        api.isAuthenticated().then(res => {
            console.log(res);
            done()
        })
    });

    it.skip('getTotalNumberOfTokens', function(done) {
        this.timeout(10000)
        api.getTotalNumberOfTokens(estoken).then(res => {
            console.log("totalsupply", res);
            assert(res == _initialAmount, `${res} == ${_initialAmount}`)
            done()
        })
    });

    let pricesSet = false;

    it.skip('setPrices', function(done) {
        this.timeout(60000)
        api.setPrices(estoken, web3.toWei(1), web3.toWei(1)).then(res => {
            assert(res, `${res}`)
            pricesSet = true;
            done()
        })
    });


    it('buy', function(done) {
        this.timeout(50000)

        let p1;
        if (!estoken) {
            p1 = api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price)
        } else {
            p1 = Promise.resolve({ _contract: estoken })
        }

        p1.then(res1 => {
            estoken = res1._contract;

            let p2;
            if (!pricesSet) {
                console.log(1);
                p2 = api.setPrices(estoken, web3.toWei(1), web3.toWei(1))
            } else {
                console.log(2);
                p2 = Promise.resolve();
            }

            p2.then(() => {
                api.buy(estoken, web3.toWei(1)).then(res2 => {
                    assert(res2, `${res2}`)
                    done()
                })
            })

        })
    });


    it.skip('sell', function(done) {
        this.timeout(30000)
        api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price).then(res => {
            api.getLastEnergySystemTokenAddressForUser().then(res => {
                let estoken = res.contract;
                api.setPrices(estoken, web3.toWei(1), web3.toWei(1)).then(res => {
                    api.sell(estoken, 1).then(res => {
                        assert(res, `${res}`)
                        done()
                    })
                })
            })
        })
    });


    it.skip('getFulfilledOrders', function(done) {
        this.timeout(60000)
        api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price).then(res => {
            api.getLastEnergySystemTokenAddressForUser().then(res => {
                estoken = res.contract;
                api.buy(estoken, web3.toWei(1)).then(res => {
                    api.sell(estoken, 1).then(res => {
                        api.getFulfilledOrders(estoken).then(res => {
                            console.log("getFulfilledOrders ", res);
                            assert(res, `${res}`);
                            done();
                        });
                    });
                });
            });
        });
    });
});