import express, { Application } from 'express';
import postsRouter from './routes/post.js';
import healthRouter from './routes/health.js';


const app: Application = express();
app.use(express.json());
app.use('/api/posts', postsRouter)
app.use('/api/health', healthRouter);

export default app;
