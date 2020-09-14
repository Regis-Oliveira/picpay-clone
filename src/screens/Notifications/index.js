import React from 'react';

import { Wrapper, Container, Header, Option, Text } from './styles';
import NotificationMessage from '../../components/NotificationMessage';

export default function Notifications() {
  return(
    <Wrapper>
      <Container>
        <Header>Notificações</Header>
        <Option>
          <Text>Configurar</Text>
        </Option>
      </Container>
      <NotificationMessage />
    </Wrapper>
  );
}