import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ReturnButton({navigation}) {
  return (
    <TouchableOpacity style={ {position : "absolute", top:0,left:0} } onPress={navigation.goBack}>
        <Icon name="arrow-left" size={30} color="#373737" />
    </TouchableOpacity>
  );
}
