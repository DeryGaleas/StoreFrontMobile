import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import itemDetailStyles from './ItemDetail.styles';
import ItemField from '../ItemField/ItemField';
import { useForm, Controller } from "react-hook-form";

export default function ItemDetail(props) {
    const {editMode} = props;
    const { control, handleSubmit, formState: { errors } } = useForm();
    const controlData={
        control: control,
        errors: errors,
    }

    function onSubmit(data){
        console.log(data);
    }
    
    return(
        <View style={itemDetailStyles.mainContainer}>
            <View style={itemDetailStyles.titleLayout}>
                  
                <ItemField controlData={controlData} editMode={editMode} fieldItem="ID:" fieldInfo="Sxe237"/>
                <ItemField controlData={controlData} editMode={editMode} fieldItem="SKU:" fieldInfo="coke85476"/>
                <ItemField controlData={controlData} editMode={editMode} fieldItem="NAME:" fieldInfo="Coke"/>
                <ItemField controlData={controlData} editMode={false} fieldItem="Creation Date:" fieldInfo="23/04/2023"/>
                {editMode? 
                <Pressable style={itemDetailStyles.submitButtonContainer}>
                    <Text style={itemDetailStyles.textStyle}>Update</Text>
                </Pressable>
                :null}
            </View>
        </View>
    );
}