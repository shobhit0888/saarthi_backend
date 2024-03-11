
// import admin from 'firebase-admin';
import { initializeApp, applicationDefault } from 'firebase/app';
import {getMessaging} from 'firebase/messaging';
import express , {json} from 'express';
import cors from 'cors';
process.env.GOOGLE_APPLICATION_CREDENTIALS;
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
    

}));
app.use(cors({
    
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    
  
}))
app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
  });
initializeApp({
    credential: applicationDefault(),
    // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
    projectId: 'myproject-1234'
});
app.post('/send-notification', (req, res) => {
    const receiverToken = req.body.receiverToken;
    const message = {
        notification: {
            title: "sjfndfs",
            body:"shfvbdsfhjdsf"
        },
        token:"f4M6M3IbTvi3QBeOmy4JRn:APA91bEnIWX0uXrmlG4X9bYKRO7iHveoQsk34NHZkmyV2YpMQIEWmR6kJOvXQTqSjJDwwXm8WZsOzYWQCh_4tWtnchhllzv5lFrrXcsRDvVn4eWbDupvJE-ow61c7PLWE3ZPrd-63Wg0"
    };
    getMessaging().send(message)
        .then((response) => {
            res.status(200).json({
                message: 'Message sent successfully',
                token: receiverToken
            });
        })
        .catch((error) => {
            res.send('Error sending message:', error);
            console.log("Error sending message:", error);
        });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

