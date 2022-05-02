import * as React from 'react';
import {useEffect, useState} from "react";
import {Button, View,  Text, Alert, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView,} from 'react-native';
import Axios from "axios";
import {styles} from "../styles/style";


export default function Activities ({navigation}) {

    const [loginStat, setLoginStat] = useState(false);
    const [activityList, setActivityList] = useState([]);
    const [user, setUser] = useState("");
    const [selectId, setSelectId] = useState(0);
    const [maj,setMaj] = useState(0);

    const SubscribeActivity = (id_activity) => {
        Axios.post("http://192.168.210.135:3001/TACTIV/activity-sub-user", {
            id_activity : id_activity,
        }).then((response) => {
            Alert.alert(response.data.message);
        }).catch(error => console.log(error));
    };

    useEffect(() => {
        Axios.get("http://192.168.210.135:3001/TACTIV/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStat(true);
                setUser(response.data.user[0].email);
            } else{
                setLoginStat(false);
                navigation.navigate("Login");
            }
        }).catch(error => console.log(error));
    },[]);

    useEffect(() => {
        Axios.get("http://192.168.210.135:3001/TACTIV/activity-list").then((response) => {
            setActivityList(response.data);
        }).catch(error => console.log(error));
    },);

    return(
        <ScrollView >

            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.textDarkBold}>Liste d'activité disponible :</Text>
                    </View>
                    <View style={styles.middle}>
                        {activityList.map((val) => {
                            return(
                                <View>
                                    <Text>{val.id}</Text>
                                    <Text>{val.name}</Text>
                                    <Text>{val.start_date}</Text>
                                    <Text>{val.end_date}</Text>
                                    <Text>{val.type}</Text>
                                    <Text>{val.description}</Text>
                                    <TouchableOpacity
                                    title="subscribe"
                                    onPress={() => {SubscribeActivity(val.id)}}
                                    style={styles.buttonDark2}
                                    >
                                    <Text style={styles.textLight}>Participer !</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </ScrollView>


    );
}