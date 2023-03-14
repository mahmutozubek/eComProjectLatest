import React from "react";
import {Text,Image, TouchableOpacity} from 'react-native'
import styles from './ElementBody.style'
export default function ElementBody({imageUrl,name}){
    return(
        <TouchableOpacity style ={styles.container}> 
            <Image  style ={styles.image} source ={{uri:imageUrl}}/>
            <Text style ={styles.name}>{name}</Text>
            <Image style ={styles.constImage} source={{uri:"https://cdn-icons-png.flaticon.com/128/9834/9834669.png"}}/>
        
        </TouchableOpacity>
    )
}
