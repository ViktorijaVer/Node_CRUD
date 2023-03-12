import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express';

const { SERVER_PORT, SERVER_DOMAIN } = process.env;

if(SERVER_PORT === undefined || SERVER_DOMAIN === undefined) {
    throw new Error("Please define constants in .env file");
}

const server = express();
server.use(express.static('public'));

server.listen(5001, () => {
    console.log(`server is runing on: http://${SERVER_DOMAIN}:${SERVER_PORT}`)
})