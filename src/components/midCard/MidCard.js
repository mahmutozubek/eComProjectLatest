import React from "react";
import { View,Text ,Image} from "react-native";
import styles from "./MidCard.style";
function MidCard({imageUrl,title,isFavorite,location}){
    return(
        <View style ={styles.container}>
            <View style ={styles.imageBody}>
                <Image style ={styles.image} source ={{uri:imageUrl}}/>
                <Image style ={styles.isFavorite} source={isFavorite ? {uri:"https://cdn-icons-png.flaticon.com/128/4340/4340223.png"} : null}/>

                <Text style ={styles.title}>{title}</Text>
               
                <Text style ={styles.location}>{location}</Text>
            </View>
            <Image style ={styles.locationImage} source ={{uri:" https://cdn-icons-png.flaticon.com/128/447/447031.png"}}/>
        </View>
    )
}
export default MidCard