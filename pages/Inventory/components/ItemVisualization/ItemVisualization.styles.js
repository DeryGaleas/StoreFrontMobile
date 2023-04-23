import { StyleSheet, Dimensions } from 'react-native';


const itemVisualizationStyles = StyleSheet.create({


   itemDisplayLayout:{
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-around"
   },
   itemInfoStyle:{
    borderTopWidth: 1,
    borderTopColor: "#6B7D7D",
    borderTopStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#6B7D7D",
    borderBottomStyle: "solid",
    paddingTop:5,
    paddingBottom:5,
   },
   idWidth:{
    width:"25%",
   
   },
   nameWidth:{
    width:"25%",
   
   },
   detailWidth:{
    width:"25%",
    
   },
   
   buttonStyle:{
    backgroundColor:"#97EAD2"
   },

   titleStyle:{
    fontSize:20,
    fontWeight:"bold",
    color:"#0C090D",
   },

   itemTextStyle:{
    fontSize:18,
    color:"#0C090D",
   },

   detailButtonStyle:{
    backgroundColor:"#97EAD2",
    borderWidth:1,
    borderColor:"#6B7D7D",
    borderStyle:"solid"
   },

   detailButtonText:{
    textAlign:"center"
   }

  });
  
export default itemVisualizationStyles;