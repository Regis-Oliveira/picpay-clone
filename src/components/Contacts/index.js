import React from 'react';

import { Container, Header, Title, Card, CardHeader, Emoji, CardTitle, CardBody, Action, ActionLabel, SeparationLine, Line } from './styles';

import emoji from '../../images/emojifriendship.jpg';

export default function Contacts() {
  return(
    <Container>
      <SeparationLine>
        <Line />
      </SeparationLine>
     
      <Header>
        <Title>Contatos</Title>
      </Header>
      <Card>
        <CardHeader>
          <Emoji source={emoji} />
          <CardTitle>Encontre seus amigos</CardTitle>
        </CardHeader>
        <CardBody>
          Libere acesso a sua agenda para saber quem já está no PicPay.
          Junte-se aos seus amigos para pagar e receber dinheiro mais rápido!  
        </CardBody>
        <Action>
          <ActionLabel>Adicionar</ActionLabel>
        </Action>
      </Card>
    </Container>
  );
}