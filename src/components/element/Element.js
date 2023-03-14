import React, { useState } from "react";
import {View,ImageBackground, FlatList} from 'react-native'

import styles from './Element.style'
import Header from "../headerMenu/Header";
import Search from '../search/Search'
import ElementHeaders from "./elementcomponents/elementHeaders";
import ElementData from '../../elements.json'
import ElementBody from "./elementcomponents/ElementBody";
export default  function Element(){
    const image ={uri:"https://i.hizliresim.com/6ep42tk.png"}
    const renderElementData =({item}) => <ElementBody {...item}/>
    
   
    return(
        


        <ImageBackground style ={{flex:1}} source={image} resizeMode ="cover">

            <View style ={styles.container}>
                <Header header ="Components" />
                <Search/>
               

            </View>
            <View style ={styles.buttons}>

                <ElementHeaders header ="Pages" onPress={null}/>
                <ElementHeaders header ="Action"/>
                <ElementHeaders header ="Form"/>
                <ElementHeaders header ="Elements"/>
            </View>
            <FlatList
            data={ElementData}
            renderItem ={renderElementData}
            />
        </ImageBackground>
    )
}