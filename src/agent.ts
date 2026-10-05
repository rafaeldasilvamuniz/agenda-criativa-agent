import { agent, Card, CardText, Button, Actions } from '@novu/framework';

export const agendaAgent = agent('agenda-criativa-agent', {
  onMessage: async (message, ctx) => {
    // Menu principal
    return ctx.reply(
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
  },

  onAction: async (action, ctx) => {
    if (action.id === 'agendar') {
      return ctx.reply(
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
    }

    if (action.id === 'consultar') {
      return ctx.reply('Você não tem agendamentos futuros. Que tal criar um novo?');
    }

    if (action.id === 'servico_corte' || action.id === 'servico_barba') {
      const servico = action.id === 'servico_corte' ? 'Corte' : 'Barba';
      return ctx.reply(
        `Você escolheu *${servico}*. Informe a data e horário desejados (ex: "25/12 às 14:00").`
      );
    }

    if (action.id === 'voltar_menu') {
      return ctx.reply(
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
    }
  },
});