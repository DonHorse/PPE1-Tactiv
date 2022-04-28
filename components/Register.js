import * as React from 'react';
import {Button, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {styles} from "../styles/style";


export default function Register () {

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View>
                <TextInput type="text" placeholder="Email" style={styles.input}/>
                <TextInput secureTextEntry={true} placeholder="Mot de passe" style={styles.input}/>
                <Text></Text>
                <TouchableOpacity
                    title="Send"
                    style={styles.buttonDark2}
                >
                    <Text style={styles.textLight2}>Enregistrer</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}