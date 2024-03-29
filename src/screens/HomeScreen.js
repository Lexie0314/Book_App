import React from "react";
import { ScrollView } from "react-native";
import BookList from "../components/BookList";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{flex: 1}}>
      <BookList 
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default HomeScreen;