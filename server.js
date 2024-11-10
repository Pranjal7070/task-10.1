const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mg = mailgun({ apiKey: 'c1677a4114d9852203fdb9f1afede43e-f6fe91d3-c30c5e00', domain:'sandboxd3a9c71a69604ddbbc973d0596b8f012.mailgun.org' });

app.post('/subscribe', (req, res) => {
    const email = req.body.email;

    const data = {
        from: 'Pranjal <no-reply@yourdomain.com>',
        to: email,
        subject: 'Welcome to Our Newsletter!',
        text: 'Thank you for subscribing to our newsletter. We are glad to have you with us!',
    };

    mg.messages().send(data, (error, body) => {
        if (error) {
            return res.status(500).send(error.message);
        }
        res.status(200).send('Subscription successful, welcome email sent!');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});