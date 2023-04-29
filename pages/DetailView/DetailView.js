import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import ItemDetail from './components/ItemDetail/ItemDetail';
import detailViewStyles from './DetailView.styles';
import { useState } from 'react';


export default function DetailView() {
    const [editMode, setEditMode] = useState(false);

    const handleEditPress = () =>{
        setEditMode(!editMode);
    }
    return(
        <View style={detailViewStyles.mainContainerStyle}>
            <View style={detailViewStyles.titleLayout}>
                <Text style={detailViewStyles.textStyle}>Item Coke</Text>
                <Pressable onPress={handleEditPress} style={detailViewStyles.editButtonContainer}>
                    <Text style={detailViewStyles.textStyle}>{editMode? "Back" :"Edit"}</Text>
                </Pressable>
                
            </View>
            <ItemDetail editMode={editMode}/>
        </View>
    );
}
