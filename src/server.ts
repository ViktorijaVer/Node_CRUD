import express from 'express';
import morgan from 'morgan';
import config from './config';
import postsRouter from './routers/posts-router';

const server = express();

// Middlewares

server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());
server.use('/api/posts', postsRouter);

server.listen(config.server.port, () => {
  console.log(`server is runing on: http://${config.server.domain}:${config.server.port}`);
});
