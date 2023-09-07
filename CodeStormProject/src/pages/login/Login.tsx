import * as React from 'react'
import { View, Text, TextInput } from 'react-native'
import style from './style'
interface Props {

}

export default function Login(props: Props) {
    
    return(
        <View style={style.container}>
            <View style={style.form}>
                    <TextInput 
                    placeholder='User'
                    style={style.inputs}/>

                    <TextInput 
                    placeholder='PassWord'
                    secureTextEntry
                    style={style.inputs}/>

            </View>
        </View>
    )
}