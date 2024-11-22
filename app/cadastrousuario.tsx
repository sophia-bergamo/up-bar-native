import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";

export default function CadastroUsuário() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSave = async () => {
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    // try {
    //   const response = await fetch("http://192.168.15.7:3000/create-user", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, name, password }),
    //   });

    //   if (!response.ok) {
    //     const errorData = await response.json();
    //     setErrorMessage(
    //       errorData.error || "Erro ao tentar se conectar com o servidor.",
    //     );
    //   } else {
    //     setSuccessMessage(
    //       "Usuário cadastrado com sucesso! Volte para a tela de início para entrar no aplicativo!",
    //     );
    //   }
    // } catch (e) {
    //   setErrorMessage("Erro ao tentar se conectar com o servidor.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Crie sua conta</Text>
      <Text style={styles.titlesecond}>Seja bem-vindo</Text>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
      />

      {successMessage && (
        <Text style={styles.successText}>{successMessage}</Text>
      )}

      {loading ? (
        <ActivityIndicator size="large" color="#eddb8c" />
      ) : (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Salvar</Text>
        </TouchableOpacity>
      )}

      {/* MUDAR A ROTA AQUI PARA LOGIN */}
      <Link href={"/login"} style={styles.loginText}>
        Já tem uma conta?{" "}
        <Text style={styles.loginLink}>Faça o login aqui</Text>
      </Link>

      <Link href={"/"} style={styles.loginText}>
        <Text style={styles.inicioLink}>Voltar para a tela de inicio</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  titlesecond: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  input: {
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  saveButton: {
    backgroundColor: "#eddb8c",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 40,
  },
  saveText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginTop: 20,
  },
  loginLink: {
    color: "#8c7b47",
    fontWeight: "bold",
  },
  inicioLink: {
    color: "#8c7b47",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  successText: {
    color: "green",
    fontSize: 15,
    marginBottom: -10,
    textAlign: "center",
  },
});
