import React from "react";
import { StyleSheet, View ,} from "react-native";

const Header = () => {
  return (
    <View style={styles.headerStyle}>

    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation:2,
  },
 
})

export default Header;