import React from "react";
import {View,Text,ImageBackground,FlatList, ScrollView} from 'react-native'
import Header from "../headerMenu/Header";
import Search from "../search/Search";
import styles from './Message.style'
import AvatarDataCard from "../avatarDataCard/AvatarDataCard";
import MessageData from '../../messageData.json'
import MessageAvatar from './componentsM/messageAvatar'
import MessageBox from './componentsM/messageBox'
const image ={uri:"https://i.hizliresim.com/6ep42tk.png"}

function Message(){
   
    const renderMessageData =({item}) =><MessageAvatar  {...item}/>
    const renderMessageBoxData =({item}) =><MessageBox {...item}/>
    return(
        <ImageBackground style ={styles.imageBg} source={image} resizeMode ="cover">
            <ScrollView>
            <View style ={styles.container}>
                <View style ={{flex:1,height:200,}}>

            <Header header ="Messages"/>
                </View>
            
                </View>
           

            <FlatList
            data ={MessageData}
            renderItem ={renderMessageData}
            horizontal={true}
            keyExtractor={item => item.id}
            />
             <Search style ={styles.search}/>
            <FlatList
            data ={MessageData}
            renderItem={renderMessageBoxData}
            />
           

         
            
            
           
           </ScrollView>
        </ImageBackground>
        
    )
}
export default Message