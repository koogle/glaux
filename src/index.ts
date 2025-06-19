// src/index.ts
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

app.listen(Number(PORT), () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});

