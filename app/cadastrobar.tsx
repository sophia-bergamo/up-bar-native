import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Link } from "expo-router";

export default function CadastroBar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [barPhoto, setBarPhoto] = useState<string | null>(null);
  const [cnpj, setCnpj] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [password, setPassword] = useState("");
  const [menuLink, setMenuLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [fileName, setImageName] = useState<string | null>(null);

  const pickImage = async (setUri: (uri: string) => void) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      setBarPhoto(uri);
      setImageName(fileName || `photo-${Date.now()}.jpg`);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const formData = new FormData();
    formData.append("barPhoto", {
      uri: barPhoto,
      name: `photo-${Date.now()}.jpg`,
      type: "image/jpeg",
    } as any);

    try {
      const response = await fetch("http://192.168.15.7:3000/create-bar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          barPhoto: {
            uri: barPhoto,
            name: `photo-${Date.now()}.jpg`,
            type: "image/jpeg",
          },
          cnpj,
          address,
          about,
          password,
          menuLink,
          name,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.error);
      } else {
        setSuccessMessage(
          "Bar cadastrado com sucesso! Volte para a tela de início para entrar no aplicativo!",
        );
      }
    } catch (e) {
      setErrorMessage("Erro ao tentar se conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Cadastre seu bar</Text>

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

        <TouchableOpacity
          style={styles.uploadImageButton}
          onPress={() => pickImage(setBarPhoto)}
        >
          <View style={styles.uploadImageContent}>
            {barPhoto ? (
              <Image source={{ uri: barPhoto }} style={styles.uploadedImage} />
            ) : (
              <>
                <Image
                  source={require("./assets/upload_icon.png")}
                  style={styles.uploadImage}
                />
                <Text style={styles.uploadText}>{"Foto do bar"}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="CNPJ (somente números)"
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
          placeholder="Sobre"
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
    </KeyboardAvoidingView>
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
  uploadImageButton: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    alignItems: "flex-start",
    backgroundColor: "#F8F8F8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  uploadImageContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  uploadImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  uploadText: {
    fontSize: 16,
    color: "#888",
    textAlign: "left",
  },
  saveButton: {
    backgroundColor: "#eddb8c",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 17,
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
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  errorText: {
    color: "red",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  successText: {
    color: "green",
    fontSize: 15,
    marginBottom: -10,
    textAlign: "center",
  },
});
