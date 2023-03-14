import React from "react";
import {View,Text,TextInput,Image,ImageBackground,} from 'react-native'
import styles from './Search.style'
function Search(){
    
    return(
        
        <View style ={styles.inputArea}>

            <TextInput style ={styles.input}placeholder="Search.."></TextInput>
            <Image style ={{width:18,height:18,marginTop:20,marginRight:15} }source ={{uri:'https://cdn-icons-png.flaticon.com/128/482/482631.png'}}/>
            </View>
          
    )
}
export default Search