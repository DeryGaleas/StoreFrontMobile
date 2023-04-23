import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import itemFieldStyles from './ItemField.styles';

export default function ItemField(props) {
    const {fieldItem, fieldInfo, editMode} = props;

    return(
        <View style={itemFieldStyles.mainContainerStyle} >
            <Text style={[itemFieldStyles.fieldItemtextStyle]}>{fieldItem}</Text>
            {editMode ? <TextInput style={[itemFieldStyles.fieldItemInfotextStyle]} placeholder={fieldInfo}/> : <Text style={[itemFieldStyles.fieldItemInfotextStyle]}>{fieldInfo}</Text> }
            
        </View>
    );
}