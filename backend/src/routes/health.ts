import { Router } from 'express';
import mongoose from 'mongoose';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ ok: true, db: mongoose.connection.readyState === 1 });
});

export default router;
