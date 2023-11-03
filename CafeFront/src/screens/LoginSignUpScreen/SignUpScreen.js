import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Registration</Text>
      <View>
        <View>
          <TextInput placeholder="Enter Your Email" style={styles.input} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff4242",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottom: "1px gray solid",
    padding: 10,
  },
});

export default SignUpScreen;
