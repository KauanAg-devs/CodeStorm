import React, { useState } from "react"; 
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'
import ButtonLogin from "../components/ButtonLogin";
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
export default function Login() {
    const [user, setUser] = useState("")
    const [passWord, setPassWord] = useState("")
    const navigation = useNavigation();

    
    function Submit() {
        if(passWord.length < 8) {
            console.warn("Digite 8 Caracteres");
            return;
        }
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{name: 'Home'}]
            })
        )
    }

    function handleUser(e: string) {
        setUser(e)
    }
    function PassWord(e: string) {
        setPassWord(e)
    }
    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.inputsContainer}>
                    <TextInput
                    value={user} 
                    onChangeText={handleUser} 
                    style={styles.inputs} 
                    placeholder="User"
                    placeholderTextColor='black'/>
                    <TextInput
                    value={passWord}
                    onChangeText={PassWord}
                    style={styles.inputs}
                    secureTextEntry={true}  
                    placeholder="PassWord" 
                    placeholderTextColor='black'/>
                </View>
                <ButtonLogin onClick={Submit}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E1B22'
    },
    form: {
        backgroundColor: '#362C2F',
        height: Dimensions.get('window').height / 2.5,
        width: '70%',
        borderRadius: 5,
        gap: 25
    },
    inputsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        height: '60%',
        width: '100%',
        gap: 50
    },
    inputs: {
        width: '70%',
        height: '20%',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: '#BDBDBD',
        borderRadius: 5
    }
})