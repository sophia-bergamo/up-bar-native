import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function PersonalDataScreen() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.menuIcon} onPress={() => setMenuVisible(true)}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Dados Pessoais</Text>
        <TouchableOpacity style={styles.locationIcon}>
          <FontAwesome name="map-marker" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          value={birthDate}
          onChangeText={setBirthDate}
          placeholderTextColor="#888"
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="star" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="question-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Menu Modal */}
      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Dados pessoais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Ajuda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Sair</Text>
              <FontAwesome name="sign-out" size={20} color="black" style={styles.menuIconRight} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2E0A7",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E8D18F",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuIcon: {
    padding: 10,
  },
  locationIcon: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  content: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
    justifyContent: "center",
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
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E8D18F",
    paddingVertical: 10,
  },
  navButton: {
    padding: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  menu: {
    backgroundColor: "#E8D18F",
    borderRadius: 8,
    marginTop: 50,
    marginLeft: 20,
    paddingVertical: 10,
    width: 200,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#C8B07D",
  },
  menuText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  menuIconRight: {
    marginLeft: 10,
  },
});
