import React from "react";
import { StyleSheet, View ,Image} from "react-native";

const Starlist = ({star}) => {

    let starList = [];

    for(let i=1;i<=5;i++){
        if (star>=i){
            starList.push( <Image source={require('../img/icon_star_filled.png')}style={styles.star} key={i}/>)
        }
        else{
            starList.push( <Image source={require('../img/icon_star_empty.png')}style={styles.star} key={i}/>)
        }
    }
    return (
        <View style={styles.starList}>
            {starList}
        </View>
    )
}

const styles =StyleSheet.create({
    starList:{
        flexDirection:'row',
    },
    star:{
        marginRight:4,
        width: 20,
        height: 20
    }
})
export default Starlist