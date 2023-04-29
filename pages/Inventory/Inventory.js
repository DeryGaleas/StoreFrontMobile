import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import inventoryStyles from './Inventory.styles';
import ItemVisualization from './components/ItemVisualization/ItemVisualization';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';




export default function Inventory({navigation}) {
    function navigatePage(){
        navigation.navigate('NewItem')
    }
    const [itemData, setItemData] = useState([]);
    const { loading, error, data } = useQuery(gql`
    query allItems 
        {
            items {
              id
              name
              creationDate
              cost
              currentStock
            }
      }
    `, {
        onCompleted: data => {
            if (data){
                setItemData(data.items);
            }
        },
        pollInterval:1000

    });


    return(
        <View style={inventoryStyles.mainContainerStyle}>
            <View style={inventoryStyles.titleLayout}>
                <Text style={inventoryStyles.textStyle}>Items</Text>
                <Pressable onPress={navigatePage} style={inventoryStyles.buttonStyle}>
                    <Text style={inventoryStyles.textStyle}>+ Add Item</Text>
                </Pressable> 
            </View>
            <ItemVisualization itemData={itemData} setItemData={setItemData} navigation={navigation}/>
        </View>
    );
}
