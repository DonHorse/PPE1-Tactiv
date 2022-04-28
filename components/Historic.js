import * as React from 'react';
import {Button, View,  Text, Alert} from 'react-native';


export default function Historic () {

    return(
        <View>
            <Text>Historique</Text>
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    );
}