import { StyleSheet } from "react-native";
export default StyleSheet.create({
    title:{
        fontSize:55,
    }
    ,image:{
        
        flex:1
    },
    dataContainer:{flex:1,flexDirection:'row',backgroundColor:'white',marginHorizontal:20,height:100,alignItems:'center',borderBottomWidth:1},
    imageContainer:{},
    shopingImage:{height:65,width:65,borderRadius:10,margin:10,},
    textContainer:{flex:1,marginLeft:5,},
    textTitle:{fontSize:18,fontWeight:'bold'},
    textLocation:{fontWeight:'300'},
    textReview:{marginLeft:3,fontWeight:'300'},
    deleteImage:{height:20,width:20,marginRight:10,marginBottom:18,}
})