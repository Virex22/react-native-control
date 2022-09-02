import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ReturnButton from '../components/Button/ReturnButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InformationPage({navigation}) {
  return (
    <>
        <View style={styles.header}>
            <ReturnButton navigation={navigation}/>
            <Text style={styles.headerText}>Information</Text>
        </View>
        <ScrollView>
            <Text style={styles.title} >Fonctionnalités dispo</Text>  
            <Text style={styles.paragraph} >● Possibilité de crée un compte en indiquant son email, son username, mot de passe, et son numéro de téléphone</Text>  
            <Text style={styles.paragraph} >● Champs d'email, d'username et téléphone s'affiche en rouge si il ne corrésponde pas à une certaine REGEX</Text>  
            <Text style={styles.paragraph} >● Login possible (il n'y a pas de message d'erreur si le login est mauvais)</Text>
            <Text style={styles.paragraph} >● Une fois connecter le token est enregistrer dans le téléphone et une redirection se fait sur une page de listing de contact (mais je n'ai pas eu le temps de l'utiliser pour quoi que ce soit)</Text>
            <Text style={styles.paragraph} >● sur les pages de contacts il est possible de cliquer dessus pour voir afficher une carte de contact</Text>
            <Text style={styles.paragraph} >● si un contact à une image sur l'application contact du téléphone l'image s'affiche (j'ai testé en mettant une photo de profile sur mon propre contact)</Text>
            <Text style={styles.title} >idée de base</Text>
            <Text style={styles.paragraph} >● le but de base était de faire une application pour voir le nombre de "connection" entre deux personne, un peu comme Linkedin avec les personnes 1e, 2e, 3e+</Text>
            <Text style={styles.paragraph} >● il faut bien sûr qu'il y est beaucoup de personnes inscrit pour que ça marche mais c'était l'idée </Text>

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
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: '#36B6B3',
    },
    paragraph: {
        marginHorizontal: 10,
        marginBottom: 5,
        textAlign: 'justify',
        fontSize: 17,
        color: '#575757',
    },
})
