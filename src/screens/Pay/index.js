import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SearchBar from '../../components/SearchBar';

import PayTabNavigator from '../../components/PayTabNavigator';
import { Wrapper, Header } from './styles';

export default function Pay() {
  return (
    <Wrapper>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#00AC4A" />
        <SearchBar />
      </Header>

      <PayTabNavigator />
  
    </Wrapper>
  );
}
