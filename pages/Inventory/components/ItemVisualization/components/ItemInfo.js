import { Text, View, Pressable, Button } from 'react-native';
import itemVisualizationStyles from '../ItemVisualization.styles';
import DetailView from '../../../../DetailView/DetailView';

export default function ItemInfo(props) {
    const {navigation, itemId, itemName} = props;
    function navigatePage(){
        navigation.navigate('DetailView')
    }

    return(
        <View>
            <View style={[itemVisualizationStyles.itemDisplayLayout, itemVisualizationStyles.itemInfoStyle]}>
                <Text style={[itemVisualizationStyles.idWidth, itemVisualizationStyles.itemTextStyle]}>{itemId}</Text>
                <Text style={[itemVisualizationStyles.nameWidth, itemVisualizationStyles.itemTextStyle]}>{itemName}</Text>
                <Pressable onPress={navigatePage} style={[itemVisualizationStyles.detailWidth, itemVisualizationStyles.detailButtonStyle]}>
                    <Text style={[itemVisualizationStyles.itemTextStyle, itemVisualizationStyles.detailButtonText]}>Detail</Text>
                </Pressable>
            </View>
        </View>
    );
}
