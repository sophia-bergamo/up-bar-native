// navigation.d.ts
import { StackNavigationProp } from '@react-navigation/stack';

// Defina as suas rotas
export type RootStackParamList = {
  Home: undefined; // A tela Home não espera parâmetros
  Login: undefined; // A tela Login não espera parâmetros
  ResetPassword: undefined; // A tela ResetPassword não espera parâmetros
};

// Crie o tipo de navegação
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
