import React from 'react';

import * as Styled from './styles';

export default function SearchBar() {
  return(
    <Styled.Container>
      <Styled.Input placeholder="Quem você quer pagar?" />
      <Styled.ButtonContainer>
        <Styled.ButtonIcon name="search" />
      </Styled.ButtonContainer>
    </Styled.Container>
  );
}