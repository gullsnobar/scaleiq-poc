import express, { Application } from 'express';
import postsRouter from './routes/posts.js';
import healthRouter from './routes/health.js';
import analyzeRouter from './routes/analyze.js';


const app: Application = express();
app.use(express.json());
app.use('/api/posts', postsRouter)
app.use('/api/health', healthRouter);
app.use('/api/analyze', analyzeRouter);

export default app;
