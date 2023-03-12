import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import morgan from 'morgan';

const { SERVER_PORT, SERVER_DOMAIN } = process.env;

if (SERVER_PORT === undefined || SERVER_DOMAIN === undefined) {
    throw new Error("Please define constants in .env file");
}

const server = express();

server.use(morgan('tiny'));
server.use(express.static('public'));

server.listen(SERVER_PORT, () => {
    console.log(`server is runing on: http://${SERVER_DOMAIN}:${SERVER_PORT}`)
})