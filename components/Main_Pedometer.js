import * as React from 'react';
import {useState, useEffect} from "react";
import {
    Image,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import {styles} from "../styles/style";
import Axios from "axios";





export default function Main_Pedometer ({navigation}) {

    const [loginStat, setLoginStat] = useState(false);
    const [user, setUser] = useState("");
    const [goal, setGoal]=useState(0);
    const [stepCount, setStepCount] = useState(0);
    const [addSteps, setAddSteps] = useState(0);
    const [addGoal, setAddGoal] = useState(0);

    // requête à l'API GET (Gestion du statut Login ou logout)
    Axios.defaults.withCredentials = true;

    const Logout = () => {

        Axios.get("http://192.168.1.85:3001/TACTIV/logout").then((response) => {
            if (response) {
                setLoginStat(false);
                setUser("")
                console.log("logout");
                window.location = "/login";

            }
        });
    };

    const AddMeasure = () => {
        Axios.post("http://192.168.1.85:3001/TACTIV/measure-add", {
            addSteps : addSteps,
        }).then((response) => {
            Alert.alert(response.data.message);
        }).catch(error => console.log(error));
    };

    const CreateGoal = () => {
        Axios.post("http://192.168.1.85:3001/TACTIV/goal-add", {
            addGoal : addGoal,
    }).then((response) => {
            Alert.alert(response.data.message);
        }).catch(error => console.log(error));
    };



    useEffect( () => {
        Axios.get("http://192.168.1.85:3001/TACTIV/goal-user").then((response) => {
            if (response) {
                setGoal(response.data[0].count);
            }
        }).catch(error => console.log(error));
    });

    useEffect( () => {
        Axios.get("http://192.168.1.85:3001/TACTIV/stepcount-user").then((response) => {
            if (response) {
                setStepCount(response.data[0].count);
                if(stepCount >= goal){
                    Axios.put("http://192.168.1.85:3001/TACTIV/goal-validation",{
                    }).then((response) => {
                        Alert.alert(response.data.message);
                    }).catch(error => console.log(error));
                };
            }
        }).catch(error => console.log(error));;
    });


    useEffect(() => {
        Axios.get("http://192.168.1.85:3001/TACTIV/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStat(true);
                setUser(response.data.user[0].email);
            } else{
                setLoginStat(false);
            }
        });
    });

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        ><ScrollView>
            <Text>{user}</Text>
            <View style={styles.top}>
                {loginStat === false && (
                    <TouchableOpacity
                        title="Login"
                        onPress={() => navigation.navigate("Login")}
                        style={styles.buttonLight}
                    >
                        <Text style={styles.text}>Se connecter</Text>
                    </TouchableOpacity>
                )}
                {loginStat === true && (
                    <TouchableOpacity
                        title="Logout"
                        onPress={() => {Logout()}}
                        style={styles.buttonLight}
                    >
                        <Text style={styles.text}>Se Déconnecter</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity
                    title="Login"
                    onPress={() => navigation.navigate("Register")}
                    style={styles.buttonDark}
                >
                    <Text style={styles.textLight}>S'enregistrer</Text>
                </TouchableOpacity>
            </View>
            <Text></Text>
            <View style={styles.middle}>

                <Text></Text>
                <Image
                    style={styles.box}
                    source={require('../assets/T-Activ-Logo.png')}
                />
                <Text></Text>
                {loginStat === true && (
                    <View>
                        <Text style={styles.textDark}>Podomètre</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={e => setAddSteps(e)}
                            placeholder="Entrer le nombre de pas"
                            keyboardType="numeric"
                        />
                        <TouchableOpacity
                            title="Send"
                            onPress={AddMeasure}
                            style={styles.buttonDark2}
                        >
                            <Text style={styles.textLight2}>Enregistrer</Text>
                        </TouchableOpacity>
                        <Text></Text>
                        <View style={styles.container}>
                            <Text style={styles.textDark}>Objectif</Text>
                            <Text style={styles.textDark}>{stepCount} / {goal}</Text>
                        </View>
                            <Text></Text>
                            <Text style={styles.textDark}>Ajouter un objectif</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={e => setAddGoal(e)}
                                placeholder="Entrer le nombre de pas"
                                keyboardType="numeric"
                            />
                            <TouchableOpacity
                                title="Send2"
                                onPress={CreateGoal}
                                style={styles.buttonDark2}
                            >
                                <Text style={styles.textLight2}>Enregistrer</Text>

                            </TouchableOpacity>
                        <Text></Text>
                    </View>
                    )}
            </View>
        </ScrollView>
        </KeyboardAvoidingView>

    );
}