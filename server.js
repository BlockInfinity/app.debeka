const path = require("path");
const express = require('express');
const app = express();
const api = require('./server/api.js');
module.exports = app; // for testing
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json

app.use('/', express.static('public'))

// Parameters: request.body.account
app.post('/set_User_Account', (req, res) => {
    api.set_User_Account(req, res);
})

// Parameters: request.body.data
app.post('/sende_Bewegungsdaten', (req, res) => {
    api.sende_Bewegungsdaten(req, res);
})

app.get('/get_State', (req, res) => {
    api.get_State(req, res);
})

app.listen(8000, function() {
    console.log('App listening on port 8000!');
});