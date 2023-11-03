import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/Images/Group_50.png";
import { colors, hr80, btn1, btnout } from "../globals/style";
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome To Cafeteria</Text>
      <View>
        <Image style={{ width: 200, height: 200 }} source={logo} />
      </View>
      <Text>Find the food what you want</Text>
      <View style={btnout}>
        <TouchableOpacity>
          <Text style={btn1}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn}>Log in</Text>
        </TouchableOpacity>
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

  logo: {
    height: 10, // or '50%' or any appropriate value
  },
});
export default WelcomeScreen;
