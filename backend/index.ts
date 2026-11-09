import dotenv from 'dotenv';
import app from './src/app.js';
import { connectDB } from './src/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Startup error:', err);
    process.exit(1);
  }
}

void start();
