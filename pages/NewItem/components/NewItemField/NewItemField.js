import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import newItemFieldStyles from './NewItemField.styles';

export default function NewItemField(props) {
    const {fieldItem, fieldInfo, editMode, controlData, } = props;
    const {control, error} = controlData;

    return(
        <View style={newItemFieldStyles.mainContainerStyle}>
            <Text style={newItemFieldStyles.fieldItemtextStyle}>{fieldItem}</Text>
            <Controller
               
                control={control}
                name={fieldItem}
                rules={{required:'The email is required'}}
                render={({field:{onBlur, value}}) => (
                    <TextInput
                        onBlur={onBlur}
                        style={newItemFieldStyles.fieldItemInfotextStyle}
                        value={value}
                        placeholder={fieldInfo}
                        placeholderTextColor={"gray"}
                    />
                )}
            />
        </View>
    );
}