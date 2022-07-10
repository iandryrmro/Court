import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from "expo-font";

import Login from './components/Login'
import Register from './components/Register'
import Homescreen from "./components/Homescreen";

const stack = createNativeStackNavigator();



export default function App() {
  const [loaded] = useFonts({
    ProximaNovaRegular: require('./assets/fonts/ProximaNova-Regular.otf'),
    ProximaNovaBold: require('./assets/fonts/ProximaNovaBold.otf'),
    ProximaNovaLight: require('./assets/fonts/ProximaNovaAltLight.otf'),
  });

  if(!loaded){
    return null;
  }
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='Login' component={Login}/>
        <stack.Screen name='Register' component={Register}/>
        <stack.Screen name='Homescreen' component={Homescreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
