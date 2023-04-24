import { Text, View, Pressable } from 'react-native';
import NewItemDetail from './components/NewItemDetail/NewItemDetail';
import newItemStyles from './NewItem.styles';
import { useState } from 'react';


export default function NewItem() {
  
    return(
        <View style={newItemStyles.mainContainerStyle}>
            <View style={newItemStyles.titleLayout}>
                <Text style={newItemStyles.textStyle}>New Item</Text>

                
            </View>
            <NewItemDetail/>
        </View>
    );
}