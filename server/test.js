let api = require("./api.js");

api.connect();
api.set_User_Account();
api.sende_Bewegungsdaten({ distance: 10 });