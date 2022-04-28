import * as React from 'react';
import { Button, View, TextInput,Text } from 'react-native';
import {Alert} from "react-native";


export default function Activities () {

    return(
        <View>
            <Text>Activités</Text>
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    );
}