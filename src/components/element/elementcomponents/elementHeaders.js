import { Text,TouchableOpacity ,StyleSheet} from "react-native";
import React from "react";
export default function elementHeaders({header}){
    return(
        <TouchableOpacity style ={styles.container}>
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



