// screens/ThankYouScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ThankYouScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank You for Your Reservation!</Text>
      <Text style={styles.message}>We look forward to seeing you soon.</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
