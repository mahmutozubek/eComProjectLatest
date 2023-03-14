import React, { useState } from "react";
import{View,Text,StyleSheet,Alert,TextInput,Image,ImageBackground, TouchableOpacity} from 'react-native'
import styles from './SignIn.style'

const image ={uri:"https://images.unsplash.com/photo-1621091211034-53136cc1eb32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}

//"https://1.bp.blogspot.com/-XKjFEZ0cXR0/YTLOYRwuyvI/AAAAAAABUac/SCKhBxnZJDccevSmBENvaqb4Kkdk6KyiwCLcBGAsYHQ/s1920/Synthwave%2BNeon%2BLandscape%2BWallpaper-1080x1920.jpg"

  
export default function SignIn({navigation}){

    const [userName,setUserName] =useState("afsdf")
    const [password,setPassword] =useState("123214")


        function navigateToMainScreen(){
            const user={
                    userName,
                    password
            }
            
            if(
                !userName 
            
            ){
                Alert.alert("Slice Mobile","Inputs are must not empty")
            }
            
            else{navigation.navigate('MainScreen')}
        }
    

    return(
        <View style ={styles.container}>
          
            <ImageBackground stlye ={styles.image} source={image} resizeMode="cover">
            <View style ={styles.header}>
            <Text style ={styles.title}>Get</Text>
            <Text style ={styles.title}>Started!</Text>
            </View>
            <View style ={styles.Body}>
                <View style = {styles.Inputs}><TextInput style ={styles.userInput} placeholder="Username" onChangeText={setUserName}>

                </TextInput>
                <TextInput style ={styles.passwordInput }placeholder="Password" onChangeText={setPassword}>

                </TextInput>
                </View>
                <Text style ={styles.forgotText}>
                    Forgot Password ?
                </Text>
                <TouchableOpacity style ={styles.buttonfacebook} onPress ={navigateToMainScreen}>
                <Text style = {styles.dummyText} >Sign In</Text>
               </TouchableOpacity>
                <Text style ={styles.description} > Don't have account? Sign up</Text>
            </View>
            <View style ={styles.bottomArea}>
               <TouchableOpacity style ={styles.buttongoogle}>
                <Text style ={styles.dummyText}>Connect With Google</Text>
                <Image style ={styles.image} source ={{uri:"https://cdn-icons-png.flaticon.com/128/281/281764.png"}}/>
                    </TouchableOpacity>
                <TouchableOpacity style ={styles.buttonfacebook}>
                <Text style = {styles.dummyText}>Connect With Facebook</Text>
               <Image style ={styles.image} source ={{uri:"https://cdn-icons-png.flaticon.com/128/5968/5968764.png"}}/>
               </TouchableOpacity>
               
               <View style ={styles.emptyDiv}></View>
            </View>
            
           
            
            
            </ImageBackground>
        </View>

    )
}
