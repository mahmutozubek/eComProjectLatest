import React from "react";
import {View,StyleSheet,Image} from 'react-native'

function messageAvatar({imageUrl}){
    return(
        <View style ={styles.container}>
            <Image style ={styles.image} source={{uri:imageUrl}}/>
        </View>
    )
}
export default messageAvatar
const styles =StyleSheet.create({
    container:{
        padding:2,
        margin:10,
        borderRadius:25,
        flex:1,
        width:50,
        height:50,
    },
    image:{
        borderRadius:25,
        flex:1,
        width:50,
        height:50,
    }
})