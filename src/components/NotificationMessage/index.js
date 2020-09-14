import React from 'react';

import { Container, Message, TextBody, DateMessage, SeparationLine, Line } from './styles';

const items = [
  {
    key: String(Math.random()),
    title: 'Que tal R$20,00 de volta para começar a usar o PicPay? Toque aqui e saiba mais!!',
    date: 'Hoje ás 02:55'
  },

  {
    key: String(Math.random()),
    title: 'Que tal R$20,00 de volta para começar a usar o PicPay? Toque aqui e saiba mais!!',
    date: 'Hoje ás 02:55'
  },

  {
    key: String(Math.random()),
    title: 'Que tal R$20,00 de volta para começar a usar o PicPay? Toque aqui e saiba mais!!',
    date: 'Hoje ás 02:55'
  },

  {
    key: String(Math.random()),
    title: 'Que tal R$20,00 de volta para começar a usar o PicPay? Toque aqui e saiba mais!!',
    date: 'Hoje ás 02:55'
  }
]

export default function NotificationMessage() {
  return (
    <Container>
      {items.map((item) => (
        <Message key={item.key} >
          
          <TextBody>{item.title}</TextBody>
          
          <DateMessage>{item.date}</DateMessage>

          <SeparationLine>
            <Line />
          </SeparationLine>
        </Message>
      ))}
    </Container>
  );
}
