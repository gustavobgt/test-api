import express from 'express';
import testRouter from './routes/test.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/test', testRouter);

app.listen(3333, async () => {
  console.log('API Started!');
});
