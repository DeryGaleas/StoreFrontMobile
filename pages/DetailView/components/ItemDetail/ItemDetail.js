import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import itemDetailStyles from './ItemDetail.styles';
import ItemField from '../ItemField/ItemField';

export default function ItemDetail(props) {
    const {editMode} = props
    return(
        <View style={itemDetailStyles.mainContainer}>
            <View style={itemDetailStyles.titleLayout}>
                <ItemField editMode={editMode} fieldItem="ID:" fieldInfo="Sxe237"/>
                <ItemField editMode={editMode} fieldItem="SKU:" fieldInfo="coke85476"/>
                <ItemField editMode={editMode} fieldItem="NAME:" fieldInfo="Coke"/>
                <ItemField editMode={false} fieldItem="Creation Date:" fieldInfo="23/04/2023"/>
                {editMode? 
                <Pressable style={itemDetailStyles.submitButtonContainer}>
                    <Text style={itemDetailStyles.textStyle}>Submit</Text>
                </Pressable>
                :null}
            </View>
        </View>
    );
}