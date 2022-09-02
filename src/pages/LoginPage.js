import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Button from '../components/Button/Button';
import InputText from '../components/input/InputText';
import TextLink from '../components/TextLink/TextLink';
import { login } from '../modules/apis/UserAPI';
import EncryptedStorage from 'react-native-encrypted-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Email_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export default function LoginPage({ navigation }) {
  const [passVisibility, setPassVisibility] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(true);
  const [password, setPassword] = React.useState('');

  async function storeToken(token) {
    try {
        await EncryptedStorage.setItem(
            "token",
            token
        );
    } catch (error) {
      console.error(error)
    }
}

  function switchPassVisibility() {
    setPassVisibility(!passVisibility);
    console.log(passVisibility);
  }

  function navigateToRegister() {
    navigation.navigate('RegisterPage');
  }
  function validation(){
    if (email != "" && password != "" && emailValid) {
      login(email, password).then((response) => {
        console.log(response);
        if (response.status == 200) {
          storeToken(response.token);
          navigation.navigate('HomePage');
        }
        else {
          Alert.alert("Erreur", "Email ou mot de passe incorrect");
        }
      }).catch((error) => {
        Alert.alert(error.message);
      });
    }
    else {
      Alert.alert("Erreur", "veuillez remplir les champs correctement");
    }
  }


  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.4} style={styles.infoButton} onPress = {() => {navigation.navigate('InformationPage')}}>
          <Icon name="information" size={30} color="#373737" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Page de connexion</Text>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.container}>
          <InputText model={setEmail}  placeholder="exemple@exemple.com" title="email : " validPattern={Email_PATTERN}/>
          <InputText model={setPassword} placeholder="" password={!passVisibility} title="mot de passe : " icon={passVisibility ?"eye":"eye-off" } onIconPress={switchPassVisibility}/>
          <Button text="valider" onPress={validation} ></Button>
          <TextLink onPress={navigateToRegister}>Cliquer ici pour vous inscrire</TextLink>
        </View>
      </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "30%",
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
  body: {
    height: "70%",
  },
  container: {
    padding : 10,
    justifyContent: 'center',
  },
  infoButton : {
    position: 'absolute',
    top: 5,
    right: 5,
  }
});

