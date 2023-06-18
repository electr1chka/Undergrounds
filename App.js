import React from 'react';

import { NavigationContainer } from "@react-navigation/native";

import {AlarmStateApiDataProvider} from "./src/context/AlarmStateApiDataProvider";
import {AppNavigator} from "./src/AppNavigator";

export default function App() {
  return (
    <AlarmStateApiDataProvider>
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    </AlarmStateApiDataProvider>
  )
}

