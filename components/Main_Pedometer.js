import * as React from 'react';
import {Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import {styles} from "../styles/style";





export default function Main_Pedometer ({navigation}) {

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.top}>
                <TouchableOpacity
                    title="Login"
                    onPress={() => navigation.navigate("Login")}
                    style={styles.buttonLight}
                >
                    <Text style={styles.text}>Se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    title="Login"
                    onPress={() => navigation.navigate("Register")}
                    style={styles.buttonDark}
                >
                    <Text style={styles.textLight}>S'enregistrer</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.middle}>

                <Text style={styles.textDark}>Podomètre</Text>
                <Text></Text>
                <Image
                    style={styles.box}
                    source={require('../assets/T-Activ-Logo.png')}
                />
                <Text></Text>

                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    placeholder="Entrer le nombre de pas"
                    keyboardType="numeric"
                />
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