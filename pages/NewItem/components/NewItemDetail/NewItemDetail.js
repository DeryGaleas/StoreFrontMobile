import { Text, View, Dimensions, StyleSheet, TextInput, Pressable, Button } from 'react-native';
import newItemDetailStyles from './NewItemDetail.styles';
import NewItemField from '../NewItemField/NewItemField';
import { useForm, Controller } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';


const CreateItem = gql`
mutation addItem($input: CreateInventoryInput!) {
    createModel(input: $input) {
      ... on InventoryType {
        id
        cost
        creationDate
        currentStock
        name
      }
    }
  }
`

export default function NewItemDetail(props) {
    const [addItem, { data, loading, error }] = useMutation(CreateItem);
    const { control, handleSubmit, formState: { errors } } = useForm();
    const controlData={
        control: control,
        errors: errors,
      }

    const onSubmit = (data) =>{
        console.log('herllo')
        alert("byr")
        addItem({
            variables:{
                input: data
            }
        })
    }
    return(
        <View style={newItemDetailStyles.mainContainer}>
            <View style={newItemDetailStyles.titleLayout}>
                <NewItemField controlData={controlData} inputName="name" fieldItem="Name:" fieldInfo="Zxecrx8"/>
                <NewItemField controlData={controlData} inputName="cost" fieldItem="Cost:" fieldInfo="Coke"/>
                <NewItemField controlData={controlData} inputName="currentStock" fieldItem="Stock:" fieldInfo="5"/>
                <View style={newItemDetailStyles.submitButtonContainer}>
                    <Button onPress={handleSubmit(onSubmit)} title='Submit' type="submit"/>
                </View>
                
            </View>
        </View>
    );
}