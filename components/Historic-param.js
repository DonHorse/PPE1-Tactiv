import * as React from 'react';
import {useEffect, useState} from "react";
import {Button, View,  Text, Alert, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView,} from 'react-native';
import Axios from "axios";
import {styles} from "../styles/style";


export default function HistoricParam ({navigation}){

    const [loginStat, setLoginStat] = useState(false);
    const [periode, setPeriode] = useState("");
    const [measureList, setMeasureList] = useState([]);
    const [avg, setAvg] = useState(0);
    const [maj, setMaj] = useState(0)

    const Semaine = () => {
        Axios.get("http://192.168.210.135:3001/TACTIV/hostoric-measure-user-date-week",
            ).then((response) => {
            setMeasureList(response.data);
            setPeriode(" 1 semaine")
        }).catch(error => console.log(error));
        setMaj(maj + 1);
    };

    const Mois = () => {
        Axios.get("http://192.168.210.135:3001/TACTIV/hostoric-measure-user-date-1m",
        ).then((response) => {
            setMeasureList(response.data);
            setPeriode(" 1 Mois")
        }).catch(error => console.log(error));
        setMaj(maj + 1);
    };

    const Mois3 = () => {
        Axios.get("http://192.168.210.135:3001/TACTIV/hostoric-measure-user-date-3m",
        ).then((response) => {
            setMeasureList(response.data);
            setPeriode(" 3 Mois")
        }).catch(error => console.log(error));
        setMaj(maj + 1);
    };

    const Mois6 = () => {
        Axios.get("http://192.168.210.135:3001/TACTIV/hostoric-measure-user-date-6m",
        ).then((response) => {
            setMeasureList(response.data);
            setPeriode(" 6 Mois")
        }).catch(error => console.log(error));
        setMaj(maj + 1);
    };

    const Annee = () => {
        Axios.get("http://192.168.210.135:3001/TACTIV/hostoric-measure-user-date-1a",
        ).then((response) => {
            setMeasureList(response.data);
            setPeriode(" 1 an")
        }).catch(error => console.log(error));
        setMaj(maj + 1);
    };

    // const moyenne2 = () => {
    //     let m = 0;
    //     measureList.map(val){
    //         m = m + (val.count);
    //     }
    // };

    function moyenne() {
        let sum = 0;
        let array = measureList;
        let total = array.length

        for (let i = 0; i < total; i++) {
            sum += array[0];
        }
        return (sum/total);
    }

    return(
        <ScrollView >

            <Text style={styles.textDarkBold}>Sélectionner la période</Text>

            <TouchableOpacity
                title="Send"
                style={styles.buttonDark2}
                onPress={Semaine}
            >
                <Text style={styles.textLight2}>Semaine</Text>
            </TouchableOpacity>

            <TouchableOpacity
                title="Send"
                style={styles.buttonDark2}
                onPress={Mois}
            >
                <Text style={styles.textLight2}>Mois</Text>
            </TouchableOpacity>

            <TouchableOpacity
            title="Send"
            style={styles.buttonDark2}
            onPress={Mois3}
        >
            <Text style={styles.textLight2}>3 Mois</Text>
        </TouchableOpacity>

            <TouchableOpacity
                title="Send"
                style={styles.buttonDark2}
                onPress={Mois6}
            >
                <Text style={styles.textLight2}>6 Mois</Text>
            </TouchableOpacity>

            <TouchableOpacity
                title="Send"
                style={styles.buttonDark2}
                onPress={Annee}
            >
                <Text style={styles.textLight2}>Année</Text>
            </TouchableOpacity>


            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.textDarkBold}>Moyenne sur {periode}</Text>
                        <Text style={styles.textDarkBold}>{moyenne()}</Text>
                    </View>
                    <View style={styles.top}>
                        <Text style={styles.textDarkBold}>Mesures sur {periode}</Text>
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