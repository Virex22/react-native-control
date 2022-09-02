import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

export default function ContactCard(props) {
    if (props.data.phoneNumbers[0] === undefined ||
        props.data.displayName === undefined)
        return (<></>);
  return (

    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={styles.container} >
        <Text style={styles.name}>{props.data.displayName ?? ""} </Text>
        <Text style={styles.number}>{props.data.phoneNumbers[0].number} </Text>
     </TouchableOpacity>
  );
}

ContactCard.propTypes = {
    data: PropTypes.object.isRequired,
    onPress: PropTypes.func,
}

ContactCard.defaultProps = {
    data: {},
    onPress: null,
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        padding: 10,
        margin: 10,
        borderColor: '#36B6B3',
        borderWidth: 2,
        borderRadius: 10,
    },
    number: {
        fontSize: 15,
        textAlign: 'center',
        color: '#36B6B3',
    },
    name: {
        fontSize: 20,
        textAlign: 'center',
        color: '#575757',
    },

})

