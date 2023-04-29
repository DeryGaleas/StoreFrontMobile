import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import newItemFieldStyles from "./NewItemField.styles";


export default function NewItemField(props) {
  const {
    fieldItem,
    fieldInfo,
    inputName,
    errors,
    keyboardType,
    control,
    Controller,
    setValue
  } = props;
  //const { control, register, formState: { errors } } = useForm();

  return (
    <View style={newItemFieldStyles.mainContainerStyle}>
      <Text style={newItemFieldStyles.fieldItemtextStyle}>{fieldItem}</Text>
      <Controller
        control={control}
        name={inputName}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            onBlur={onBlur}
            value={value}
            style={newItemFieldStyles.fieldItemInfotextStyle}
            placeholder={fieldInfo}
            keyboardType={keyboardType}
            placeholderTextColor={"gray"}
            onChangeText={onChange}
          />
        )}
      />
    </View>
  );
}
