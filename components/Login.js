import * as React from 'react';
import {View, Image, TextInput, Platform, Text, TouchableOpacity, KeyboardAvoidingView,} from 'react-native';
import {styles} from "../styles/style";


export default function Login () {

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
                <TextInput type="text" placeholder="Email" style={styles.input}/>
                <TextInput secureTextEntry={true} placeholder="Mot de passe" style={styles.input}/>
                <Text></Text>
                <TouchableOpacity
                    title="Send"
                    style={styles.buttonDark2}
                >
                    <Text style={styles.textLight2}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}