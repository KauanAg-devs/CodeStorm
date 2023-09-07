import React from "react";
import { StyleSheet, Dimensions } from "react-native";
// Estilo da tela de Login
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E1B22'
    },
    form: {
        backgroundColor: '#362C2F',
        borderRadius: 5,
        height: (Dimensions.get('window').height / 1.8),
        width: '70%',
        alignItems: 'center'
    },
    inputs: {
        backgroundColor: '#BDBDBD', 
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        height: '13%',
        width: '60%'
    }
})