const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const accountSid = process.env.ACCOUNT_SID; 
const authToken = process.env.AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken); 
 

app.get('/', async (req, res) => {
    const result = await client.messages 
    .create({ 
       body: 'Test message. Hello World',  
       messagingServiceSid: 'MGab190ee1f752c173cfb82b2bb726b832',      
       to: '+639451264251' 
     }) 
    .then(message => message.sid)
    .done();

    res.send({
        status: 'Success',
        message: `Message successfully sent to! ${result}`
    })
})

app.listen(process.env.PORT, () => console.log('Alright we start'));