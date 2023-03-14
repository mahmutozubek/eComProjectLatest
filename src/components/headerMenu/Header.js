import React from "react";
import { View,Text ,Image,TouchableOpacity} from "react-native";
import styles from './Header.style'
import { useNavigation } from "@react-navigation/native";

function Header({header}){

   

    return(
        <View style ={styles.container}>
            <View style ={styles.topArea}>
            <TouchableOpacity><Image style={styles.x} source={{uri:"https://cdn-icons-png.flaticon.com/128/2516/2516745.png"}}/></TouchableOpacity>
            <Text  style ={styles.title}>Slice</Text>
            <TouchableOpacity onPress={null}><Image style={styles.x} source={{uri:"https://cdn-icons-png.flaticon.com/128/743/743131.png"}}/></TouchableOpacity>
            
            
            </View>
            
         

            <Text style ={styles.header}>{header}</Text>
           
          
            
        </View>
    )
}

export default Header