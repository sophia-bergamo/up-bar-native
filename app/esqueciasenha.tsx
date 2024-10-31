import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { RootStackNavigationProp } from './navigation'; // Altere o caminho conforme necessário

// Defina o tipo de navegação
const ResetPasswordScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>(); // Acessa o objeto de navegação com tipos

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    // Lógica para salvar nova senha
    console.log('Email:', email);
    console.log('Código:', code);
    console.log('Nova Senha:', newPassword);
    console.log('Confirmar Senha:', confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a senha?</Text>
      <Text style={styles.subtitle}>
        Insira seu melhor email, enviaremos um email com instruções para a redefinição de senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={code}
        onChangeText={setCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar nova senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backToLogin}>Voltar para Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  subtitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  input: {
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderColor: "#E0E0E0",
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
  button: {
    backgroundColor: "#eddb8c",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  backToLogin: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginTop: 20,
  },
});

export default ResetPasswordScreen;
