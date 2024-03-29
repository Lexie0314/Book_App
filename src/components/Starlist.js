import React from "react";
import { StyleSheet, View ,} from "react-native";

const starlist = ({star}) => {

    let starList = [];

    for(let i=1;i<=5;i++){
        if (star>=i){
            starList.push( <image source={require('../img/icon_star_filled.png')}style={styles.star} key={i}/>)
        }
        else{
            starList.push( <image source={require('../img/icon_star_empty.png')}style={styles.star} key={i}/>)
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
export default starlist