import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; 
import Navegar from './src/Routes/Navegar'
export default function App(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
          <Navegar />
      </NavigationContainer>
    </SafeAreaView>
  )
}
