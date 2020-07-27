import React from 'react';
import { Wrapper, View, Header, Title } from './styles';

import SuggestionsDescription from '../../components/SuggestionsDescription';

export default function Principais() {
  return (
    <Wrapper>
      <View>
        <Header>
          <Title>Serviços</Title>
          <SuggestionsDescription />    
        </Header>
      </View>  
    </Wrapper>
  );
}