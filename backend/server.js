import express from 'express';
import cors from 'cors';
import { getSurvivorData } from "./survivorService.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/survivor', async (req, res) => {
  try {
    const data = await getSurvivorData();
    res.json(data);
  } catch (error) {
    console.error('Erro ao gerar sobrevivente:', error.message);
    res.status(500).json({ error: 'Erro ao gerar sobrevivente' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
