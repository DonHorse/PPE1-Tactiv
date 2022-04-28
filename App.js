import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Register from "./components/Register";
import Main_Pedometer from "./components/Main_Pedometer";
import Login from "./components/Login";
import Historic from "./components/Historic";
import Activities from "./components/Activities";

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarBadgeStyle:'#F2BD2C'}}  >
                <Tab.Screen name="Home"  >
                    {() => (
                        <SettingsStack.Navigator>
                            <SettingsStack.Screen
                                name="Pedometer"
                                component={Main_Pedometer}
                                options={{
                                    title: 'My home',
                                    headerStyle: {
                                        backgroundColor: '#F2BD2C',
                                    },
                                    headerTintColor: '#242423',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',

                                    },
                                }}
                            />
                            <SettingsStack.Screen name="Login" component={Login} />
                            <SettingsStack.Screen name="Register" component={Register} />
                        </SettingsStack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="Second">
                    {() => (
                        <HomeStack.Navigator>
                            <HomeStack.Screen name="Activities" component={Activities} />
                            <HomeStack.Screen name="Historic" component={Historic} />
                        </HomeStack.Navigator>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}