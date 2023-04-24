import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import itemFieldStyles from './ItemField.styles';
import { Controller } from "react-hook-form";

export default function ItemField(props) {
    const {fieldItem, fieldInfo, editMode, controlData} = props;
    const {control} = controlData;


    return(
        <View style={itemFieldStyles.mainContainerStyle} >
            <Text style={[itemFieldStyles.fieldItemtextStyle]}>{fieldItem}</Text>
            {editMode ? <Controller
                            control={control}
                            name={fieldItem}
                            render={({field:{onBlur, value}}) => (
                                <TextInput
                                    onBlur={onBlur} 
                                    style={[itemFieldStyles.fieldItemInfotextStyle]}
                                    value={value} 
                                    placeholder={fieldInfo}
                                    placeholderTextColor={"gray"}
                                />      
                            )}
                        />
            : <Text style={[itemFieldStyles.fieldItemInfotextStyle]}>{fieldInfo}</Text> }
        </View>
    );
}