import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login';
import ResetPasswordScreen from './esqueciasenha';
import HomeScreen from './home';
import DadosPessoaisScreen from './dadospessoais';
import AjudaScreen from './ajuda';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="DadosPessoais" component={DadosPessoaisScreen} />
        <Stack.Screen name="Ajuda" component={AjudaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
