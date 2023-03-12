import { RequestHandler } from 'express';

type ResponseError = {
  error: string
};

type Post = {
  id: number,
  title: string,
};

const posts: Post[] = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
  { id: 4, title: 'Post 4' },
];

export const getPosts: RequestHandler<
undefined,
Post[],
undefined,
undefined
> = (req, res) => {
  res.status(200).json(posts);
};

export const createPosts: RequestHandler<
undefined,
Post | ResponseError,
undefined | { title: string | undefined },
undefined
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