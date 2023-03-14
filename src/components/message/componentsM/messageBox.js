import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import styles from './messageBox.style'
function MessageBox({imageUrl,name,message,hour,isMessage}){
    return(
        <View style ={styles.container}>

            <View style ={styles.imageContainer}>
               <Image style ={styles.image}source ={{uri:imageUrl}}/> 
            </View>
            <View style ={styles.textContainer}>
                <Text style ={styles.name}>{name}</Text>
                <Text style ={styles.message}>{message}</Text>
            </View>
            <View style ={styles.notification}>
            <Image style ={styles.imageNotification}source ={isMessage ?{uri:"https://cdn-icons-png.flaticon.com/128/3306/3306630.png"} : null}/> 
                <Text style ={styles.hour}>{hour}</Text>
            </View>
        </View>
    
    )
}
export default MessageBox



