import { StyleSheet } from 'react-native';

const newItemFieldStyles = StyleSheet.create({
    mainContainerStyle:{
        flexDirection:"row",
        marginBottom: 8
    },


    titleLayout:{
        marginTop:45,
        marginBottom:40,

    },
    fieldItemtextStyle:{
        fontSize:20,
        fontWeight:"bold",
        padding:5,
        color:"#0C090D",
        width:"30%"
    },
    fieldItemInfotextStyle:{
        fontSize:20,
        padding:5,
        color:"#0C090D",
        width:"60%",
        borderColor:"#0C090D",
        borderWidth:1,
        borderStyle:"solid"
    },

  });
  
export default newItemFieldStyles;