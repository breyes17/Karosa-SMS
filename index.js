const express = require('express');
const axios = require('axios').default;
require('dotenv').config();


const app = express();

app.get('/v1/:to/:message', async (req, res) => {
    const {to, message} = req.params;
    let data;
    try {
        data = await axios.post(process.env.SEMAPHORE,{
            apikey: process.env.API_KEY,
            number: to,
            message,
        })
        .then(resp => resp).catch(err => err);
        console.log(data.data);
    } catch (error) {
        console.log(error)
    }

    res.send({
        status: 'success',
        message: `Message successfully sent!`
    })
})


app.listen(process.env.PORT, () => console.log('Alright we start'));