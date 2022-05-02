import * as React from 'react';
import {useState} from "react";
import {View, Alert, Image, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform,} from 'react-native';
import {styles} from "../styles/style";
import Axios from "axios";


export default function Register ({navigation}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState(2);
    const [password, setPassword] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://192.168.210.135:3001/TACTIV/register", {
            name: name,
            email: email,
            password: password,
            role : role,
        }).then((response) => {
            Alert.alert(response.data.message);
        }).catch(error => console.log(error));
    };
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
                <TextInput type="text"
                           placeholder="Nom"
                           style={styles.input}
                           onChangeText={e => setName(e)}
                />
                <TextInput type="text"
                           placeholder="Email"
                           style={styles.input}
                           onChangeText={e => setEmail(e)}
                />
                <TextInput secureTextEntry={true}
                           placeholder="Mot de passe"
                           style={styles.input}
                           onChangeText={e => setPassword(e)}
                />
                <Text></Text>
                <TouchableOpacity
                    title="Send"
                    style={styles.buttonDark2}
                    onPress={register}
                >
                    <Text style={styles.textLight2}>Enregistrer</Text>
                </TouchableOpacity>
                <Text></Text>
                <Text style={styles.textDark}>Déjà enregistré ?</Text>
                <TouchableOpacity
                    title="Login"
                    onPress={() => navigation.navigate("Login")}
                    style={styles.buttonLight2}
                ><Text style={styles.textDark}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}