import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InputText(props) {
  const [text , setText] = React.useState(props.defaultValue);
  const [valid, setValid] = React.useState(true);

  function onChangeText(text) {
    if (props.validPattern){
      if (text != null && text != ""){
        setValid(props.validPattern.test(text));
        if (props.validModel)
          props.validModel(props.validPattern.test(text));
      }
      else
        setValid(true);
    }
    setText(text);
    if (props.model)
      props.model(text);
  }
  let icon = null;

  function onIconPress(  )
  {
    if (props.onIconPress)
      props.onIconPress();
  }

  if (props.icon)
    icon = <TouchableOpacity onPress={onIconPress} style={customStyle.icon} activeOpacity={0.4}><Icon name={props.icon} size={20} color="#000" /></TouchableOpacity>;


  return (
    <View style={customStyle.component}>
      <Text style = {customStyle.title} >{props.title} </Text>
      <TextInput
                style = {[customStyle.input, valid ? customStyle.invalid : {borderColor : "red"}]}
                secureTextEntry={props.password} 
                onChangeText={onChangeText}
                placeholder={props?.placeholder ?? ""}
                value={text}
            />
        {icon}
     </View>
  );
}

InputText.propTypes = {
  password: PropTypes.bool,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  defaultValue: PropTypes.string,
  model: PropTypes.func,
  icon: PropTypes.string,
  onIconPress: PropTypes.func,
  validPattern: PropTypes.any,
  validModel: PropTypes.func,
};

InputText.defaultProps = {
  password: false,
  placeholder: "",
  title: "",
  defaultValue: "",
  model: null,
  icon: null,
  onIconPress: null,
  validPattern: null,
  validModel: null,
};

const customStyle = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#36B6B3',
    padding: 10,
    borderRadius: 5
  },
  title: {
    fontSize: 18
  },
  component: {
    marginVertical: 5,
    marginHorizontal: 25
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 37.5
  }
});






