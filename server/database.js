'use strict;'

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config = {
    userName: 'enbw', // update me
    password: "A's`AGBsK\"2@-%Qa\"s:!5/wA^X}sW@:`?&5{wJ", // update me
    server: 'ico-energysystems.database.windows.net', // update me
    options: {
        database: 'ico-energysystems-db',
        encrypt: true,
        rowCollectionOnRequestCompletion: true
    }
}


module.exports.connect = function() {
    return new Promise((resolve, reject) => {
        var connection = new Connection(config);
        connection.on('connect', function(err) {
            if (err) {
                reject(err);
            }
            console.log("Database connection established.")
            resolve(connection)
        });
    });
}


module.exports.insertIntoUserTable = function(_object) {
    return this.connect().then((connection) => {
    	// database interprets prefix 0x as unicode, that why 0x is deleted 
        let address = _object.address.replace(/0x/, '');;
        return new Promise((resolve, reject) => {
            var request = new Request(
                `INSERT INTO dbo.users (address) VALUES (${address})`,
                function(err, rowCount, rows) {
                    if (err) {
                        reject(err)
                    }
                    connection.close();
                    resolve({ bcadresse: `0x${address}` });
                }
            );
            connection.execSql(request);
        })
    });
}

module.exports.insertIntoESTokenTable = function(_object) {
    return this.connect().then((connection) => {
    	// database interprets prefix 0x as unicode, that why 0x is deleted 
        let address = _object.address.replace(/0x/, '');;
        return new Promise((resolve, reject) => {
            var request = new Request(
                `INSERT INTO dbo.EnergySystemTokens (address) VALUES (${address})`,
                function(err, rowCount, rows) {
                    if (err) {
                        reject(err)
                    }
                    connection.close();
                    resolve({ bcadresse: `0x${address}` });
                }
            );
            connection.execSql(request);
        })
    });
}


module.exports.getUserTable = function() {
    return this.connect().then((connection) => {
        return new Promise((resolve, reject) => {
            var request = new Request(`SELECT * from dbo.users`, function(err, rowCount, rows) {
                if (err) {
                    reject(err)
                }
                connection.close();
                resolve(rows);
            });
            connection.execSql(request);
        })
    });
}

module.exports.getEnergySystemTokenTable = function() {
    return this.connect().then((connection) => {
        return new Promise((resolve, reject) => {
            var request = new Request(`SELECT * from dbo.EnergySystemTokens`, function(err, rowCount, rows) {
                if (err) {
                    reject(err)
                }
                connection.close();
                resolve(rows);
            });
            connection.execSql(request);
        })
    });
}


// merges properties of both objects, so that i can access the functions in browser via window. 
Object.assign(this, module.exports)