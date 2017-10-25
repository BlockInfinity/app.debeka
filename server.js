var path = require("path");
const express = require('express');
const app = express();


// app.use('/abi', express.static(path.join(__dirname, 'bc.ico.contractdeployer', 'truffle', 'build', 'contracts')));

app.use('/', express.static('public'))

app.get('/abi/EnergySystemTokenFactory.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'bc.ico.contractdeployer', 'truffle', 'build', 'contracts', 'EnergySystemTokenFactory.json'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(8000, function() {
    console.log('Example app listening on port 8000!');
});