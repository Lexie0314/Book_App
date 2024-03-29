import React from "react";
import { ScrollView } from "react-native";
import Booklist from "../components/Booklist";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{flex: 1}}>
      <Booklist 
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default HomeScreen;