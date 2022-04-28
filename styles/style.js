import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


        container: {
            flex: 1,
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 20,
            margin: 10,
            borderRadius:5,
        },

        top: {
            flex: 0.3,
            justifyContent:"space-evenly",
            borderRadius : 15

        },
        middle: {
            flex: 0.7,
            backgroundColor: "#CFDBD5",
            borderRadius : 15

        },
        bottom: {
            flex: 0.3,
            backgroundColor: "pink",
            borderWidth: 5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
        },

    box: {
        width: '50%',
        height: 150,
        alignSelf: 'center',
        borderRadius: 9
    },
    buttonLight: {
        backgroundColor: '#F2BD2C',
        paddingHorizontal:25,
        paddingVertical:12,
        borderRadius: 25,
        color:'#242423',
    },
    buttonDark: {
        backgroundColor: '#333533',
        paddingHorizontal:25,
        paddingVertical:12,
        borderRadius: 25,
        color:'#FFF'
    },

    buttonDark2: {
        backgroundColor: '#333533',
        paddingHorizontal:25,
        paddingVertical:12,
        borderRadius: 25,
        color:'#FFF',
        width: '50%',
        alignSelf:'center',
    },

    tab: {
        backgroundColor: '#F2BD2C',
        color:'#242423',
    },

    textDark:{
        color:'#242423',
        alignSelf:"center",
    },

    textLight:{
        color:'#fff',
    },
    textLight2:{
        color:'#fff',
        alignSelf:'center',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },


});

export { styles }