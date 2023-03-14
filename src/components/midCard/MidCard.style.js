import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        
        flex:1,
        height:400,
    },
    imageBody:{
        marginHorizontal:10,
        
        borderRadius:25,
        width:260,
        height:410,
    },
    image:{
        flex:1,
        borderRadius:25,
        width:260,
        height:410,
    },
    title:{
        position:'absolute',
        top:300,
        left:20,
        color:'#e0e0e0',
        fontSize:23,
        fontWeight:'bold',
    },location:{
        position:'absolute',
        top:360,
        left:20,
        color:'#708090',
        fontSize:18,
        fontWeight:'600',
    },
    isFavorite:{
        left:20,
        top:20,
        position:'absolute',
        width:40,
        height:40,
        borderRadius:25,
    },
    locationImage:{
        zIndex:1,
        top:350,
       
       position:'absolute',
        width:30,
        height:30,
    },
    locationAndImage:{
        
       

    }
})