import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import HomePage from './src/pages/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewContact from './src/pages/ViewContact';
import InformationPage from './src/pages/InformationPage';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ animationEnabled: false }}>
            <Stack.Screen name="LoginPage" component={LoginPage} options={screenOption}/> 
            <Stack.Screen name="RegisterPage" component={RegisterPage} options={screenOption}/>
            <Stack.Screen name="HomePage" component={HomePage} options={screenOption}/>
            <Stack.Screen name="ContactPage" component={ViewContact} options={screenOption}/>
            <Stack.Screen name="InformationPage" component={InformationPage} options={screenOption}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
};

const screenOption = {
  headerShown: false,
  animation : "none",
}

export default App;
