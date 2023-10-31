import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = () => {
  return (
    <View>
      <View style={{ backgroundColor: "blue", height: "100%", width: "100vw" ,display:'flex',borderCurve:'5px'}}>
        <View>
          <Icon name="navicon" size={30} color="#900" />
        </View>
      </View>
    </View>
  );
};

export default Home;
