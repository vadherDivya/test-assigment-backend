const NotificationService = require("../../Service/Notification/NotificationService")
module.exports = {
    async sendNotification(req, res) {
        try {
            const body = req.body;
            const notification = await NotificationService.sendNotificationToUsers(body);
            return res.status(200).json({
                message: 'Notification send successfully!',
                data: notification,
            });
        } catch (error) {
            console.log('error', error);
            return res.status(error.statusCode | 400).json(error);
        }
    },
}