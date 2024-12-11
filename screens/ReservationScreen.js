// screens/ReservationScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ReservationScreen({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true); // Set this to true to show the picker by default const onChange = (event, selectedDate) => { const currentDate = selectedDate || date; setShow(Platform.OS === 'ios'); // Keep it true for iOS picker style, or adjust as needed setDate(currentDate); };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Reservation</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        keyboardType="phone-pad"
        onChangeText={setPhone}
      />
      <DateTimePicker
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
      <TouchableOpacity
        title="Sign Up"
        onPress={() => navigation.navigate("ThankYou")}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "black",
    color: "white",
    fontSize: 24,
    width: 300,
    margin: 12,
    borderRadius: 50,
    paddingHorizontal: 20,
    padding: 10,
    textAlign: "center",
  },
});
