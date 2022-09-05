import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Button from '../components/Button/Button';
import InputText from '../components/input/InputText';
import TextLink from '../components/TextLink/TextLink';
import { register } from '../modules/apis/UserAPI';
import ReturnButton from '../components/Button/ReturnButton';

const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const FRENCH_PHONE_PATTERN = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

const USERNAME_PATTERN = /^[a-zA-Z0-9._-]{3,20}$/;

export default function RegisterPage({ navigation }) {
  const [passVisibility, setPassVisibility] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(true);
  const [phone, setPhone] = React.useState('');
  const [phoneValid, setPhoneValid] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userNameValid, setUserNameValid] = React.useState(true);

  function validation(){
    if (emailValid && phoneValid && userNameValid) {
      register({email, phone, password, username : userName}).then((response) => {
        navigation.navigate('LoginPage');
      }).catch((error) => {
        Alert.alert(error.message);
      });
    }
  }
  function switchPassVisibility() {
    setPassVisibility(!passVisibility);
    console.log(passVisibility);
  }
  return (
    <View>
    <View style={styles.header}>
      <ReturnButton navigation={navigation}/>
      <Text style={styles.headerText}>Création de votre compte</Text>
    </View>
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <InputText placeholder="" model={setUserName} validModel={setUserNameValid} validPattern={USERNAME_PATTERN} title="Nom d'utilisateur : "/>
        <InputText placeholder="" model={setPassword}  password={!passVisibility} title="mot de passe : " icon={passVisibility ?"eye":"eye-off"} onIconPress={switchPassVisibility}/>
        <InputText placeholder="exemple@exemple.exemple" model={setEmail}    validModel={setEmailValid} title="email : "  validPattern={EMAIL_PATTERN} onIconPress={switchPassVisibility}/>
        <InputText placeholder="" model={setPhone}    validModel={setPhoneValid} title="téléphone : "  validPattern={FRENCH_PHONE_PATTERN} onIconPress={switchPassVisibility}/>
        <Button text="valider" onPress={validation} ></Button>
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
});
