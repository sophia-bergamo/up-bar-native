import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

const PaginaInicial = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App!</Text>

      <Link href="/login" style={styles.button}>
        Entrar
      </Link>
      <View style={styles.buttonContainer}>
        <Link href="/cadastrousuario" style={styles.button}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </Link>
        <Link href="/cadastrobar" style={styles.button}>
          <Text style={styles.buttonText}>Cadastre seu Bar</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 10,
  },
  button: {
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#8c7b47",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
    borderRadius: 5,
    width: 200,
    padding: 10,
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

export default PaginaInicial;
