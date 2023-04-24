import { Text, View, Dimensions, StyleSheet, TextInput, Pressable, Button } from 'react-native';
import newItemDetailStyles from './NewItemDetail.styles';
import NewItemField from '../NewItemField/NewItemField';
import { useForm, Controller } from "react-hook-form";


export default function NewItemDetail(props) {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const controlData={
        control: control,
        errors: errors,
      }

    function onSubmit(data){
        console.log(data);
    }
    return(
        <View style={newItemDetailStyles.mainContainer}>
            <View style={newItemDetailStyles.titleLayout}>
                <NewItemField controlData={controlData} fieldItem="SKU:" fieldInfo="Zxecrx8"/>
                <NewItemField controlData={controlData} fieldItem="Name:" fieldInfo="Coke"/>
                <NewItemField controlData={controlData} fieldItem="Stock:" fieldInfo="5"/>
                <View style={newItemDetailStyles.submitButtonContainer}>
                    <Button onPress={handleSubmit(onSubmit)} title='Submit'/>
                </View>
                
            </View>
        </View>
    );
}