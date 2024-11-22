import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { bars } from "./bares/bares";

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= rating ? "star" : "star-o"}
          size={16}
          color="#FFD700"
        />,
      );
    }
    return stars;
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.barItem}>
      <View style={styles.barInfo}>
        <Text style={styles.barName}>{item.name}</Text>
        <View style={styles.stars}>{renderStars(item.rating)}</View>
        <Text style={styles.barLocation}>{item.location}</Text>
      </View>
      <Image source={item.image} style={styles.barImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => setMenuVisible(true)}
        >
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>HOME</Text>

        <TouchableOpacity style={styles.locationIcon}>
          <FontAwesome name="map-marker" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <FlatList
          data={bars}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>

      {/* Menu Modal */}
      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menu}>
            <Link href="/" style={styles.menuItem}>
              <Text style={styles.menuText}>Sair</Text>
              <FontAwesome
                name="sign-out"
                size={20}
                color="black"
                style={styles.menuIconRight}
              />
            </Link>
          </View>
        </TouchableOpacity>
      </Modal>

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
  },
  list: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  barItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  barInfo: {
    flex: 1,
  },
  barName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  stars: {
    flexDirection: "row",
    marginVertical: 5,
  },
  barLocation: {
    fontSize: 14,
    color: "#555",
  },
  barImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
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
