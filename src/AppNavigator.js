import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from "./screens/MainPage";
import MapPage from "./screens/MapPage";
import SetupPage from "./screens/SetupPage";
import AboutPage from "./screens/AboutPage";

const Stack = createNativeStackNavigator();

export function AppNavigator() {
    return (
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
                    title: 'Call',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: "#1a1a1a",
                    }
                }} />
        </Stack.Navigator>
    );
}
