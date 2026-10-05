import express from 'express';
import { serve } from '@novu/framework/express';
import { agendaAgent } from '../src/agent.js';

const app = express();

app.use(express.json());
app.use('/api/novu', serve({ agents: [agendaAgent] }));

export default app;