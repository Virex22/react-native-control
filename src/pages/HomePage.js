import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import ReturnButton from '../components/Button/ReturnButton';
import ContactCard from '../components/cards/ContactCard';

export default function HomePage({ navigation }) {
  const [contact , setContact] = React.useState([]);

  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      'title': 'Contacts',
      'message': 'This app wants to view your contacts'
    }).then((permition) => {
      console.log(permition);
      if (permition === 'granted') {
        Contacts.getAll().then((contacts) => {
          setContact(contacts);
        }).catch((err) => {
          console.log(err);
        })
      }
  })},[]);
  if (contact.length <= 0)
    return (<Text>Chargement ...</Text>);
   
  return (
    <>
      <View style={styles.header}>
        <ReturnButton navigation={navigation}/>
        <Text style={styles.headerText}>Vos contact</Text>
      </View>
      <ScrollView>
        {contact.map((contact, index) => {
          return (
            <ContactCard key={index} data={contact} onPress={()=>{navigation.navigate('ContactPage',contact )}}  />
            )
        })}
      </ScrollView>
     </>
  );
}

const styles = StyleSheet.create({
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
});
