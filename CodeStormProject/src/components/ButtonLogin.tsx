import React from "react";
import { TouchableHighlight, View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

interface Props {
    onClick: Function
}

export default function ButtonLogin(props: Props) {
    return(
        <View style={styles.container}>
            <TouchableHighlight onPress={() => props.onClick()} style={styles.button}>
                <AntDesign style={styles.icon}  name="rightcircleo" size={34} color="#BDBDBD" />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#707070',
        borderRadius: 50,
        width: '50%',
        height: '100%'
    },
    icon: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%'
    }
})