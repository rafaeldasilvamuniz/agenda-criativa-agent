import 'dotenv/config';
import express from 'express';
import { serve } from '@novu/framework/express';
// A correção está aqui: adicione a extensão .js
import { agendaAgent } from './agent.js'; 

const app = express();

// Rota do Novu Bridge
app.use(
  '/api/novu',
  serve({
    agents: [agendaAgent],
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Bridge Endpoint rodando em http://localhost:${PORT}/api/novu`);
});