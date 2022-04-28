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
                            <SettingsStack.Screen
                                name="Login"
                                component={Login}
                                options={{
                                    title: 'Login',
                                    headerStyle: {
                                        backgroundColor: '#F2BD2C',
                                    },
                                    headerTintColor: '#242423',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',

                                    },
                                }}
                            />
                            <SettingsStack.Screen
                                name="Register"
                                component={Register}
                                options={{
                                    title: 'Register',
                                    headerStyle: {
                                        backgroundColor: '#F2BD2C',
                                    },
                                    headerTintColor: '#242423',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',

                                    },
                                }}
                            />
                        </SettingsStack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="Historique"  >
                    {() => (
                        <HomeStack.Navigator>
                            <HomeStack.Screen
                                name="Historic"
                                component={Historic}
                                options={{
                                    title: 'Historique',
                                    headerStyle: {
                                        backgroundColor: '#F2BD2C',
                                    },
                                    headerTintColor: '#242423',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                        </HomeStack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="Activités">
                    {() => (
                        <HomeStack.Navigator>
                            <HomeStack.Screen
                                name="Activities"
                                component={Activities}
                                options={{
                                    title: 'Activités',
                                    headerStyle: {
                                        backgroundColor: '#F2BD2C',
                                },
                                    headerTintColor: '#242423',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                            },
                                }}
                                />
                        </HomeStack.Navigator>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}