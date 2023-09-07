import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TelaA from '../pages/TelaA';
import TelaB from '../pages/TelaB';
import TelaC from '../pages/TelaC';
export default function Nav() {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName='TelaA'>
            <Stack.Screen 
            name='TelaA' 
            component={TelaA}
            options={{title: 'Iniciar Navegação'}}/>

        <Stack.Screen 
            name='TelaB' 
            component={TelaB}
            options={{title: 'Continuar'}}/>

        <Stack.Screen 
            name='TelaC' 
            component={TelaC}
            options={{title: 'Voltar'}}/>
        </Stack.Navigator>
    )
}