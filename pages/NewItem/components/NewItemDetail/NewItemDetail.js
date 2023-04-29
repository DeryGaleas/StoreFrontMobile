import { Text, View, Dimensions, StyleSheet, TextInput, Pressable, Button } from 'react-native';
import newItemDetailStyles from './NewItemDetail.styles';
import NewItemField from '../NewItemField/NewItemField';
import { useForm, Controller } from "react-hook-form";
import { gql, useMutation } from '@apollo/client/main.cjs';


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
`;

export default function NewItemDetail(props) {
    const { control, handleSubmit,setValue, formState: { errors } } = useForm();
    const [addItem, {}] = useMutation(CreateItem)

    const onSubmit = async (data) =>{
        //const newData =JSON.stringify(data)
        for(let key of Object.keys(data)){
            data[key] = Number(data[key]) || data[key]
        }
        console.log(data)
        await addItem({variables: {input:data}}).catch(errors =>{console.log(errors.stack)})
    }
    

    return(
        <View style={newItemDetailStyles.mainContainer}>
            <View style={newItemDetailStyles.titleLayout}>
                <NewItemField setValue={setValue} Controller={Controller} control={control} keyboardType="default"  errors={errors} inputName="name" fieldItem="Name:" fieldInfo="Coke"/>
                <NewItemField setValue={setValue} Controller={Controller} control={control} keyboardType="numeric"  errors={errors} inputName="cost" fieldItem="Cost:" fieldInfo="Zxecrx8"/>
                <NewItemField setValue={setValue} Controller={Controller} control={control} keyboardType="numeric"  errors={errors} inputName="currentStock" fieldItem="Stock:" fieldInfo="5"/>
                <View style={newItemDetailStyles.submitButtonContainer}>
                    <Button onPress={handleSubmit(onSubmit)} title='Submit' type="submit"/>
                </View>
            </View>
        </View>
    );
}
