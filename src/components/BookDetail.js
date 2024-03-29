import React from "react";
import { StyleSheet, View ,Text,Image,Pressable} from "react-native";
import Starlist from "./Starlist"
const BookDetail = ({ book, navigation }) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.cardStyle}>
                <Pressable onPress={() => navigation.navigate('Detail', book)}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: book.image }}
                    />
                </Pressable>
            </View>
            <View>
                {book.showStar ?
                    <View style={styles.Starlist}>
                        <Starlist star={book.star} />
                    </View>
                    : null}
                <Text style={styles.bookname}>{book.bookname}</Text>
                <Text style={styles.header_author}>{book.author}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cardStyle:{
        marginHorizontal: 3,
        marginTop: 15,
    },
    bookname:{
        color: '#000',
        marginTop: 16,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 18,
    },
    header_author:{
        fontSize: 14,
        fontWeight: '300',
        color: "#131313",
        width: '100%',
        marginTop: 8
    },
    imageStyle:{
        height: 200,
        width: 140,  
    },
    Starlist:{
        flex:1,
        marginTop:16.5
    }

})
export default BookDetail;