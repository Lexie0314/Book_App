import React from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";
import booklist from "../json/book.json";
import BookDetail from "./BookDetail";

const BookListSection = ({ title, data, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal={true}
        data={data}
        renderItem={({item}) => <BookDetail book={item} navigation={navigation} />}
        keyExtractor={item => item.book_title}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
};
  
const BookList = ({ navigation }) => {
  return (
    <>
      <BookListSection
        title={booklist[0].title}
        data={booklist[0].data}
        navigation={navigation}
      />
      <BookListSection
        title={booklist[1].title}
        data={booklist[1].data}
        navigation={navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    marginLeft: 20,
    backgroundColor:'#fff'      
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 8  
  }
})

export default BookList;
