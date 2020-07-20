import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTopTab from './NavigationTopTab';

export default function PayTabNavigator() {
  return(
    <>
      <NavigationContainer independent={true} >
        <NavigationTopTab />
      </NavigationContainer>
    </>
  );
} 