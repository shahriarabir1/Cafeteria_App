import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";
const Home = () => {
  return (
    <View>
      <View>
        <View>
          <Icon
            name="navicon"
            size={25}
            color="black"
            style={{ display: "flex", justifyContent: "top" }}
          />
          <TextInput
            placeholder="Search Here"
            style={{ borderColor: "black" }}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

export default Home;
