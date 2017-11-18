'use strict';

const chai = require('chai');
var should = require('should');
var request = require('supertest');
var server = require('../server');
const assert = require('assert');
const co = require('co');
const Web3 = require('web3');
let web3;

connect();

function connect(_node_Url = process.env.NODE_URL) {
    web3 = new Web3(new Web3.providers.HttpProvider(process.env.NODE_URL));
    if (web3 && !web3.isConnected()) {
        throw new Error("web3 is not connected. Please execute connect function if not already done. ")
    } else {
        web3.eth.defaultAccount = web3.eth.accounts[1];
        console.log(`Connected to Node at ${process.env.NODE_URL}`)
    }
}

describe('api.test.js', function() {

    it('sendeBewegungsdaten', function(done) {
        this.timeout(25000)
        request(server)
            .post('/sendeBewegungsdaten')
            .send({ distance: 105 })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) throw new Error(err);
                assert(res.body.state.percentage_In_Current_Period == 1, `${res.body.state.percentage_In_Current_Period} == 1`)
                assert(res.body.state.coins == 1, `res.body.state.coins == 1 : ${res.body.state.coins == 1}`)
                done();
            });
    });


    it('zahleAus', function(done) {
        this.timeout(25000)
        request(server)
            .post('/zahleAus')
            .send({ value: 1 })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) throw new Error(err);
                assert(res.body.txhash.startsWith("0x"), `${res.body.txhash} startsWith("0x")`)
                done();
            });
    });


    it('state', function(done) {
        this.timeout(25000)
        request(server)
            .get('/state')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) throw new Error(err);

                assert(res.body.state.coins == 0, `res.body.state.coins == 0: ${res.body.state.coins == 0}`)
                done();
            });
    });
});