'use strict';

let express = require('express');
const NotificationController = require("../../controller/Notification/NotificationController");

let NotificationRoute = express.Router();

NotificationRoute.post('/').use('/sendNotification', NotificationController.sendNotification);

module.exports = NotificationRoute;
