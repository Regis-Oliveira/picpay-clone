import React from 'react';
import { Wrapper, Container, View, Header, Title } from './styles';

import SuggestionsDescription from '../../components/SuggestionsDescription';
import Contacts from '../../components/Contacts';

export default function Principais() {
  return (
    <Wrapper>
      <Container>
        <View>
          <Header>
            <Title>Serviços</Title>
            <SuggestionsDescription />
            <Contacts />    
          </Header>
        </View>  
      </Container>
    </Wrapper>
  );
}