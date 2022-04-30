import * as React from 'react';
import {useState, useEffect} from "react";
import { Button, View, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import {Alert} from "react-native";
import Axios from "axios";
import {styles} from "../styles/style";
// import DateTimePickerModal from "react-native-modal-datetime-picker";



export default function ActivityCreate () {

    // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [maj,setMaj] = useState(0);
    const [name,setName] = useState("");
    const [placeNumber,setPlaceNumber] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate]= useState("");
    const [type,setType] = useState("");
    const [description,setDescription] = useState("");

    // const showDatePicker = () => {
    //     setDatePickerVisibility(true);
    // };
    // const showDatePicker2 = () => {
    //     setDatePickerVisibility(true);
    // };
    // const hideDatePicker = () => {
    //     setDatePickerVisibility(false);
    //     setMaj(maj+1);
    // };
    // const StartDate = (date) => {
    //     setStartDate(date.toString());
    //     hideDatePicker();
    //     console.log(startDate);
    // };
    // const EndDate = (date2) => {
    //     setEndDate(date2.toString());
    //     hideDatePicker();
    //     console.log(endDate);
    // };
    const CreateActivity = () => {
        Axios.post("http://192.168.1.85:3001/TACTIV/activity-add", {
            name : name,
            placeNumber : placeNumber,
            startDate : startDate,
            endDate : endDate,
            type : type,
            description : description,
        }).then((response) => {
            Alert.alert(response.data.message);
        }).catch(error => console.log(error));
        setMaj(maj + 1);
    };

    return(
        <KeyboardAvoidingView>
            <ScrollView>
                <View>
                    <Text style={styles.textDarkBold}>Renseigner les informations liées à l'activité</Text>
                </View>
                <Text></Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => setName(e)}
                    placeholder="Nom de l'activité"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={e => setPlaceNumber(e)}
                    placeholder="Nombre de place"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={e => setStartDate(e)}
                    placeholder="Date de début yyyy-mm-dd hh:mm:ss"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={e => setEndDate(e)}
                    placeholder="Date de fin yyyy-mm-dd hh:mm:ss"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={e => setType(e)}
                    placeholder="Type"
                />
                <TextInput
                    style={styles.input2}
                    onChangeText={e => setDescription(e)}
                    placeholder="Description"
                    multiline = {true}
                />


                <TouchableOpacity
                    title="SendActivity"
                    onPress={CreateActivity}
                    style={styles.buttonDark2}
                >
                    <Text style={styles.textLight}>Ajouter l'activité !</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}