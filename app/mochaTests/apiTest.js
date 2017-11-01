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
            
            assert(res._contract, `res._contract`);
            estoken = res._contract;
            done();
        });
    });

    it('getLastEnergySystemTokenAddressForUser', function(done) {
        this.timeout(30000)
        api.getLastEnergySystemTokenAddressForUser().then(res => {
            assert(res.from == web3.eth.defaultAccount);
            estoken = res.contract;
            done();
        });
    });


    it('getAllEnergySystemTokenAddressesForUser', function(done) {
        this.timeout(30000)
        api.getAllEnergySystemTokenAddressesForUser().then(res => {
            
            assert(res[0].from == web3.eth.defaultAccount);
            done();
        });
    });

    it('getAllEnergySystemTokenAddresses', function(done) {
        this.timeout(30000)
        api.getAllEnergySystemTokenAddressesForUser().then(res => {
            
            assert(Array.isArray(res))
            done();
        });
    });

    it('getEtherBalance', function(done) {
        this.timeout(30000)
        api.getEtherBalance().then(res => {
            
            assert(res > web3.toWei(1));
            done();
        });
    });

    it('getDefaultAccount', function(done) {
        this.timeout(30000)
        let defaultaccount = api.getDefaultAccount();
        assert(defaultaccount == web3.eth.accounts[0]);
        done()
    });


    it('getEnergySystemTokenBalance', function(done) {
        this.timeout(30000)
        api.getEnergySystemTokenBalance(estoken).then(balance => {
            assert(balance >= 70, `${balance} == 100`)
            done()
        })
    });


    it('isAuthenticated', function(done) {
        this.timeout(10000)
        api.isAuthenticated().then(res => {
            
            done()
        })
    });

    it('getTotalNumberOfTokens', function(done) {
        this.timeout(10000)
        api.getTotalNumberOfTokens(estoken).then(res => {
            assert(res == _initialAmount, `${res} == ${_initialAmount}`)
            done()
        })
    });

    let pricesSet = false;

    it('setPrices', function(done) {
        this.timeout(50000)

        let p1;
        if (!estoken) {
            p1 = api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price)
        } else {
            p1 = Promise.resolve({ _contract: estoken })
        }

        p1.then(res1 => {
            estoken = res1._contract;
            api.setPrices(estoken, web3.toWei(1), web3.toWei(1)).then(event => {
                assert(event._SellPrice == web3.toWei(1), `${event._SellPrice} == ${web3.toWei(1)}`)
                pricesSet = true;
                done()
            })
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
                p2 = api.setPrices(estoken, web3.toWei(1), web3.toWei(1))
            } else {
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

    it('sell', function(done) {
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
                p2 = api.setPrices(estoken, web3.toWei(1), web3.toWei(1))
            } else {
                p2 = Promise.resolve();
            }

            p2.then(() => {
                api.buy(estoken, web3.toWei(1)).then(res2 => {
                    api.sell(estoken, 1).then(res2 => {
                        assert(res2, `${res2}`)
                        done()
                    })
                })
            })

        })
    });


    it('getFulfilledOrders', function(done) {
        this.timeout(60000)
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
                p2 = api.setPrices(estoken, web3.toWei(1), web3.toWei(1))
            } else {
                p2 = Promise.resolve();
            }

            p2.then(() => {
                api.buy(estoken, web3.toWei(1)).then(res => {
                    api.sell(estoken, 1).then(res => {
                        api.getFulfilledOrders(estoken).then(res => {
                            assert(res, `${res}`);
                            done();
                        });

                    });
                });
            });
        });
    });



    it('getRaisedEther', function(done) {
        this.timeout(60000)
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
                p2 = api.setPrices(estoken, web3.toWei(1), web3.toWei(1))
            } else {
                p2 = Promise.resolve();
            }

            p2.then(() => {
                api.buy(estoken, web3.toWei(1)).then(res => {
                    api.getRaisedEther(estoken).then(res => {
                        assert(res >= web3.toWei(1), `${res} == ${web3.toWei(1)}`);
                        done();
                    });
                });
            });
        });
    });

    it('getPrices', function(done) {
        this.timeout(30000)
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
                p2 = api.setPrices(estoken, web3.toWei(1), web3.toWei(1))
            } else {
                p2 = Promise.resolve();
            }

            p2.then(() => {
                api.getPrices(estoken).then(res => {
                    assert(res.buyPrice == web3.toWei(1), `${res.buyPrice} == ${web3.toWei(1)}`);
                    assert(res.sellPrice == web3.toWei(1), `${res.sellPrice} == ${web3.toWei(1)}`);
                    done();
                });
            });
        });
    });


    it('getTimeLeftForFundingPhase', function(done) {
        this.timeout(30000)
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
                p2 = api.setPrices(estoken, web3.toWei(1), web3.toWei(1))
            } else {
                p2 = Promise.resolve();
            }

            p2.then(() => {
                api.getTimeLeftForFundingPhase(estoken).then(res => {
                    assert(res.timeLeft, `${res.timeLeft}`);
                    done();
                });
            });
        });
    });


    it('disburse', function(done) {
        this.timeout(30000)
        let p1;
        if (!estoken) {
            p1 = api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price)
        } else {
            p1 = Promise.resolve({ _contract: estoken })
        }

        p1.then(res1 => {
            estoken = res1._contract;
            api.disburse(estoken, web3.toWei(5)).then(res => {
                assert(res._value == web3.toWei(5), `${res._value}  == ${web3.toWei(5)}`);
                done();
            });
        });
    });


    it('withdraw', function(done) {
        this.timeout(50000)
        let p1;
        if (!estoken) {
            p1 = api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price)
        } else {
            p1 = Promise.resolve({ _contract: estoken })
        }

        let price = web3.toWei(1);
        let dividends = web3.toWei(5);
        let investment = web3.toWei(1);

        p1.then(res1 => {
            estoken = res1._contract;

            let p2;
            if (!pricesSet) {
                p2 = api.setPrices(estoken, price, price)
            } else {
                p2 = Promise.resolve();
            }

            p2.then(() => {
                api.buy(estoken, investment).then(res => {
                    api.disburse(estoken, dividends).then(res => {
                        api.withdraw(estoken).then(res => {
                            let shareOfDividends = ((investment / price) / _initialAmount) * dividends;
                            assert(res._value >= shareOfDividends, `${res._value} == ${shareOfDividends}`);
                            done();
                        });
                    });
                });
            });
        })
    });


    it('transferEnergySystemShares', function(done) {
        this.timeout(120000)
        let p1;
        if (!estoken) {
            p1 = api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price)
        } else {
            p1 = Promise.resolve({ _contract: estoken })
        }

        let price = web3.toWei(1);
        let dividends = web3.toWei(5);
        let investment = web3.toWei(1);

        p1.then(res1 => {
            estoken = res1._contract;

            let p2;
            if (!pricesSet) {
                p2 = api.setPrices(estoken, price, price)
            } else {
                p2 = Promise.resolve();
            }

            p2.then(() => {
                api.buy(estoken, investment).then(res => {
                    api.transferEnergySystemShares(estoken, web3.eth.defaultAccount, investment / price).then(res => {
                        assert(res._from == web3.eth.defaultAccount)
                        assert(res._to == web3.eth.defaultAccount)
                        done();
                    });
                });
            });
        })
    });

    it('transferEther', function(done) {
        this.timeout(30000)
        api.transferEther(web3.eth.defaultAccount, web3.toWei(20)).then(() => {
            done();
        });
    });

})