import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.7} style={customStyle.component}>
        <Text style={customStyle.title}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const customStyle = StyleSheet.create({
    component: {
        width: "70%",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#36B6B3',
        height: 50,
        borderRadius: 10,
        margin: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#e7e7e7',
    },
});

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
};

Button.defaultProps = {
    text: "",
    onPress: null,
};

