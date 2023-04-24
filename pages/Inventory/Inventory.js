import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import inventoryStyles from './Inventory.styles';
import ItemVisualization from './components/ItemVisualization/ItemVisualization';


export default function Inventory({navigation}) {
    function navigatePage(){
        navigation.navigate('NewItem')
    }

    return(
        <View style={inventoryStyles.mainContainerStyle}>
            <View style={inventoryStyles.titleLayout}>
                <Text style={inventoryStyles.textStyle}>Items</Text>
                <Pressable onPress={navigatePage} style={inventoryStyles.buttonStyle}>
                    <Text style={inventoryStyles.textStyle}>+ Add Item</Text>
                </Pressable> 
            </View>
            <ItemVisualization navigation={navigation}/>
        </View>
    );
}
