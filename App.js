import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Perfil from './src/pages/Perfil';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Sobre" 
        component={Sobre}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Perfil" 
        component={Perfil}
        options={{ headerShown: false }}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

