import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function TextLink(props) {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.4} style={styles.link}>
      <Text  style={styles.text}>{props.children}</Text>
     </TouchableOpacity>
  );
}

TextLink.propTypes = {
    onPress: PropTypes.func,
};

TextLink.defaultProps = {
    onPress: null,
};

const styles = StyleSheet.create({
    link: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    text: {
        color: '#36B6B3',
        fontSize: 15,
    },
});