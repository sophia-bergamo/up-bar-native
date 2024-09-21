import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function RegisterBar() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pickImage = async (setter: (uri: string) => void) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setter(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    console.log({
      name,
      email,
      password,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Crie sua conta</Text>
      <Text style={styles.titlesecond}>Seja bem-vindo</Text>
      
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

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { /* Navegação para tela de login */ }}>
        <Text style={styles.loginText}>
          Já tem uma conta? <Text style={styles.loginLink}>Faça o login aqui</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { /* Navegação para tela de inicio */ }}>
      <Text style={styles.loginText}>
          <Text style={styles.inicioLink}>Voltar para a tela de inicio</Text>
          </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: { 
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  titlesecond: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',    
    color: '#000',
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
      
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      
    
      elevation: 3, 
    },
  saveButton: {
    backgroundColor: '#eddb8c',
    padding: 10,    
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 40,
  },
  saveText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
  loginLink: {
    color: '#8c7b47',
    fontWeight: 'bold',
  },  
  inicioLink: {
    color: '#8c7b47',
    fontWeight: 'bold',
  } 
});
