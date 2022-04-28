import * as React from 'react';
import {Button, View, TextInput, Alert} from 'react-native';
import {styles} from "../styles/style";


export default function Login () {

    return(
        <View>
            <TextInput type="text" placeholder="Email"/>
            <TextInput secureTextEntry={true} placeholder="Mot de passe"/>
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
                style={styles.buttonLight}
            />
        </View>
    );
}