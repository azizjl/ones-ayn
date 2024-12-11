// screens/HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const images = [
  require("../assets/1.png"),
  require("../assets/2.png"),
  require("../assets/3.png"),
  require("../assets/4.png"),
  require("../assets/5.png"),
  require("../assets/6.png"),
];

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(image)}>
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
        ))}

        <View style={styles.reservationButtonContainer}>
          <TouchableOpacity
            title="Sign Up"
            onPress={() => navigation.navigate("Reservation")}>
            <Text style={styles.button}>Make a Reservation</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <Image source={selectedImage} style={styles.modalImage} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollViewContent: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalImage: {
    width: "90%",
    height: "70%",
    borderRadius: 10,
  },
  reservationButtonContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "white",
    color: "black",
    fontSize: 24,
    width: 300,
    margin: 2,
    borderRadius: 50,
    paddingHorizontal: 20,
    padding: 10,
    textAlign: "center",
  },
});
