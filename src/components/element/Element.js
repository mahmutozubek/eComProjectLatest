import React, { useState } from "react";
import {View,ImageBackground, FlatList} from 'react-native'

import styles from './Element.style'
import Header from "../headerMenu/Header";
import Search from '../search/Search'
import ElementHeaders from "./elementcomponents/elementHeaders";
import ElementData from '../../elements.json'
import ElementBody from "./elementcomponents/ElementBody";
export default  function Element({navigation}){
    const image ={uri:"https://i.hizliresim.com/6ep42tk.png"}
    const renderElementData =({item}) => <ElementBody {...item}/>
    
    function navigateToSideScreen(){
        navigation.navigate('SideScreen')
    }
    function navigateToShopingScreen(){
        navigation.navigate("ShopingScreen")
     }
  
   

        const [list ,setList] = useState(ElementData.filter(product =>product.header ==="Pages"))
        function FilterPages()
        { 
           const favoritesProducts =ElementData.filter(product =>product.header ==="Pages")
           setList(favoritesProducts)
        }
        function FilterAction()
        { 
           const favoritesProducts =ElementData.filter(product =>product.header ==="Action")
           setList(favoritesProducts)
        }
        function FilterForm()
        { 
           const favoritesProducts =ElementData.filter(product =>product.header ==="Form")
           setList(favoritesProducts)
        }
        function FilterElements()
        { 
           const favoritesProducts =ElementData.filter(product =>product.header ==="Elements")
           setList(favoritesProducts)
        }

    return(
        


        <ImageBackground style ={{flex:1}} source={image} resizeMode ="cover">

            <View style ={styles.container}>
                <Header header ="Components" onPressShoping={navigateToShopingScreen} onPressDrawer={navigateToSideScreen}/>
                <Search/>
               

            </View>
            <View style ={styles.buttons}>

                <ElementHeaders header ="Pages" onPress={FilterPages}/>
                <ElementHeaders header ="Action"  onPress={FilterAction}/>
                <ElementHeaders header ="Form"  onPress={FilterForm}/>
                <ElementHeaders header ="Elements"  onPress={FilterElements}/>
            </View>
            <FlatList
            data={list}
            renderItem ={renderElementData}
            />
        </ImageBackground>
    )
}