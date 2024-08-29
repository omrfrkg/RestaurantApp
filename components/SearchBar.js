import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

//Import Vector Icons -> npm i @expo/vector-icons
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SearchBar({term, onTermChange, onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign style={styles.iconStyle} 
                 name="search1" size={24} 
                 color="black" />
      <TextInput style={styles.inputStyle}
                 value={term}
                 placeholder='Ara...'
                 onChangeText={onTermChange}
                 onEndEditing={onTermSubmit}
                 />
    </View>
  )
}

const styles = StyleSheet.create({

    backgroundStyle : {

        backgroundColor : "lightgray",
        flexDirection : "row", // alt alta sıralanmasın diye
        margin : 10,
        height : 50,
        alignItems : "center",
        borderRadius : 20


    },
    iconStyle : {

        marginHorizontal : 15, //sağdan soldan 15px aralık vermesi için

    },
    inputStyle : {

        flex : 1,
        fontSize : 18,


    }



})