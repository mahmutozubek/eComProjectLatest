import React from "react";
import { ImageBackground,StyleSheet } from "react-native";

const image ={uri:"https://i.hizliresim.com/6ep42tk.png"}
function Image(){
    return(
        <ImageBackground style ={styles.image} source={image} resizeMode ="cover"></ImageBackground>
    )
}
export default Image

const styles =StyleSheet.create({
    image:{
        
        alignItems:'center',
        flex:1,
        justifyContent:'center'
       
        
    }
})