import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor:'#e0e0e0',
        marginLeft:15,
        marginBottom:5,
        borderBottomColor:'gray',
        borderBottomWidth:1,
        
        flex:1,
        width:380,
        height:70,
        flexDirection:'row',

    },
    imageContainer:{
marginLeft:7,
       marginTop:5,
        width:50,
        height:50,
        borderRadius:25,
        
    },
    image:{
        width:50,
        height:50,
        borderRadius:25,
        flex:1,
    },
    textContainer:{
        marginLeft:10,
        padding:5,
        flex:1,
        flexDirection:'column',

    },
    name:{
        padding:2,
        fontWeight:'600',
        fontSize:17,

    },
    message:{
        fontWeight:'300',
    },
    notification:{
        paddingVertical: 10,
        alignItems: 'center',
        width: '22%'
    },
    imageNotification:{
        marginLeft:30,
        width:20,
        height:20,
    },
    hour:{
        marginRight:4,
        marginTop:10,
        color:'black',
    },
})
