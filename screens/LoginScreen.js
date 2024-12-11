// screens/LoginScreen.js
import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/1.png")} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity
        title="Login"
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Sign Up"
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.button}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    backgroundColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    color: "black",
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
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
