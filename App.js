import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from "./src/screens/mainPage";
import MapPage from './src/screens/mapPage';
import AboutPage from './src/screens/aboutPage';

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainPage'>
        <Stack.Screen name="Home" 
        options={{
          title: 'Home',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: "#1a1a1a",  
        }}}>
          {(props) => <MainPage {...props} channelName={"undergrounds"}/>}
        </Stack.Screen>

        <Stack.Screen 
        name="MapPage"
        component={MapPage}
        options={{
          title: 'Map',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: "#1a1a1a",  
        }}}/>

        <Stack.Screen 
        name="AboutPage"
        component={AboutPage}
        options={{
          title: 'About',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: "#1a1a1a",  
        }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

