import { Text,TouchableOpacity ,StyleSheet} from "react-native";
import React from "react";
export default function elementHeaders({header,onPress}){
    return(
        <TouchableOpacity style ={styles.container} onPress ={onPress}>
            <Text style ={styles.title}>{header}</Text>
        </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    container:{
        padding:10,
    
    },
    title:{
        marginLeft:9,
        fontSize:16,
        fontWeight:'bold',

    },
})



