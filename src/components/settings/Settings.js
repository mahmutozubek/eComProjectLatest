import React from "react";
import {View,Text,ImageBackground,Image,TouchableOpacity,Switch} from 'react-native'
import styles from './Settings.style' 
import Header from "../headerMenu/Header";
function Setting({navigation}){

    const image ={uri:"https://i.hizliresim.com/6ep42tk.png"}
    function navigateToShopingScreen(){
        navigation.navigate("ShopingScreen")
     }
     function navigateToSideScreen(){
        navigation.navigate("SideScreen")
     }
     function navigateToOnBoardingScreen(){
        navigation.navigate("LoginScreen")
     }
    return(
        <ImageBackground style ={styles.imageBg} source={image} resizeMode ="cover">
            
            <View style ={styles.container}>
                 <Header header ="Settings" onPressShoping={navigateToShopingScreen} onPressDrawer={navigateToSideScreen}/> 
            
            </View>           
            <Text style ={styles.title}>Account</Text>
          

            
            <TouchableOpacity style ={styles.account}>
                <Image style={{height:20,width:20}} source ={{uri:"https://cdn-icons-png.flaticon.com/128/2889/2889676.png"}} />
                <Text>  Change Password   </Text>
                <Image style={styles.icon2} source ={{uri:"https://cdn-icons-png.flaticon.com/128/2989/2989988.png"}} />
            </TouchableOpacity>

            <TouchableOpacity style ={styles.account}>
                <Image style={styles.icon} source ={{uri:"https://cdn-icons-png.flaticon.com/128/2956/2956788.png"}} />
                <Text>  Privacy Settings       </Text>
                <Image style={styles.icon2} source ={{uri:"https://cdn-icons-png.flaticon.com/128/2989/2989988.png"}} />
            </TouchableOpacity>

            <TouchableOpacity style ={styles.account}>
                <Image style={styles.icon} source ={{uri:"https://cdn-icons-png.flaticon.com/128/5403/5403606.png"}} />
                <Text>  Language                  </Text>
                <Image style={styles.icon2} source ={{uri:"https://cdn-icons-png.flaticon.com/128/2989/2989988.png"}} />
            </TouchableOpacity>

            <TouchableOpacity style ={styles.account} onPress={navigateToOnBoardingScreen}>
                <Image style={styles.icon} source ={{uri:"https://cdn-icons-png.flaticon.com/128/3596/3596141.png"}} />
                <Text>  Sign Out                    </Text>
                <Image style={styles.icon2} source ={{uri:"https://cdn-icons-png.flaticon.com/128/2989/2989988.png"}} />
            </TouchableOpacity>
            
                <View style ={{height:500,}}>
                    <Text style ={styles.title}>More Options</Text>
                    <View style ={styles.darkMode}>
                        <Text style ={styles.darkModeText}>Dark Mode</Text>
                        <View style ={styles.switchArea}>
                            <Switch style ={styles.switch}></Switch>
                        </View>
                    </View>
                    <View style ={styles.darkMode}>
                        <Text style ={styles.darkModeText}>Notification</Text>
                        <View style ={styles.switchArea}>
                            <Switch style ={styles.switch}></Switch>
                        </View>
                    </View>
                    <View style ={styles.darkMode}>
                        <Text style ={styles.darkModeText}>Newsletter</Text>
                        <View style ={styles.switchArea}>
                            <Switch style ={styles.switch}></Switch>
                        </View>
                    </View>
                    <View style ={styles.darkMode}>
                        <Text style ={styles.darkModeText}>Phone Call</Text>
                        <View style ={styles.switchArea}>
                            <Switch style ={styles.switch}></Switch>
                        </View>
                    </View>
                    <View style ={styles.darkMode}>
                        <Text style ={styles.darkModeText}>Linked</Text>
                        <View style ={styles.switchArea}>
                            <Switch style ={styles.switch}></Switch>
                        </View>
                    </View>


                </View>
            
         
            </ImageBackground>
           
                    

    )
}
export default Setting