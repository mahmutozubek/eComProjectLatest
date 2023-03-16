import React from "react";
import { useState } from "react";
import { View,Text,FlatList,Image,ImageBackground,  TouchableOpacity, ScrollView } from "react-native";
import styles from './Shoping.style'
import Header from "../headerMenu/Header";
import ShopingData from '../../shopingdata.json'
import ShopingCard from "./components/shopingCard";

   


function Shoping({navigation}){
    const image ={uri:"https://i.hizliresim.com/6ep42tk.png"}

    function navigateToOrderScreen(){
        navigation.navigate('OrderScreen')
    }
    const [list ,setList] =useState(ShopingData)

    function bringItem (){
        setList(ShopingData)
    }

     function deleteItemFunc(item){
        const filteredList = list.filter(x => x.id != item.id)
        setList(filteredList)
    }



    
   
    const renderShopingData =({item}) => <ShopingCard  item={item} deleteItem={deleteItemFunc}/>

    return(
        <ImageBackground style ={styles.image} source={image} resizeMode ="cover">
            <ScrollView>
        
        <Header header ="Cart"/>
        <FlatList
            data ={list}
            renderItem ={renderShopingData}
            />
            <TouchableOpacity style ={styles.Button} onPress ={navigateToOrderScreen}>
            
                <Image style ={{width:25,height:25}} source ={{uri:"https://cdn-icons-png.flaticon.com/128/2435/2435292.png"}}/>
                <Text style ={styles.textButton}> Place Order</Text>
               
            </TouchableOpacity>
           
        <TouchableOpacity style ={styles.Button} onPress ={bringItem}>
            
            <Image style ={{width:25,height:25}} source ={{uri:"https://cdn-icons-png.flaticon.com/128/2435/2435292.png"}}/>
            <Text style ={styles.textButton}> Bring Items</Text>
           
        </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
            
      
    )
}
export default Shoping



