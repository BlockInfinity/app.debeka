let assert = chai.assert;
let api = require('../scripts/api.js')

describe('api.js', function() {


    before((done) => {
        while (!api.isAccountLoaded()) {
            setTimeout(() => {}, 3000);
        }
        done();
    });

    it('createEnergySystemToken', function(done) {
        this.timeout(30000)

        let _initialAmount = 100
        let _decimalUnits = 100
        let _fundingGoal = web3.toWei(100)
        let _fundingPeriod = 100
        let _price = 100

        api.createEnergySystemToken(_initialAmount, _decimalUnits, _fundingGoal, _fundingPeriod, _price).then(res => {
            assert(res);
            done();
        });
    });

    let estoken;

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
            console.log(res);
            assert(res[0].from == web3.eth.defaultAccount);
            done();
        });
    });

    it('getAllEnergySystemTokenAddresses', function(done) {
        this.timeout(30000)
        api.getAllEnergySystemTokenAddressesForUser().then(res => {
            console.log(res);
            assert(Array.isArray(res))
            done();
        });
    });

    it('getEtherBalance', function(done) {
        this.timeout(30000)
        api.getEtherBalance().then(res => {
            console.log(res);
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
        this.timeout(10000)
        api.getEnergySystemTokenBalance(estoken).then(balance => {
            console.log("balance", balance);
            assert(balance == 100, `${balance} == 100`)
            done()
        })
    });


    it('isAuthenticated', function(done) {
        this.timeout(10000)
        api.isAuthenticated().then(res => {
            console.log(res);
            done()
        })
    });





});