import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/Images/Group_50.png";
import { colors, hr80, btn1, brngrp, titles, btngrp } from "../globals/style";
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={titles}>Welcome To Cafeteria</Text>
      <View>
        <Image style={{ width: 200, height: 200 }} source={logo} />
      </View>
      <Text
        style={{
          borderTop: "2px gray solid",
          borderBottom: "2px gray solid",
          margin: "5px",
          padding: "5px",
          color: "white",
        }}
      >
        Find the food what you want
      </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity>
          <Text style={btn1}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={btn1}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default WelcomeScreen;
