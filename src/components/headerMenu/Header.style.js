import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{flex:1,
    height:80},
    topArea:{
        justifyContent:'space-between',
        height:40,
        
        margin:16,
        padding:6,
        flexDirection:'row',
    },
    title:{
        letterSpacing:1,
        fontStyle:'italic',
        fontSize:19,
        fontWeight:400,
    },
    header:{
        
        marginTop:3,
        marginLeft:15,
        fontSize:35,
        fontWeight:'600'
    },
    x:{
        width:30,
        height:30,
    }
    
})