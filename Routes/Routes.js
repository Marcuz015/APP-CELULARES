import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  // Certifique-se de escolher a coleção de ícones apropriada

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';

const Tabs = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Cadastro') {
            iconName = 'log-in-outline';  // Ícone de login para Cadastro
          } else if (route.name === 'Celulares') {
            iconName = 'phone-portrait-outline';  // Ícone de celular para Celulares
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#04534d',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Cadastro" component={Home} />
      <Tabs.Screen name="Celulares" component={Perfil} />
    </Tabs.Navigator>
  );
}
