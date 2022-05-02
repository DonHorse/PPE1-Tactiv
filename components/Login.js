import * as React from 'react';
import {useState, useEffect} from "react";
import {View, Image, TextInput, Platform, Text, TouchableOpacity, KeyboardAvoidingView, Alert,} from 'react-native';
import {styles} from "../styles/style";
import Axios from "axios";


export default function Login ({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    // requête à l'API POST (renvoie un user si connexion réussi)
    const login = () => {
        Axios.post("http://192.168.210.135:3001/TACTIV/login", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
                Alert.alert(response.data.message);

            } else {
                setLoginStatus(response.data[0].email);
                navigation.navigate('Pedometer', {setLoginStat : true});
            }
        });
    }
    // requête à l'API GET (info si connexion)
    useEffect(() => {
        Axios.get("http://192.168.210.135:3001/TACTIV/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus("Connecté avec : "+ response.data.user[0].email);
            }
        });
    }, []);

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View>
                <Image
                    style={styles.box}
                    source={require('../assets/logo.png')}
                />
                <TextInput type="text" placeholder="Email" style={styles.input} onChangeText={e => setEmail(e)}/>
                <TextInput secureTextEntry={true} placeholder="Mot de passe" style={styles.input} onChangeText={e => setPassword(e)}/>

                <Text></Text>
                <TouchableOpacity
                    title="Send"
                    style={styles.buttonDark2}
                    onPress={() => {login()}}
                >
                    <Text style={styles.textLight2}>Se connecter</Text>
                </TouchableOpacity>
                <Text></Text>
                <Text style={styles.textDark}>Pas sencore enregistré ?</Text>
                <TouchableOpacity
                    title="Login"
                    onPress={() => navigation.navigate("Register")}
                    style={styles.buttonLight2}
                ><Text style={styles.textDark}>S'enregistrer</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>{loginStatus}</Text>
            </View>
        </KeyboardAvoidingView>
    );
}