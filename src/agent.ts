import { agent, Card, CardText, Button, Actions } from '@novu/framework';

export const agendaAgent = agent('agenda-criativa-agent', {
  onMessage: async (message, ctx): Promise<void> => {
    await ctx.reply(
      Card({
        title: '📅 Agenda Criativa',
        children: [
          CardText('Olá! Sou o assistente da sua agenda. Como posso ajudar?'),
          Actions([
            Button({ id: 'agendar', label: '📅 Fazer Agendamento' }),
            Button({ id: 'consultar', label: '🔍 Meus Agendamentos' }),
          ]),
        ],
      })
    );
    return;
  },

  onAction: async (action, ctx): Promise<void> => {
    if (action.id === 'agendar') {
      await ctx.reply(
        Card({
          title: 'Escolha o serviço',
          children: [
            CardText('Selecione qual serviço você deseja agendar:'),
            Actions([
              Button({ id: 'servico_corte', label: '✂️ Corte (R$ 40)' }),
              Button({ id: 'servico_barba', label: '🪒 Barba (R$ 25)' }),
              Button({ id: 'voltar_menu', label: '⬅️ Voltar' }),
            ]),
          ],
        })
      );
      return;
    }

    if (action.id === 'consultar') {
      await ctx.reply('Você não tem agendamentos futuros. Que tal criar um novo?');
      return;
    }

    if (action.id === 'servico_corte' || action.id === 'servico_barba') {
      const servico = action.id === 'servico_corte' ? 'Corte' : 'Barba';
      await ctx.reply(
        `Você escolheu *${servico}*. Informe a data e horário desejados (ex: "25/12 às 14:00").`
      );
      return;
    }

    if (action.id === 'voltar_menu') {
      await ctx.reply(
        Card({
          title: '📅 Agenda Criativa',
          children: [
            CardText('Como posso ajudar?'),
            Actions([
              Button({ id: 'agendar', label: '📅 Fazer Agendamento' }),
              Button({ id: 'consultar', label: '🔍 Meus Agendamentos' }),
            ]),
          ],
        })
      );
      return;
    }
  },
});