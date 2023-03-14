import React from "react";
import {View,Text,StyleSheet,Image,useWindowDimensions} from 'react-native'

export default function Onboardingitem({item}){
    const {width} = useWindowDimensions()


    return(
        <View style = { styles.container}>
            <View style = {styles.header}>
                <Text style ={styles.title}>{item.title}</Text>
                <Text style ={styles.description}>{item.description}</Text>

            </View>
            <Image  style ={styles.image} source ={{uri:item.imageUrl}} resizeMode='contain'  />
            
            
            



        </View>
    )
}




const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e0e0e0',
        flex:1,
        
        alignItems:'center',
    },
    header:{
        width:390,
        
        padding:20,
        justifyContent:'center'

    },  
    image:{
    
       width:350,
       height:425,
    },
    title:{
        fontWeight:'900',
        fontSize:28,
        marginBottom:10,
        color:'black',
        textAlign:'center',

    },
    description:{
        fontSize:15,
        fontWeight:'300',
        color:'#62656b',
        textAlign:'center',
        paddingHorizontal:64,
    }
    
})