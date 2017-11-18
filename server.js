const path = require("path");
const express = require('express');
const app = express();
const api = require('./server/api.js');

// only testing 
require("./server/test.js");

app.use('/', express.static('public'))




app.post('/setUserAccount', (req, res) => {
    api.set_User_Account(req, res);
})

app.post('/sendeBewegungsdaten', (req, res) => {
    api.sende_Bewegungsdaten(req, res);
})

app.get('/getState', (req, res) => {
    api.get_State(req, res);
})








app.listen(8000, function() {
    console.log('App listening on port 8000!');
});