import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import inventoryStyles from './Inventory.styles';
import ItemVisualization from './components/ItemVisualization/ItemVisualization';


export default function Inventory() {
  
    return(
        <View style={inventoryStyles.mainContainerStyle}>
            <View style={inventoryStyles.titleLayout}>
                <Text style={inventoryStyles.textStyle}>Items</Text>
                <Pressable style={inventoryStyles.buttonStyle}>
                    <Text style={inventoryStyles.textStyle}>+ Add Item</Text>
                </Pressable> 
            </View>
            <ItemVisualization/>
        </View>
    );
}
