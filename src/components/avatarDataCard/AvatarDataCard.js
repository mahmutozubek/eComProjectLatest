import React from "react";
import { View,Text ,Image} from "react-native";
import styles from './AvatarDataCard.style'
function AvatarDataCard({imageUrl,title}){
    return(
        <View style ={styles.container}>
            <View style ={styles.body}>
            <View style ={styles.imageBody}>
            <Image style ={styles.image} source ={{uri:imageUrl}} />
            
            </View>
            <Text style ={styles.title}>{title}</Text>
            </View>
        </View>
    )
}
export default AvatarDataCard