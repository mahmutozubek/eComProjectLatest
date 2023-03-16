import React from "react";
import {View,ImageBackground,Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './Order.style'
import Header from "../headerMenu/Header";
export default function Order(){
    const image ={uri:"https://i.hizliresim.com/6ep42tk.png"}
    
    return(
        <ImageBackground style ={styles.imagebg} source={image} resizeMode ="cover">
        <Header  header ="Checkout"/>
        <View style ={styles.inputArea}>
            <Text style ={styles.title}>Billing Adress</Text>
            
            <TextInput style ={styles.input} placeholder="Name"></TextInput>
            <TextInput style ={styles.input} placeholder="Country"></TextInput>
            <TextInput style ={styles.input} placeholder="Address"></TextInput>
            <TextInput style ={styles.input} placeholder="City"></TextInput>
            <TextInput style ={styles.input} placeholder="State"></TextInput>
            <TextInput style ={styles.input} placeholder="Phone"></TextInput>
            <TextInput style ={styles.input} placeholder="Email"></TextInput>
        </View>
        <View style ={styles.buttons}>
            <TouchableOpacity onPress={null}>
                <Text style ={styles.text1}>Product</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style ={styles.text1}>Total</Text>
            </TouchableOpacity>
            
        </View>

       </ImageBackground>
    )
}

