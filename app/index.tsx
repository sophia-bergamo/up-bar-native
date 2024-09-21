import { Link } from 'expo-router';
import { Alert, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao App!</Text>
      <Link href="/cadastrobar">Ir para o Cadastro do Bar</Link> {/* Link para a página de cadastro */}
    </View>
  );
}
