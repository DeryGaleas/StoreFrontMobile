import { Text, View, Pressable, Button } from 'react-native';
import itemVisualizationStyles from '../ItemVisualization.styles';
import DetailView from '../../../../DetailView/DetailView';

export default function ItemInfo({navigation}) {
    
    function navigatePage(){
        navigation.navigate('DetailView')
    }

    return(
        <View>
            <View style={[itemVisualizationStyles.itemDisplayLayout, itemVisualizationStyles.itemInfoStyle]}>
                <Text style={[itemVisualizationStyles.idWidth, itemVisualizationStyles.itemTextStyle]}>Sxe234</Text>
                <Text style={[itemVisualizationStyles.nameWidth, itemVisualizationStyles.itemTextStyle]}>Coke</Text>
                <Pressable onPress={navigatePage} style={[itemVisualizationStyles.detailWidth, itemVisualizationStyles.detailButtonStyle]}>
                    <Text style={[itemVisualizationStyles.itemTextStyle, itemVisualizationStyles.detailButtonText]}>Detail</Text>
                </Pressable>
            </View>
        </View>
    );
}
