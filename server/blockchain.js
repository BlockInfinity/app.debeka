"use strict";
const fs = require('fs');
const path = require('path');
const Web3 = require('web3');
const solc = require('solc');


const pathContractData = path.join('./', 'server', 'contractData',
    'EnergySystemTokenFactoryAndAddress.json');
const pathEnergySystemTokenFactory = path.join('./', 'bc.ico.contractdeployer', 'truffle',
    'contracts', 'EnergySystemTokenFactory.sol');
const pathEnergySystemToken = path.join('./', 'bc.ico.contractdeployer', 'truffle',
    'contracts', 'EnergySystemToken.sol');
const pathHumanStandardToken = path.join('./', 'bc.ico.contractdeployer', 'truffle',
    'contracts', 'HumanStandardToken.sol');
const pathStandardToken = path.join('./', 'bc.ico.contractdeployer', 'truffle',
    'contracts', 'StandardToken.sol');
const pathToken = path.join('./', 'bc.ico.contractdeployer', 'truffle',
    'contracts', 'Token.sol');


if (process.env.PRODUCTION == "PRODUCTION") {
    if (!process.env.EnergySystemTokenFactoryaddress) {
        throw new Error("process.env.EnergySystemTokenFactoryaddress is not defined.")
    }
}

if (!process.env.nodeUrl) {
    throw new Error("process.env.nodeUrl not set")
}


module.exports = class Blockchain {

    constructor(_io) {
        this.io = _io;
        this.connect();
    }

    // helper functions  
    connect(bcUrl = 'http://localhost:8545') {
         this.web3 = new Web3(new Web3.providers.HttpProvider(process.env.nodeUrl));
        if (this.web3 && !this.web3.isConnected()) {
            throw new Error("web3 is not connected. Please execute connect function if not already done. ")
        } else {
            this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
            console.log(`Connected to Node at ${process.env.nodeUrl}`)
        }
        return this.web3;
    }

    listenToEvent(_contract, _eventName, _namesOfReturnValues) {
        _contract[_eventName]((error, event) => {
            console.log("in listenToEvent ", event);
            socket.emit(`Emit ${_eventName} with ${_namesOfReturnValues} = ${_namesOfReturnValues}`);
        })
    }

    getESTokenCreationEvents(filter) {
        return new Promise((resolve, reject) => {
            fs.readFile(pathContractData, (err, data) => {
                // file exists 
                if (!err) {
                    console.log("EnergySystemTokenFactoryAndAddress.json exists");
                    data = JSON.parse(data);
                    let abi = data.abi;
                    let address = data.address;
                    // if contract is deployed then return 
                    if (this.web3.eth.getCode(address).length > 4) {
                        console.log("EnergySystemTokenFactory is deployed.")
                        console.log(this.web3.eth.getCode(address))
                        let contract = this.web3.eth.contract(abi);
                        let instance = contract.at(address);
                        // todo: auf richtiger blockchain muss der Parameter fromBlock angepasst werden, ansonsten dauert die Suche zu lange. 
                        instance.EnergySystemTokenCreationEvent(filter, { fromBlock: 0, toBlock: 'latest' }).get((error, events) => {
                            if (error) {
                                console.log('Error in EnergySystemTokenCreationEvent event handler: ' + error);
                            } else {
                                console.log('EnergySystemTokenCreationEvent: ' + JSON.stringify(events));
                                resolve(events);
                            }
                        });
                    }
                }
            });
        })
    }

    // externally used functions 
    getEnergySystemTokenFactory(req, response) {
        try {
            fs.readFile(pathContractData, (err, data) => {
                // file exists 
                if (!err) {
                    data = JSON.parse(data);
                    let abi = data.abi;
                    let address = data.address;
                    // if contract is deployed then return 
                    if (this.web3.eth.getCode(address).length > 4) {
                        let contract = this.web3.eth.contract(abi);
                        let instance = contract.at(address);

                        // debug purposes 
                        instance.EnergySystemTokenCreationEvent((error, event) => {
                            console.log(event);
                        })

                        response.json({ abi, address });
                        return;
                        // if contract not deployed and env is production, then return with error 
                    } else if (process.env.PRODUCTION == "PRODUCTION") {
                        let msg = `EnergySystemTokenFactory contract with address ${address} not deployed. Please contact server provider.`;
                        console.error(msg);
                        response.status(500).send(msg);
                        return;
                    }
                }
                // file does not exist || contract is not deployed || or sth. else
                fs.readFile(pathToken, 'utf8', (err, dataToken) => {
                    if (err) throw err;
                    fs.readFile(pathStandardToken, 'utf8', (err, dataStandardToken) => {
                        if (err) throw err;
                        fs.readFile(pathHumanStandardToken, 'utf8', (err, dataHumanStandardToken) => {
                            if (err) throw err;
                            fs.readFile(pathEnergySystemToken, 'utf8', (err, dataEstoken) => {
                                if (err) throw err;
                                fs.readFile(pathEnergySystemTokenFactory, 'utf8', (err, dataFactory) => {
                                    if (err) throw err;
                                    // compile and extract data for contract creation
                                    let input = {
                                        'EnergySystemTokenFactory.sol': dataFactory,
                                        'EnergySystemToken.sol': dataEstoken,
                                        'HumanStandardToken.sol': dataHumanStandardToken,
                                        'StandardToken.sol': dataStandardToken,
                                        'Token.sol': dataToken
                                    }
                                    let output = solc.compile({ sources: input }, 1);
                                    let bytecode = output.contracts['EnergySystemTokenFactory.sol:EnergySystemTokenFactory'].bytecode;
                                    let abi = JSON.parse(output.contracts['EnergySystemTokenFactory.sol:EnergySystemTokenFactory'].interface);
                                    let contract = this.web3.eth.contract(abi);
                                    let gasEstimate = this.web3.eth.estimateGas({ data: bytecode });
                                    // create contract
                                    let contractInstance = contract.new({
                                        data: '0x' + bytecode,
                                        from: this.web3.eth.defaultAccount,
                                        gas: gasEstimate
                                    }, (err, instance) => {
                                        if (err) {
                                            console.log(err);
                                            return;
                                        }
                                        if (instance.address) {
                                            console.log('Contract address: ' + instance.address);

                                            // debug purposes 
                                            instance.EnergySystemTokenCreationEvent((error, event) => {
                                                console.log("EnergySystemTokenCreationEvent received");
                                            })

                                            let address = instance.address
                                            fs.writeFile('./server/contractData/EnergySystemTokenFactoryAndAddress.json', JSON.stringify({ abi, address }), (err) => {
                                                if (err) throw err;
                                                console.log('The file has been saved!');
                                                response.json({ abi, address });
                                            });
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            })
        } catch (err) {
            response.status(500).send(`Error when trying to retrieve EnergySystemTokenFactory: ${err}`)
        }
    }

    getTransactionReceipt(request, response) {
        let txhash = request.query.transactionHash;
        console.log(request.query);
        // response.json(request.query);
        let receipt = this.web3.eth.getTransactionReceipt(txhash);
        response.json({ transactionReceipt: receipt })
    }


    getLastEnergySystemTokenAddressForUser(request, response) {

        let userAddress;
        if (request.query.userAddress) {
            userAddress = request.query.userAddress;
        } else {
            response.send("UserAddress as query parameter is missing.");
            return;
        }

        let filter = { _from: userAddress }

        this.getESTokenCreationEvents(filter).then((events) => {
            // returns {txhash, from, contract, blocknumber}
            let transactionHash = events[0].transactionHash;
            let blockNumber = events[0].blockNumber;
            let _contract = events[0].args._contract;
            let _from = events[0].args._from;

            response.json({ from: _from, contract: _contract, blockNumber, transactionHash });
        })
    }

    getAllEnergySystemTokenAddressesForUser(request, response) {

        let userAddress;
        if (request.query.userAddress) {
            userAddress = request.query.userAddress;
        } else {
            response.send("UserAddress as query parameter is missing.");
            return;
        }

        let filter = { _from: userAddress }

        this.getESTokenCreationEvents(filter).then((events) => {
            let output = [];
            for (let i in events) {
                output.push({
                    transactionHash: events[i].transactionHash,
                    blockNumber: events[i].blockNumber,
                    contract: events[i].args._contract,
                    from: events[i].args._from,
                })
            }
            response.json(output);
        })
    }

    getAllEnergySystemTokenAddresses(request, response) {
        this.getESTokenCreationEvents({}).then((events) => {
            let output = [];
            for (let i in events) {
                output.push({
                    transactionHash: events[i].transactionHash,
                    blockNumber: events[i].blockNumber,
                    contract: events[i].args._contract,
                    from: events[i].args._from,
                })
            }
            console.log("output from getAllEnergySystemTokenAddresses: ", output)
            response.json(output);
        })
    }

    getEnergySystemTokenAbi(request, response) {
        try {
            // file does not exist || contract is not deployed || or sth. else
            fs.readFile(pathToken, 'utf8', (err, dataToken) => {
                if (err) throw err;
                fs.readFile(pathStandardToken, 'utf8', (err, dataStandardToken) => {
                    if (err) throw err;
                    fs.readFile(pathHumanStandardToken, 'utf8', (err, dataHumanStandardToken) => {
                        if (err) throw err;
                        fs.readFile(pathEnergySystemToken, 'utf8', (err, dataEstoken) => {
                            if (err) throw err;

                            console.log("############ getEnergySystemTokenAbi")

                            // compile and extract data for contract creation
                            let input = {
                                'EnergySystemToken.sol': dataEstoken,
                                'HumanStandardToken.sol': dataHumanStandardToken,
                                'StandardToken.sol': dataStandardToken,
                                'Token.sol': dataToken
                            }
                            let output = solc.compile({ sources: input }, 1);
                            let abi = JSON.parse(output.contracts['EnergySystemToken.sol:EnergySystemToken'].interface);
                            console.log("############ abi", abi)
                            response.json({ abi })
                        });
                    });
                });
            });
        } catch (err) {
            response.status(500).send(`Error when trying to retrieve EnergySystemTokenFactory: ${err}`)
        }
    }

}