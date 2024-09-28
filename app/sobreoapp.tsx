import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bem-vindo ao App!</Text>
      <Link href="/cadastrobar">Ir para o Cadastro do Bar</Link>
      <Link href="/cadastrousuario">Ir para o Cadastro do Usuário</Link>
    </View>
  );
}

export default function SobreOApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.description}>
        O fato de estar à procura de algum lugar ideal para passar a noite ou a
        tarde e não encontrar o lugar perfeito gera um desconforto e
        desmotivação.
      </Text>
      <Text style={styles.description}>
        A ideia é fazer com que as pessoas não tenham essa preocupação em
        relação a essa procura, e sim otimizem esse tempo, analisando as
        classificações em tempo real.
      </Text>
      <Link href="/">Voltar para a tela inicial</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#8c7b47",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
    borderRadius: 5,
  },
});
