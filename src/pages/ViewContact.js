import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ReturnButton from '../components/Button/ReturnButton';


export default function ViewContact({route,navigation}) {
    
    let data = route.params;
    let image = data.hasThumbnail ? <Image source={{uri: data.thumbnailPath}} style={styles.image} /> : <></>;


  return (
    <>
        <View style={styles.header}>
            <ReturnButton navigation={navigation}/>
            <Text style={styles.headerText}>{data.displayName}</Text>
        </View>
        <View style={styles.container}>
                {image}
            <View style={styles.card}>
                <Text style={styles.text}>téléphone : {data.phoneNumbers[0].number}</Text>
                <Text style={styles.text}>nom afficher : {data.displayName}</Text>
                <Text style={styles.text}>entreprise : {data.compagny}</Text>
                <Text style={styles.text}>fonction : {data.jobTitle}</Text>
                <Text style={styles.text}>département : {data.department}</Text>
            </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        width: '80%',
        backgroundColor: '#e7e7e7',
        padding: 10,
        margin: 10,
        borderColor: '#36B6B3',
        borderWidth: 2,
        borderRadius: 10,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: "20%",
        backgroundColor: '#e7e7e7',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor : '#36B6B3',
        borderBottomWidth: 3,
      },
      headerText: {
        fontSize: 35,
        textAlign: 'center',
        color: '#36B6B3',
      },
      text: {
        fontSize: 18,
      },
        image: {
            width: 200,
            height: 200,
            borderRadius: 10,
            alignSelf: 'center',
        }
})