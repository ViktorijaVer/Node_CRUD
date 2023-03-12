import express from 'express';
import { createPosts, getPosts } from '../controllers/posts-controller';

const postsRouter = express.Router();

postsRouter.get('.', getPosts);
postsRouter.post('.', createPosts);

export default postsRouter;
