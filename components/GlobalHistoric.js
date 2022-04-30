import * as React from 'react';
import {useEffect, useState} from "react";
import {Button, View,  Text, Alert, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView,} from 'react-native';
import Axios from "axios";
import {styles} from "../styles/style";


export default function GlobalHistoric ({navigation}) {

    const [loginStat, setLoginStat] = useState(false);
    const [goalList, setGoalList] = useState([]);
    const [measureList, setMeasureList] = useState([]);
    const [user, setUser] = useState("");
    const [maj, setMaj] = useState(0);


    useEffect(() => {
        Axios.get("http://192.168.1.85:3001/TACTIV/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStat(true);
                setUser(response.data.user[0].email);
            } else{
                setLoginStat(false);
                setMaj(maj +1);

            }
        }).catch(error => console.log(error));
    });

    useEffect(() => {
        Axios.get("http://192.168.1.85:3001/TACTIV/historic-goal-global").then((response) => {
            setGoalList(response.data);
        }).catch(error => console.log(error));
    },[]);

    useEffect(() => {
        Axios.get("http://192.168.1.85:3001/TACTIV/historic-measure-global").then((response) => {
            setMeasureList(response.data);

        }).catch(error => console.log(error));
    },[]);

    return(
        <ScrollView >
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.textDarkBold}>Objectifs</Text>

                    </View>
                    <View style={styles.middle}>
                        {goalList.map((val) => {
                            return(
                                <View>
                                    <Text>{val.name}</Text>
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
                                    <Text>{val.name}</Text>
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