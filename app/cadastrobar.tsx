import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
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
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
    uploadButton: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 8,
      padding: 12,
      marginBottom: 15,
      alignItems: 'flex-start',
      backgroundColor: '#FFF',
    },
    uploadContent: {
      flexDirection: 'row', // Alinha imagem e texto horizontalmente
      alignItems: 'center', // Centraliza verticalmente
    },
    uploadImage: {
      width: 24,  // Largura da imagem
      height: 24,  // Altura da imagem
      marginRight: 8,  // Espaço entre imagem e texto
    },
    uploadText: {
      fontSize: 16,
      color: '#888',  // Cor do texto
      textAlign: 'left',
    },
  saveButton: {
    backgroundColor: '#eddb8c',
    padding: 15,    
    borderRadius: 8,
    alignItems: 'center',
  },
  saveText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
