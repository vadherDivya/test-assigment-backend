const firebaseAdmin = require('firebase-admin');
const serviceAccountCred = require('../helper/FirebaseNotification/serviceAccountKey.json');

const serviceAccount = {
    projectId: serviceAccountCred.project_id,
    clientEmail: serviceAccountCred.client_email,
    privateKey: serviceAccountCred.private_key,
};

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
});

module.exports = {
    async sendNotification(data) {
        const { notificationMessage, deviceToken } = data;
        const message = {
            notification: notificationMessage,
            token: deviceToken,
            apns: {
                payload: {
                    aps: {
                    contentAvailable: true,
                    sound: "default"
                    },
                },
                headers: {
                    "apns-priority": "10", // Must be 5 when contentAvailable is set to true.
                },
            },
        };

        try {
            await firebaseAdmin.messaging().send(message);
            return { success: true };
        } catch (error) {
            return { success: false, error };
        }
    },
};