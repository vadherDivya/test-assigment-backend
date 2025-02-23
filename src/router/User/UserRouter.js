'use strict';

let express = require('express');
const UserController = require("../../controller/User/UserController");

let UserRoute = express.Router();

UserRoute.post('/').use('/createAccount', UserController.createAccount);
UserRoute.get('/').use('/getPage/:name', UserController.pageName);

module.exports = UserRoute;
