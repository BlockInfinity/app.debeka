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
        api.createEnergySystemToken().then(res => {
            assert(res);
            done();
        });
    });

    it('getLastEnergySystemTokenAddressForUser', function(done) {
        this.timeout(30000)
        api.getLastEnergySystemTokenAddressForUser().then(res => {
            assert(res.from == web3.eth.defaultAccount);
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




});