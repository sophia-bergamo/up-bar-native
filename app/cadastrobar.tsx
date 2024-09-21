import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function RegisterBar() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [barPhoto, setBarPhoto] = useState<string | null>(null);
  const [cnpj, setCnpj] = useState('');
  const [address, setAddress] = useState('');
  const [about, setAbout] = useState('');
  const [password, setPassword] = useState('');
  const [menuLink, setMenuLink] = useState(''); 

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
    // Lógica de salvamento aqui
    console.log({
      name,
      email,
      barPhoto,
      cnpj,
      address,
      about,
      password,
      menuLink,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Cadastre seu bar</Text>
      
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
      
      <TouchableOpacity style={styles.uploadButton} onPress={() => pickImage(setBarPhoto)}>
        <View style={styles.uploadContent}>
          <Image 
            source={require('./assets/upload_icon.png')}
            style={styles.uploadImage}
          />
          <Text style={styles.uploadText}>Foto do bar</Text>
        </View>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        placeholderTextColor="#888"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
        placeholderTextColor="#888"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Sobre o bar"
        value={about}
        onChangeText={setAbout}
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
      
      <TextInput
        style={styles.input}
        placeholder="Link do cardápio"
        value={menuLink}
        onChangeText={setMenuLink}
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
  input: {
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
      // Sombra no iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      
      // Sombra no Android
      elevation: 3, // Controle da intensidade da sombra
    },
    uploadButton: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 8,
      padding: 12,
      marginBottom: 15,
      alignItems: 'flex-start',
      backgroundColor: '#F8F8F8',
            // Sombra no iOS
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            
            // Sombra no Android
            elevation: 3, // Controle da intensidade da sombra
    },
    uploadContent: {
      flexDirection: 'row', 
      alignItems: 'center', 
    },
    uploadImage: {
      width: 24,  
      height: 24,  
      marginRight: 8,  
    },
    uploadText: {
      fontSize: 16,
      color: '#888',  
      textAlign: 'left',
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
