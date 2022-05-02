import * as React from 'react';
import {useState,useEffect} from "react";
import {ScrollView, Button, View, Text, TouchableOpacity} from 'react-native';
import {Alert} from "react-native";
import {styles} from "../styles/style";
import Axios from "axios";


export default function Admin({navigation}) {

    const [userRole, setUserRole] = useState(2)
    const [maj, setMaj]= useState(0)

    useEffect(() => {

        Axios.get("http://192.168.210.135:3001/TACTIV/login").then((response) => {
            if (response.data.loggedIn === true) {
                setUserRole(response.data.user[0].role);
                setMaj(maj +1);

            } else{
                setMaj(maj +1);

            }
        }).catch(error => console.log(error));
        setMaj(maj +1);
    },[]);

    return(
        <ScrollView>
            <Text>{userRole}</Text>
            <View>
                <Text style={styles.textDarkBold}>Tableau de bord</Text>
            </View>
            <Text></Text>
            <View style={styles.top}>
                {userRole === 2 && (
                    <TouchableOpacity
                        title="Login"
                        onPress={() => navigation.navigate("Login")}
                        style={styles.buttonLight}
                    >
                        <Text style={styles.text}>Se connecter avec un compte admin</Text>
                    </TouchableOpacity>
                )}
                {userRole === 1 && (
                    <View>
                        <TouchableOpacity
                            title="Ajout Activité"
                            onPress={() => navigation.navigate("ActivityAdd")}
                            style={styles.buttonLight}
                        >
                            <Text style={styles.text}>Créer Activité</Text>
                        </TouchableOpacity>
                        <Text></Text>
                        <TouchableOpacity
                            title="Voir les données"
                            onPress={() => navigation.navigate("GlobalHistorique")}
                            style={styles.buttonLight}
                        >
                            <Text style={styles.text}>Voir les objectifs et mesures</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>

    );
}