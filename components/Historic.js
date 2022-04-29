import * as React from 'react';
import {useEffect, useState} from "react";
import {Button, View,  Text, Alert, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView,} from 'react-native';
import Axios from "axios";
import {styles} from "../styles/style";


export default function Historic ({navigation}) {

    const [loginStat, setLoginStat] = useState(false);
    const [goalList, setGoalList] = useState([]);
    const [measureList, setMeasureList] = useState([]);
    const [user, setUser] = useState("");


    useEffect(() => {
        Axios.get("http://192.168.1.85:3001/TACTIV/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStat(true);
                setUser(response.data.user[0].email);
            } else{
                setLoginStat(false);
                navigation.navigate("Login");
            }
        }).catch(error => console.log(error));
    });

    useEffect(() => {
        Axios.get("http://192.168.1.85:3001/TACTIV/hostoric-goal-user").then((response) => {
            setGoalList(response.data);
        }).catch(error => console.log(error));
    },[]);

    useEffect(() => {
        Axios.get("http://192.168.1.85:3001/TACTIV/hostoric-measure-user").then((response) => {
            setMeasureList(response.data);
        }).catch(error => console.log(error));
    },[]);

    console.log(goalList);
    console.log(measureList);
    return(
        <ScrollView >
            <Text style={styles.textDarkBold}>{user}</Text>
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.textDarkBold}>Objectifs</Text>

                    </View>
                    <View style={styles.middle}>
                        {goalList.map((val) => {
                            return(
                                <View>
                                    <Text>{val.date}</Text>
                                    <Text>{val.count}</Text>
                                    <Text>{val.validation}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>

            </ScrollView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.textDarkBold}>Mesures</Text>
                    </View>
                    <View style={styles.middle}>
                        {measureList.map((val) => {
                            return(
                                <View>
                                    <Text>{val.date}</Text>
                                    <Text>{val.count}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>

            </ScrollView>
        </ScrollView>


    );
}