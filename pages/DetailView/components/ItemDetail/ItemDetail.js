import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import itemDetailStyles from './ItemDetail.styles';
import ItemField from '../ItemField/ItemField';
import { useForm, Controller } from "react-hook-form";
import { gql, useQuery } from '@apollo/client/main.cjs';


const UpdateItem = gql`
mutation updateItem($input: UpdateInventoryInput!) {
    updateModel(input: $input) {
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





export default function ItemDetail(props) {
    const {editMode} = props;
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();

    function onSubmit(data){
        console.log(data);
    }

    const { loading, error, data } = useQuery(gql`
        query queryItems 
            {
                items {
                id
                name
                creationDate
                cost
                currentStock
                }
        }
        `, {
            onCompleted: data => {
                if (data){
                    console.log(data);
                }
                
            },
            pollInterval:2000

    });
    
    return(
        <View style={itemDetailStyles.mainContainer}>
            <View style={itemDetailStyles.titleLayout}>
                  
                <ItemField  editMode={false} fieldItem="ID:" fieldInfo="Sxe237"/>
                <ItemField setValue={setValue} Controller={Controller} control={control} keyboardType="default" errors={errors} editMode={editMode} inputName="name" fieldItem="Name:" fieldInfo="Coke"/>
                <ItemField setValue={setValue} Controller={Controller} control={control} keyboardType="numeric"  errors={errors} inputName="cost" editMode={editMode} fieldItem="Cost" fieldInfo="25.5"/>
                <ItemField setValue={setValue} Controller={Controller} control={control} keyboardType="numeric"  errors={errors} inputName="currentStock" editMode={editMode} fieldItem="Stock" fieldInfo="15"/>
                {editMode? 
                <Pressable style={itemDetailStyles.submitButtonContainer}>
                    <Text style={itemDetailStyles.textStyle}>Update</Text>
                </Pressable>
                :null}
            </View>
        </View>
    );
}