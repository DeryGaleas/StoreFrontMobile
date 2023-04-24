import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import ItemInfo from './components/ItemInfo';
import itemVisualizationStyles from './ItemVisualization.styles';

export default function ItemVisualization({navigation}) {
  
    return(
        <View>
            <View style={itemVisualizationStyles.itemDisplayLayout}>
                <Text style={[itemVisualizationStyles.idWidth, itemVisualizationStyles.titleStyle]}>ID</Text>
                <Text style={[itemVisualizationStyles.nameWidth, itemVisualizationStyles.titleStyle]}>Name</Text>
                <View style={[itemVisualizationStyles.detailWidth, itemVisualizationStyles.titleStyle]}></View>
            </View>
            <ItemInfo itemId="Sxe234" itemName="Coke" navigation={navigation}/>
        </View>
    );
}
