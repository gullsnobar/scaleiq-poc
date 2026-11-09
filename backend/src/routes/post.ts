import { Router } from 'express';
import { Post } from '../models/Post.js';

const router = Router();

router.post('/', async (req, res) => {
  const { content, sourceUrl } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'content is required' });
  }
  const post = await Post.create({ content, sourceUrl });
  res.status(201).json(post);
});

export default router;