import { serve } from '@novu/framework/express';
import { agendaAgent } from '../src/agent.js';

const handler = serve({
  agents: [agendaAgent],
});

export default handler;