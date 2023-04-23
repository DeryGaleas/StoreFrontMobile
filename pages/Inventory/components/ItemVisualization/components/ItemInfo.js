import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import itemVisualizationStyles from '../ItemVisualization.styles';

export default function ItemInfo() {
  
    return(
        <View>
            <View style={[itemVisualizationStyles.itemDisplayLayout, itemVisualizationStyles.itemInfoStyle]}>
                <Text style={[itemVisualizationStyles.idWidth, itemVisualizationStyles.itemTextStyle]}>Sxe234</Text>
                <Text style={[itemVisualizationStyles.nameWidth, itemVisualizationStyles.itemTextStyle]}>Coke</Text>
                <Pressable style={[itemVisualizationStyles.detailWidth, itemVisualizationStyles.detailButtonStyle]}>
                    <Text style={[itemVisualizationStyles.itemTextStyle, itemVisualizationStyles.detailButtonText]}>Detail</Text>
                </Pressable>
            </View>
        </View>
    );
}
