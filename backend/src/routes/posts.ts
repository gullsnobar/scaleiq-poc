import { Router } from 'express';
import { Post } from '../models/Post.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { content, sourceUrl } = req.body;

    if (typeof content !== 'string' || content.trim() === '') {
      return res.status(400).json({ error: 'content is required' });
    }

    const post = await Post.create({ content, sourceUrl });
    return res.status(201).json(post);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: message });
  }
});

export default router;
