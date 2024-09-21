import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bem-vindo ao App!</Text>
      <Link href="/cadastrobar">Ir para o Cadastro do Bar</Link>
      <Link href="/cadastrousuario">Ir para o Cadastro do Usuário</Link>
    </View>
  );
}
