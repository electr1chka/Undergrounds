import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from "./src/screens/MainPage";
import MapPage from './src/screens/MapPage';
import AboutPage from './src/screens/AboutPage';
import SetupPage from './src/screens/SetupPage';

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
            }
          }}>
          {(props) => <MainPage {...props} channelName={"undergrounds"} />}
        </Stack.Screen>

        <Stack.Screen
          name="MapPage"
          component={MapPage}
          options={{
            title: 'Map',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: "#1a1a1a",
            }
          }} />

        <Stack.Screen
          name="SetupPage"
          component={SetupPage}
          options={{
            title: 'Setup',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: "#1a1a1a",
            }
          }} />

        <Stack.Screen
          name="AboutPage"
          component={AboutPage}
          options={{
            title: 'About',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: "#1a1a1a",
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

