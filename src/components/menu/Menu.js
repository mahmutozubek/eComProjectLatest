import React, { useState,useEffect } from "react";
import {View,Text,ImageBackground,StyleSheet,Image, TextInput,FlatList, ScrollView,} from 'react-native'

import  ImageBg from '../imagebackground/imagebg'
import styles from './Menu.style'
import Header from '../headerMenu/Header'
import avatarData from '../../avatardata.json'
import AvatarDataCard from "../avatarDataCard/AvatarDataCard";
import CardData from '../../cardata.json'
import MidCard from '../midCard/MidCard';
import BottomCardData from '../../bottomCard.json'
import BottomCard from '../bottomCard/BottomCard'
import Search from "../search/Search";
import ElementHeaders from '../element/elementcomponents/elementHeaders'

const image ={uri:"https://i.hizliresim.com/6ep42tk.png"}



function Menu({}){
  
   
 
  const renderMidCard =({item})=> <MidCard {...item}/>
 const renderBottomCard =({item}) =><BottomCard {...item}/>
  const renderAvatar = ({ item }) => <AvatarDataCard {...item} />;
  
    


  return(
        <View style ={styles.container}>
            <ImageBackground style ={styles.image} source={image} resizeMode ="cover">
             <ScrollView>
            <View style ={{height:80,marginBottom:45}}>

            <Header header="Discover"/>
            </View>
            
            <Search/>
            
           
            <FlatList
            data ={avatarData}
            renderItem ={renderAvatar}
            keyExtractor={item => item.id}
            numColumns={1}
            horizontal={true}
            contentContainerStyle={{ paddingRight: 16, paddingLeft: 8 }}
            />
            <View style ={styles.buttons}>

                <ElementHeaders header ="Popular" onPress={null}/>
                <ElementHeaders header ="Trending"/>
                <ElementHeaders header ="Latest"/>
                <ElementHeaders header ="Reated"/>
                <ElementHeaders header ="Budget"/>
            </View>

            <FlatList
            data ={CardData}
            renderItem={renderMidCard}
            keyExtractor={item => item.id}
            numColumns={1}
            horizontal={true}
            contentContainerStyle={{ paddingRight: 16, paddingLeft: 8 }}
            />
            
            <FlatList
            data ={BottomCardData}
            renderItem={renderBottomCard}
            numColumns={2}
            keyExtractor={item => item.id}           
            />
       </ScrollView>
       </ImageBackground>  
        </View>
    )
}

export default Menu