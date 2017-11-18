'use strict';

const chai = require('chai');
var should = require('should');
var request = require('supertest');
var server = require('../server');
const assert = require('assert');
const co = require('co');
const Web3 = require('web3');

connect();

function connect(_node_Url = process.env.NODE_URL, _pw = process.env.PW) {
    web3 = new Web3(new Web3.providers.HttpProvider(process.env.NODE_URL));
    if (web3 && !web3.isConnected()) {
        throw new Error("web3 is not connected. Please execute connect function if not already done. ")
    } else {
        web3.eth.defaultAccount = web3.eth.accounts[1];
        web3.personal.unlockAccount(web3.eth.defaultAccount, _pw, 0);
        console.log(`Connected to Node at ${process.env.NODE_URL}`)
    }
}

describe('api.test.js', function() {

    it('set_User_Account', function(done) {
        this.timeout(25000)
        request(server)
            .post('/setUserAccount')
            .send({ account: web3.eth.accounts[2] })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) throw new Error(err);
                assert(res.body.succeeded == true, `${res.body.succeded} == true`)
                done();
            });
    });

    it('sende_Bewegungsdaten', function(done) {
        this.timeout(25000)
        request(server)
            .post('/sendeBewegungsdaten')
            .send({ data: { distance: 5 } })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) throw new Error(err);
                assert(res.body.state.distance_In_Current_Period == 5, `${res.body.state.distance_In_Current_Period} == 5`)
                done();
            });
    });

    it('get_State', function(done) {
        this.timeout(25000)
        request(server)
            .get('/state')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) throw new Error(err);
                console.log(res.body.state)
                assert(res.body.state.distance_In_Current_Period == 5, `${res.body.state.distance_In_Current_Period} == 5`)
                done();
            });
    });
});