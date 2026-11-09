import { Router } from 'express';
import { Post } from '../models/Post.js';
import { analyzeRule, type Rule } from '../services/analyzeRule.js';

type AnalyzeBody = {
  content?: string;
  sourceUrl?: string;
  rule?: Rule;
};

const router = Router();

router.post('/', async (req, res) => {
  const { content, sourceUrl, rule } = (req.body ?? {}) as AnalyzeBody;

  if (typeof content !== 'string' || content.trim() === '') {
    return res.status(400).json({ error: 'content is required' });
  }

  try {
    const analysis = analyzeRule(content, rule);
    const post = await Post.create({ content, sourceUrl, analysis });

    return res.status(200).json({ postId: post._id, analysis });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: message });
  }
});

export default router;
