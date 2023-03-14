import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './bottomCard.style'
function BottomCard({imageUrl,title,price}){
    return(
        <View style ={styles.container}>
            <Image style ={styles.image} source ={{uri:imageUrl}}/>
            <Text style ={styles.title}>{title}</Text>
            <Text style ={styles.price}>{price}</Text>
        </View>
    )
}
export default BottomCard