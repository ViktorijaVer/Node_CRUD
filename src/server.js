const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).send('HomePage wanna be')
})

server.get('/about', (req, res) => {
    res.status(200).send('AboutPage wanna be')
})

server.listen(5001, () => {
    console.log('server is runing on: http://localhost:5001')
})