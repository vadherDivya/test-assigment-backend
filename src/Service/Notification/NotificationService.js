const sendNotification = require("../../services/notification.service");

module.exports = {
    async sendNotificationToUsers(body) {
        try {
            const { name } = body;
            let allUser = await UserActivation.find();
            await Promise.all(allUser.map(async(userData) => {
                const message = {
                    notificationMessage: { title: "Notification", body: `Notification from ${name}` },
                    deviceToken: userData.deviceToken,
                };
    
                await sendNotification.sendNotification(message);
            }));
    
            return { success: true, message: "Notifications sent successfully" };
        } catch (error) {
            throw error;
        }
    },
};