const chai = require('chai');
const assert = chai.assert;
const co = require('co');
const db = require('../database.js');

describe('database.js', function() {

    before(() => {
        return co(function*() {
            let connection = yield db.connect();
            assert(connection);
        })
    });

    it('insertIntoUserTable', function() {
        this.timeout(10000);
        return co(function*() {
            let res = yield db.insertIntoUserTable({ address: "0x123451234" });
            assert(res.bcadresse == "0x123451234", `${res.bcadresse} == "0x123451234" `)
        })
    });

    it('getUserTable', function() {
        this.timeout(10000);
        return co(function*() {
            let res = yield db.getUserTable();
            assert(res.length > 0)
        })
    });


    it('insertIntoESTokenTable', function() {
        this.timeout(10000);
        return co(function*() {
            let res = yield db.insertIntoESTokenTable({ address: "0x123451234" });
            assert(res.bcadresse == "0x123451234", `${res.bcadresse} == "0x123451234" `)
        })
    });

    it('getEnergySystemTokenTable', function() {
        this.timeout(10000);
        return co(function*() {
            let res = yield db.getEnergySystemTokenTable();
            assert(res.length > 0)
        })
    });

})