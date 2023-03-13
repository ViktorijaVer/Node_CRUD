import { RequestHandler } from 'express';
import postsData from './posts-controller-data';

type Post = {
  id: number,
  title: string,
  content: string,
  tags: string,
  date: number,
  images: string[],
};

export const getPosts: RequestHandler<
{},
Post[],
{},
{}
> = (req, res) => {
  res.status(200).json(posts);
};

export const createPosts: RequestHandler<
{},
Post | ResponseError,
{ title: string | undefined },
{}
> = (req, res) => {
  const title = req.body?.title;
  if (title === undefined) {
    res.status(400).json({ error: 'Title is required in request body' });
    return;
  }

  const newPost = { id: 5, title };
  posts.push(newPost);
  res.status(201).json(newPost);
};
