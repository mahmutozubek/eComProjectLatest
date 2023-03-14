import React from "react";
import {View,Text, FlatList,StyleSheet,Button, TouchableOpacity} from 'react-native'
import Onboardingitem from  './OnboardingItem'
import login from  '../../login.json'


function Onboarding(props){

   function navigateToSignIn(){
    props.navigation.navigate('SignInScreen')
   }

    return(
        <View style ={styles.container}>
           
           <FlatList 
                data ={login}
                renderItem ={({item}) => <Onboardingitem item ={item}/>}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                keyExtractor ={(item) =>item.u_id}
               

            />
            
            
            <View>

            <Button style = {styles.button}title="Get Started" onPress ={navigateToSignIn}></Button>
            
            </View>
            

        </View>

    )
}

export default Onboarding

const styles  =StyleSheet.create({
    container:{
        
        flex:1,
       
  },
  button:{
    marginTop:10,
  } 

    
})