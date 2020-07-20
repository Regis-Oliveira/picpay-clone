import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PrincipaisScreen from '../../screens/Principais';
import LocaisScreen from '../../screens/Locais';
import StoreScreen from '../../screens/Store';

const Tab = createMaterialTopTabNavigator();

export default function NavigationTopTab() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Principais" component={PrincipaisScreen} />
          
      <Tab.Screen name="Locais" component={LocaisScreen} />
          
      <Tab.Screen name="Store" component={StoreScreen} />
    </Tab.Navigator>
  );
}